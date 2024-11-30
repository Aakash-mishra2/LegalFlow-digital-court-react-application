import NewApplications from "./NewApplications";
import UpdateHearings from "./UpdateHearings";

const AdminDashboard = ({ data, refetch }) => {

    return (
        <div className=" flex flex-row gap-4 h-screen overflow-y-scroll custom-scrollbar bg-gray-200 p-4">
            <NewApplications refetch={refetch} data={data} />
            <UpdateHearings />
        </div>
    )
};

export default AdminDashboard;