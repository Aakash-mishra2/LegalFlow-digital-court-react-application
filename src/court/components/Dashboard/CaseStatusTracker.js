import { toTitleCase } from "../../../shared/util/generalFunc";
import { CiCircleChevRight } from "react-icons/ci";
import DocumentUploader from "../../../shared/formElements/DocumentUploader";

import { useState } from "react";
import CaseDetailsModal from "../../../shared/modals/CaseDetailsModal";

const CaseStatusTracker = ({ data }) => {
    const [openDetails, setOpenDetails] = useState(false);
    const [selectedCase, setSelectedCase] = useState({});

    const handleOpenModal = (index) => {
        setSelectedCase(data[index]);
        setOpenDetails(open => !open);
    }

    return (
        <>
            <p className="text-md font-circular ml-4">Track Case Status</p>
            <div className="w-[95%] rounded-xl mx-4 h-[280px] bg-white shadow-card p-2">
                <CaseDetailsModal
                    item={selectedCase}
                    show={openDetails}
                    closeModal={() => setOpenDetails((open) => !open)}
                />
                <div className="w-full h-full overflow-hidden overflow-y-scroll custom-scrollbar ">
                    <div className="flex flex-col gap-2 ">
                        {data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div key={index} className="w-[95%] h-12 py-2 px-4 flex flex-row justify-between items-center bg-gray-100 rounded-xl">
                                        <div>
                                            <p className="text-sm" >{item.caseTitle}</p>
                                            <div className="text-xs italic font-medium"><p>{item.judge.judgeName}, {item.court.courtName}</p></div>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <p className="text-md animate-pulse font-light tracking-wider font-circular text-[#006A67]">{toTitleCase(item.caseStatus)}</p>
                                            <CiCircleChevRight className="text-2xl cursor-pointer text-[#006A67]" onClick={() => handleOpenModal(index)} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
                {/* <DocumentUploader /> */}
            </div >
        </>
    );
}
export default CaseStatusTracker;