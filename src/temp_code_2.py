I can't fetch all files at once, but I can help you convert the provided JavaScript (Node.js/Express) controller code into a FastAPI (Python) version. If you want to convert additional files or need the FastAPI version for other specific controllers/models, let me know their names or provide their content.

Here's a FastAPI version of your admin-routes-controller.js functionality, assuming you have corresponding SQLAlchemy models for Citizen, Case, and Notification:

Python
from fastapi import FastAPI, HTTPException, Request, Body, Path
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field
from typing import Optional, List, Dict
from sqlalchemy.orm import Session
from database import get_db  # Assuming you have a dependency for your DB session
from models import Citizen, Case, Notification  # Your ORM models

app = FastAPI()

# Pydantic schemas
class CaseCreate(BaseModel):
    caseType: str
    description: str
    district: str
    documents: List[str]
    registrationFees: float
    state: str
    userAadhar: str
    userId: str

class CaseUpdate(BaseModel):
    updates: Dict

class LawyerUpdate(BaseModel):
    action: str
    new_status: Optional[str] = ""
    lawyerDocuments: Optional[List[str]] = []
    lawyerName: Optional[str] = ""
    enrollmentNumber: Optional[str] = ""

# Example route to get all cases
@app.get("/admin/cases/{a_id}")
def get_all_cases(a_id: str, db: Session = Depends(get_db)):
    try:
        all_cases = db.query(Case).all()
    except Exception as e:
        raise HTTPException(status_code=500, detail="Could not fetch cases, try again.")
    return {"message": "Found matching cases after filtering", "data": all_cases}

# Create new case
@app.post("/admin/cases")
def create_new_case(case: CaseCreate, db: Session = Depends(get_db)):
    citizen = db.query(Citizen).filter(Citizen.id == case.userId).first()
    if not citizen:
        raise HTTPException(status_code=404, detail="Could not find user, please try again.")

    try:
        new_case = Case(
            caseTitle="New Application",
            registrationFees=case.registrationFees,
            aadharNo=case.userAadhar,
            summary=case.description,
            state=case.state,
            district=case.district,
            caseType=case.caseType,
            status="filed",
            documents=case.documents,
            plaintiffId=case.userId,
        )
        db.add(new_case)
        db.commit()
        db.refresh(new_case)
        notification = Notification(
            userId=case.userId,
            message='Your application is received. Kindly wait until verifications.'
        )
        db.add(notification)
        db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Could not create case.")

    return {"message": "Case created successfully", "case": new_case}

# Update hearing
@app.patch("/admin/cases/{id}")
def update_hearing(id: str, updates: dict = Body(...), db: Session = Depends(get_db)):
    case = db.query(Case).filter(Case.id == id).first()
    if not case:
        raise HTTPException(status_code=404, detail="Case not found.")

    for key, value in updates.items():
        setattr(case, key, value)
    db.commit()
    db.refresh(case)

    notification = Notification(
        userId=case.plaintiffId,
        message="Case schedule is updated."
    )
    db.add(notification)
    db.commit()

    return {"message": "Case Updated", "caseObject": case}

# Updates and verification
@app.patch("/admin/cases/verify/{id}")
def updates_and_verification(
    id: str,
    data: LawyerUpdate,
    db: Session = Depends(get_db)
):
    case = db.query(Case).filter(Case.id == id).first()
    if not case:
        raise HTTPException(status_code=500, detail="Failed to update! Case not found.")
    if data.action == "verify-documents":
        case.status = data.new_status
    elif data.action == 'update-lawyer':
        case.status = "pending"
    case.lawyer = {
        "lawyerName": data.lawyerName,
        "enrollmentNumber": data.enrollmentNumber,
        "relatedDocs": data.lawyerDocuments,
    }
    notification = Notification(
        userId=case.plaintiffId,
        message="Your Case Lawyer is updated."
    )
    try:
        db.add(notification)
        db.commit()
        db.refresh(case)
    except Exception:
        db.rollback()
        raise HTTPException(status_code=500, detail="Something went wrong, could not update Case.")
    return {"message": f"Your case {id} is updated.", "data": case}

# Withdraw case
@app.delete("/admin/cases/{cID}")
def withdraw_case(cID: str, db: Session = Depends(get_db)):
    case = db.query(Case).filter(Case.id == cID).first()
    if not case:
        raise HTTPException(status_code=404, detail="could not find a case by this ID")
    db.delete(case)
    db.commit()
    return {"message": "Deleted Case"}
Notes:

You'll need to adapt your models (Citizen, Case, Notification) and DB session logic (get_db) for SQLAlchemy or your ORM of choice.
For full functionality, you will also need to port the models and any middleware, error classes, and validation logic.
If you need FastAPI versions of your models or want to see the code for other files, please specify which files you want to convert.
run its performance and diff response times by locust , compare it with citizen routes controller
To compare the performance and response times of the admin routes controller vs the citizen routes controller in your backend using Locust, you would:

Implement both controllers in FastAPI (as you requested in your previous message).
Write Locust load test scripts to simulate API requests to the endpoints exposed by both controllers.
Run Locust tests and collect response time statistics.
Compare results (average response time, throughput, failures, etc.).
1. FastAPI Endpoints Needed
You already have the admin routes code. Do you want me to generate the FastAPI code for the citizen routes controller as well? If yes, please provide its code or confirm the file path (likely controllers/citizen-routes-controller.js).

2. Example Locust Script
Below is an example Locust script to benchmark both controllers (assuming both are available as FastAPI endpoints). You'll need to adapt the URLs and payloads to your actual API.

Python
from locust import HttpUser, task, between

