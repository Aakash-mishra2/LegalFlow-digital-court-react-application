import Overview from "./Overview";
import CaseStatusTracker from "./CaseStatusTracker";
import { lawyersData } from "../../../constants/data/dummyCasesList";
import LawyersSection from "./YourLawyers";
import { fetchAllCases } from "../../../api/fetchAllCases";
import { useSelector } from "react-redux";
import Button from "../../../shared/formElements/Button";
import { useNavigate } from "react-router";

const Dashboard = () => {
    const allCasesData = useSelector((state) => state.courtAccount);
    const history = useNavigate();

    return (
        <div className="bg-gray-200 h-screen overflow-y-scroll flex flex-row">
            <div id="ovw-hrn" className="flex flex-col gap-2 mt-4">
                <Overview data={allCasesData} />
                <CaseStatusTracker data={allCasesData?.allCases} />
            </div>
            <div id="new-lwr" className="flex flex-col gap-2 w-[35%]">

                <Button
                    className="bg-red-800 rounded-md text-white text-xl font-bold shadow-nav py-6 px-2 mt-12 mb-2 mr-4"
                    handler={() => { history("/new-case") }}
                >New Application
                </Button>
                <LawyersSection data={lawyersData} />
            </div>
        </div >
    )
}

export default Dashboard;