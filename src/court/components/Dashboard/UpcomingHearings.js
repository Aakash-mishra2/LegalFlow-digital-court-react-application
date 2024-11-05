const UpcomingHearings = ({ data }) => {
    return (
        <div className="bg-white rounded-md flex flex-col p-2 w-3/5 font-circular">
            <p className="text-md font-bold font-circular text-gray-700 ">Upcoming Hearings</p>
            <div className="overflow-x-scroll overflow-hidden px-2 flex flex-row gap-2 cursor-pointer mt-1 custom-scrollbar">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="rounded-xl p-2 min-w-[33%] bg-blue-200 flex flex-col my-2">
                                <p className="text-sm mb-1 font-light">{item.caseTitle}</p>
                                <p className="text-xs font-semibold">{item.date}</p>
                                <p className="text-xs font-light ">{item.timings}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default UpcomingHearings;  