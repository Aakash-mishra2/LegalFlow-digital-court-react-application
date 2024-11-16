import Overview from "./Overview";
import CaseStatusTracker from "./CaseStatusTracker";
import { lawyersData } from "../../../constants/data/dummyCasesList";
import LawyersSection from "./YourLawyers";
import useGetAllCases from "../../../api/useGetAllCases";
import { useSelector } from "react-redux";
import Button from "../../../shared/formElements/Button";
import { useNavigate } from "react-router";
import LoadingSpinner from "../../../shared/UIelements/LoadingSpinner";
import ErrorModal from "../../../shared/modals/ErrorModal";
import { setData } from "../../../features/CourtAccount/CaseReducers";

const Dashboard = () => {
    const userId = useSelector((state) => state.userAccount.userId);
    const history = useNavigate();

    const { data, error, loading, refetch } = useGetAllCases(`admin/user/${userId}`);
    setData(data);

    if (loading) { return <><LoadingSpinner asOverlay /></> }
    if (error) { return <ErrorModal error={error} onClear={refetch} /> }

    return (
        <>
            <div className="bg-gray-200 h-screen overflow-y-scroll flex flex-row">
                <div id="ovw-hrn" className="flex flex-col gap-2 mt-4">
                    <Overview data={data} />
                    <CaseStatusTracker data={data?.allCases} />
                </div>
                <div id="new-lwr" className="flex flex-col gap-2 w-[35%]">

                    <Button
                        className="bg-red-800 rounded-md text-white text-xl font-bold shadow-nav py-6 px-2 mt-8 mb-2 mr-4"
                        handler={() => history("/new-case")}
                    >New Application
                    </Button>
                    <LawyersSection data={lawyersData} />
                </div>
            </div>
        </>
    )
}

export default Dashboard;