Endpoint | # Requests | # Fails | Median Response Time (ms) | Average Response Time (ms) | Min Response Time (ms) | Max Response Time (ms) | 95%ile Response Time (ms) | Requests/s | Failures/s |

| /admin/cases | 5000 |    2    |         120              |            130             |         80             |         300            |           180             |    16.7    |   0.007    |
| /admin/cases (POST)    |     2500   |    3    |         200              |            210             |        110             |         420            |           300             |     8.3    |   0.010    |
| /citizen/1             |     5000   |    1    |         100              |            110             |         70             |         250            |           160             |    16.7    |   0.003    |
| /citizen/login         |     3000   |    0    |         150              |            155             |         90             |         320            |           200             |    10.0    |   0.000    |
| /citizen/1/cases       |     3000   |    5    |         170              |            175             |         95             |         350            |           250             |    10.0    |   0.017    |
| **Total**              |   18,500   |   11    |         ---              |             ---            |         ---            |         ---            |           ---             |    61.7    |   0.037    |

**Columns explained:**
- **Endpoint:** The API endpoint tested
- **# Requests:** Number of requests made during the test
- **# Fails:** Number of failed requests
- **Median Response Time (ms):** Median time for a response
- **Average Response Time (ms):** Mean response time
- **Min/Max Response Time (ms):** Shortest/longest response observed
- **95%ile Response Time (ms):** 95th percentile response time (good for seeing outliers)
- **Requests/s:** Throughput
- **Failures/s:** Failure rate per second

---

**How to use:**
- After your Locust run, export or copy/paste the statistics into this format.
- Compare the metrics between your admin and citizen controllers for performance tuning.

Let me know if you need a downloadable Excel file or a sample Locust CSV export!


from fastapi import FastAPI, HTTPException, Depends, Path, Body
from pydantic import BaseModel, EmailStr
from typing import Optional, List
from sqlalchemy.orm import Session
import jwt
import os

from models import Citizen, Case, Notification  # Your SQLAlchemy models
from database import get_db  # DB dependency

app = FastAPI()

class CitizenCreate(BaseModel):
    fullName: str
    email: EmailStr
    password: str
    phone: str
    addressState: str
    addressDistrict: str

class CitizenLogin(BaseModel):
    email: EmailStr
    password: str

class CitizenResetPassword(BaseModel):
    new_password: str

class CaseFilter(BaseModel):
    status: Optional[str] = None

@app.get("/citizen/{id}")
def get_citizen(id: str, db: Session = Depends(get_db)):
    citizen = db.query(Citizen).get(id)
    if not citizen:
        raise HTTPException(status_code=404, detail="User not found")
    return {"user": citizen}

@app.post("/citizen")
def create_user(user: CitizenCreate, db: Session = Depends(get_db)):
    existing_user = db.query(Citizen).filter(Citizen.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=422, detail="User already exists with this email")
    new_citizen = Citizen(**user.dict())
    db.add(new_citizen)
    db.commit()
    db.refresh(new_citizen)
    token = jwt.encode(
        {"userId": new_citizen.id, "email": new_citizen.email},
        os.getenv("JWT_SECRET", "default_secret"),
        algorithm="HS256"
    )
    return {"user": new_citizen, "token": token}

@app.post("/citizen/login")
def login_user(credentials: CitizenLogin, db: Session = Depends(get_db)):
    citizen = db.query(Citizen).filter(Citizen.email == credentials.email).first()
    if not citizen or citizen.password != credentials.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = jwt.encode(
        {"userId": citizen.id, "email": citizen.email},
        os.getenv("JWT_SECRET", "default_secret"),
        algorithm="HS256"
    )
    return {"user": citizen, "message": "Login successful", "token": token}

@app.post("/citizen/{id}/cases")
def get_cases_by_user_id(
    id: str,
    filter: Optional[CaseFilter] = None,
    db: Session = Depends(get_db)
):
    citizen = db.query(Citizen).get(id)
    if not citizen:
        raise HTTPException(status_code=404, detail="User not found")
    all_cases = db.query(Case).filter(Case.plaintiffId == id).all()
    closed_cases = db.query(Case).filter(Case.plaintiffId == id, Case.status == "closed").all()
    total_cases_length = len(all_cases)
    closed_cases_length = len(closed_cases)
    active_cases_length = total_cases_length - closed_cases_length
    filtered_cases = all_cases
    if filter and filter.status:
        filtered_cases = db.query(Case).filter(Case.plaintiffId == id, Case.status == filter.status).all()
    return {
        "activeCases": active_cases_length,
        "closedCases": closed_cases_length,
        "totalCases": total_cases_length,
        "allCases": filtered_cases
    }

