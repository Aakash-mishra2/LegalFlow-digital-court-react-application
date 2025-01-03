import { useEffect, useContext } from "react";

import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Overview from "./Overview";
import CaseStatusTracker from "./CaseStatusTracker";
import LawyersSection from "./YourLawyers";
import useGetAllCases from "../../../api/useGetAllCases";
import Button from "../../../shared/formElements/Button";
import AdminDashboard from "../AdminDB/AdminDashboard";
import LoadingSpinner from "../../../shared/UIelements/LoadingSpinner";
import ErrorModal from "../../../shared/modals/ErrorModal";

import { setData } from "../../../features/CourtAccount/CaseReducers";
import { lawyersData, ROLES, STATUS } from "../../../constants/constants";
import { NotificationsContext } from "../../../shared/contexts/NotificationsContext";

const Dashboard = () => {
    const history = useNavigate();
    const userId = useSelector((state) => state.userAccount.userId);
    const role = useSelector((state) => state.userAccount.role);

    const { fetchNotifications } = useContext(NotificationsContext);


    let filter = {};
    if (role === ROLES.ADMIN) filter = { status: STATUS.FILED };

    const { data, error, loading, refetch } = useGetAllCases(`${role}/${userId}`, filter);

    setData(data);

    useEffect(() => {
        fetchNotifications();
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps 
        []);

    if (loading) { return <><LoadingSpinner asOverlay /></> }
    if (error) { return <ErrorModal error={error} onClear={refetch} /> }
    return (
        <>{
            role === ROLES.USER ? (
                <div className="bg-gray-200 h-screen overflow-y-scroll flex flex-row">
                    <div id="ovw-hrn" className="flex flex-col gap-2 mt-4">
                        <Overview data={data} />
                        <CaseStatusTracker data={data?.allCases} />
                    </div>
                    <div id="new-lwr" className="flex flex-col gap-2 w-[35%] mt-4">
                        <Button
                            className="bg-red-800 rounded-md text-white text-xl font-bold shadow-nav py-6 px-2 mt-8 mb-2 mr-4"
                            handler={() => history("/new-case")}
                        >New Application
                        </Button>
                        <LawyersSection data={lawyersData} />
                    </div>
                </div>
            ) : (
                <AdminDashboard
                    data={data}
                    refetch={refetch}
                />
            )
        }

        </>
    )
}

export default Dashboard;