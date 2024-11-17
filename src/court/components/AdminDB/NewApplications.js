const NewApplications = ({ data }) => {
    //api call to update verify documents send notif to add lawyer, 
    return (
        <div className="flex flex-col gap-1 w-[60%] ">
            <div className="flex flex-row gap-2 items-end">

                <p className="text-2xl text-gray-800 font-bold">New Applications, </p><p className="text-md font-medium italic text-red-700">Click to verify documents</p>
            </div>
            <div
                className="w-full mt-2 h-[250px] rounded-md bg-white"
            >
            </div>
        </div>
    )
}
export default NewApplications;