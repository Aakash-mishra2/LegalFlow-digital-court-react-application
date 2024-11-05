import { toTitleCase } from "../../../shared/util/generalFunc";
import { CiCircleChevRight } from "react-icons/ci";

import { useState } from "react";
import CaseDetailsModal from "../../../shared/modals/CaseDetailsModal";

const CaseStatusTracker = ({ data }) => {
    const [openDetails, setOpenDetails] = useState(false);
    const toggleCaseDetails = () => setOpenDetails((open) => !open);


    return (
        <>
            <p className="text-xl font-circular ml-4">Track Case Status</p>
            <div className="w-[95%] rounded-xl mx-4 h-[280px] bg-white shadow-card p-2">
                <div className="w-full h-full overflow-hidden overflow-y-scroll custom-scrollbar ">
                    <div className="flex flex-col gap-2 ">
                        {
                            data.map((item, index) => {

                                return (
                                    <>
                                        <CaseDetailsModal
                                            item={item}
                                            openDetails={openDetails}
                                            toggleCaseDetails={toggleCaseDetails}
                                        />
                                        <div key={index} className="w-[95%] h-12 py-2 px-4 flex flex-row justify-between items-center bg-gray-100 rounded-xl">
                                            <div>
                                                <p className="text-sm" >{item.caseTitle}</p>
                                                <div className="text-xs italic font-medium"><p>{item.judge.judgeName}, {item.court.courtName}</p></div>
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <p className="text-sm animate-pulse font-extralight tracking-wider font-circular text-green-600">{toTitleCase(item.caseStatus)}</p>
                                                <CiCircleChevRight className="text-2xl cursor-pointer text-green-700" onClick={toggleCaseDetails} />
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </>
    );
}
export default CaseStatusTracker;