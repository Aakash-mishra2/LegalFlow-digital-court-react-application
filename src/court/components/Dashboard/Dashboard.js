import Overview from "./Overview";
import CaseStatusTracker from "./CaseStatusTracker";
import { allDummyCases, lawyersData } from "../../../data/dummyCasesList";
import LawyersSection from "./YourLawyers";

const Dashboard = () => {
    return (
        <div className="bg-gray-200 h-screen overflow-y-scroll flex flex-row">
            <div id="ovw-hrn" className="flex flex-col gap-2 mt-4">
                <Overview data={allDummyCases} />
                <CaseStatusTracker data={allDummyCases.allCases} />
            </div>
            <LawyersSection data={lawyersData} />
        </div>
    )
}

export default Dashboard;