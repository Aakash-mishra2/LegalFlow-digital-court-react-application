import NewApplications from "./NewApplications";
import UpdateHearings from "./UpdateHearings";

const AdminDashboard = ({ data }) => {
    return (
        <div className=" flex flex-row gap-8 h-screen overflow-y-scroll bg-gray-200 p-4">

            <NewApplications data={data} />
            <UpdateHearings data={data} />
        </div>
    )
};

export default AdminDashboard;