class AdminRoutesUser(HttpUser):
    wait_time = between(1, 3)

    @task
    def get_all_cases(self):
        self.client.get("/admin/cases/1")  # replace '1' with a real admin id

    @task
    def create_case(self):
        payload = {
            "caseType": "TypeA",
            "description": "A test case",
            "district": "DistrictX",
            "documents": [],
            "registrationFees": 100.0,
            "state": "StateX",
            "userAadhar": "123456789012",
            "userId": "some-user-id"
        }
        self.client.post("/admin/cases", json=payload)

class CitizenRoutesUser(HttpUser):
    wait_time = between(1, 3)

    @task
    def get_my_cases(self):
        self.client.get("/citizen/cases/1")  # adjust to real endpoint

    @task
    def apply_new_case(self):
        payload = {
            "caseType": "TypeB",
            "description": "Citizen test case",
            "district": "DistrictY",
            "documents": [],
            "registrationFees": 50.0,
            "state": "StateY",
            "userAadhar": "098765432109",
            "userId": "another-user-id"
        }
        self.client.post("/citizen/cases", json=payload)
Save this as locustfile.py.
You can run Locust with:

bash
locust -f locustfile.py --headless -u 10 -r 2 -t 1m --host http://localhost:8000
Adjust host and endpoint URLs as per your FastAPI app.

3. Running Locust
Open http://localhost:8089 in your browser (if not using headless).
Start each test and review the statistics for both user classes:
Average response time
Requests per second
Failures
95th/99th percentile response times
4. Comparing Results
After running the test:

Compare the average response times of admin vs citizen routes.
Look at failures and throughput.
Check if either controller is significantly slower or has more errors.
You can export results as CSV from the Locust UI for further analysis.

Next Steps:

Do you want FastAPI code for the citizen controller as well?
Do you want example Locust results/comparison table?
Please confirm the endpoints and request payloads to use for the most accurate Locust script.
Let me know how you'd like to proceed!

yes generate fastAPI code for citizen routes controller and run metrics
3 references
Here is a FastAPI version of the main endpoints from your citizen-routes-controller.js, followed by an outline for how you would use Locust to run and compare API performance metrics between the admin and citizen controllers.

FastAPI Version: Citizen Routes Controller
Assumptions:

You have SQLAlchemy models for Citizen, Case, and Notification.
JWT handling uses the pyjwt library.
You have a get_db() dependency for DB sessions.
Python
from fastapi import FastAPI, HTTPException, Depends, Body, Path
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr
from typing import List, Optional, Dict
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

class FilterCases(BaseModel):
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
    new_user = Citizen(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    token = jwt.encode(
        {"userId": new_user.id, "email": new_user.email},
        os.getenv("JWT_SECRET", "default_secret"),
        algorithm="HS256"
    )
    return {"user": new_user, "token": token}

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
    filter: Optional[FilterCases] = None, 
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
Locust: Running Performance Metrics
Create a locustfile.py that targets both admin and citizen endpoints. Example:

Python
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
Metrics & Comparison
Run Locust with enough users and time to get stable response times.
Compare:
Average response time
Median/95th percentile response time
Requests per second
Error rates
Analyze if either controller is slower (e.g. due to DB joins, validation, etc.).
Would you like a sample metrics report table format, or sample Locust payloads for testing?
If you want the OTP or notification endpoints migrated as well, just ask!

yes , do it , that's the first thing i asked
Here is the FastAPI version of your citizen-routes-controller.js logic, based on the code provided. This will give you comparable endpoints for Locust-based performance testing against your admin routes.

FastAPI Version: Citizen Routes Controller
Assumptions:

You have SQLAlchemy models for Citizen, Case, and Notification.
JWT is handled via pyjwt.
You have a get_db() dependency for DB sessions.
Passwords are plaintext for demo purposes (add hashing for production!).
Adjust endpoint routes to match your needs.
Python
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
Next Steps
Save this controller as part of your FastAPI app.
Make sure your ORM models (Citizen, Case, Notification) and DB session handling are set up.
You can now use Locust to run performance comparisons between /admin/... and /citizen/... endpoints.
If you need:

Example Locust scripts for both controllers
A sample Locust report format
Help running the tests
Just say the word!

I need A sample locust report format for both controllers in excel table format
Certainly! Here’s a sample Locust performance report table in Excel format, showing typical metrics you’ll want to compare for your Admin and Citizen routes. You can copy this table into Excel for direct use.

Endpoint	# Requests	# Fails	Median Response Time (ms)	Average Response Time (ms)	Min Response Time (ms)	Max Response Time (ms)	95%ile Response Time (ms)	Requests/s	Failures/s
/admin/cases	5000	2	120	130	80	300	180	16.7	0.007
/admin/cases (POST)	2500	3	200	210	110	420	300	8.3	0.010
/citizen/1	5000	1	100	110	70	250	160	16.7	0.003
/citizen/login	3000	0	150	155	90	320	200	10.0	0.000
/citizen/1/cases	3000	5	170	175	95	350	250	10.0	0.017
Total	18,500	11	---	---	---	---	---	61.7	0.037
Columns explained:

Endpoint: The API endpoint tested
# Requests: Number of requests made during the test
# Fails: Number of failed requests
Median Response Time (ms): Median time for a response
Average Response Time (ms): Mean response time
Min/Max Response Time (ms): Shortest/longest response observed
95%ile Response Time (ms): 95th percentile response time (good for seeing outliers)
Requests/s: Throughput
Failures/s: Failure rate per second
How to use:

After your Locust run, export or copy/paste the statistics into this format.
Compare the metrics between your admin and citizen controllers for performance tuning.
Let me know if you need a downloadable Excel file or a sample Locust CSV export!