@app.post("/citizen/{id}/reset-password")
def reset_password(
    id: str,
    data: CitizenResetPassword,
    db: Session = Depends(get_db)
):
    citizen = db.query(Citizen).get(id)
    if not citizen:
        raise HTTPException(status_code=404, detail="User not found")
    citizen.password = data.new_password
    db.commit()
    notification = Notification(userId=id, message="Your password has been reset.")
    db.add(notification)
    db.commit()
    return {"message": "Password reset successfully"}


    =====================================================================

    from locust import HttpUser, task, between

class AdminUser(HttpUser):
    wait_time = between(1, 2)
    @task
    def get_cases(self):
        self.client.get("/admin/cases/1")
    @task
    def create_case(self):
        self.client.post("/admin/cases", json={...})  # fill with sample payload

class CitizenUser(HttpUser):
    wait_time = between(1, 2)
    @task
    def get_user(self):
        self.client.get("/citizen/1")
    @task
    def create_user(self):
        self.client.post("/citizen", json={...})  # fill with sample payload
    @task
    def login(self):
        self.client.post("/citizen/login", json={...})  # fill with sample payload

# Save as locustfile.py
# Run with: locust -f locustfile.py --host=http://localhost:8000
========================================================================

from fastapi import FastAPI, HTTPException, Depends, Path, Body
from pydantic import BaseModel, EmailStr
from typing import Optional, List
from sqlalchemy.orm import Session
import jwt
import os

from models import Citizen, Case, Notification  # Your SQLAlchemy models
from database import get_db  # DB dependency

app = FastAPI()

class CitizenCreate(BaseModel):
    fullName: str
    email: EmailStr
    password: str
    phone: str
    addressState: str
    addressDistrict: str

class CitizenLogin(BaseModel):
    email: EmailStr
    password: str

class CitizenResetPassword(BaseModel):
    new_password: str

class CaseFilter(BaseModel):
    status: Optional[str] = None

@app.get("/citizen/{id}")
def get_citizen(id: str, db: Session = Depends(get_db)):
    citizen = db.query(Citizen).get(id)
    if not citizen:
        raise HTTPException(status_code=404, detail="User not found")
    return {"user": citizen}

@app.post("/citizen")
def create_user(user: CitizenCreate, db: Session = Depends(get_db)):
    existing_user = db.query(Citizen).filter(Citizen.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=422, detail="User already exists with this email")
    new_citizen = Citizen(**user.dict())
    db.add(new_citizen)
    db.commit()
    db.refresh(new_citizen)
    token = jwt.encode(
        {"userId": new_citizen.id, "email": new_citizen.email},
        os.getenv("JWT_SECRET", "default_secret"),
        algorithm="HS256"
    )
    return {"user": new_citizen, "token": token}

@app.post("/citizen/login")
def login_user(credentials: CitizenLogin, db: Session = Depends(get_db)):
    citizen = db.query(Citizen).filter(Citizen.email == credentials.email).first()
    if not citizen or citizen.password != credentials.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = jwt.encode(
        {"userId": citizen.id, "email": citizen.email},
        os.getenv("JWT_SECRET", "default_secret"),
        algorithm="HS256"
    )
    return {"user": citizen, "message": "Login successful", "token": token}

@app.post("/citizen/{id}/cases")
def get_cases_by_user_id(
    id: str,
    filter: Optional[CaseFilter] = None,
    db: Session = Depends(get_db)
):
    citizen = db.query(Citizen).get(id)
    if not citizen:
        raise HTTPException(status_code=404, detail="User not found")
    all_cases = db.query(Case).filter(Case.plaintiffId == id).all()
    closed_cases = db.query(Case).filter(Case.plaintiffId == id, Case.status == "closed").all()
    total_cases_length = len(all_cases)
    closed_cases_length = len(closed_cases)
    active_cases_length = total_cases_length - closed_cases_length
    filtered_cases = all_cases
    if filter and filter.status:
        filtered_cases = db.query(Case).filter(Case.plaintiffId == id, Case.status == filter.status).all()
    return {
        "activeCases": active_cases_length,
        "closedCases": closed_cases_length,
        "totalCases": total_cases_length,
        "allCases": filtered_cases
    }

@app.post("/citizen/{id}/reset-password")
def reset_password(
    id: str,
    data: CitizenResetPassword,
    db: Session = Depends(get_db)
):
    citizen = db.query(Citizen).get(id)
    if not citizen:
        raise HTTPException(status_code=404, detail="User not found")
    citizen.password = data.new_password
    db.commit()
    notification = Notification(userId=id, message="Your password has been reset.")
    db.add(notification)
    db.commit()
    return {"message": "Password reset successfully"}

    =====================================================================