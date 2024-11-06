import CommonModal from "./Modal";
import { VscChromeClose } from "react-icons/vsc";

const CaseDetailsModal = ({ item, show, closeModal }) => {
    return (
        <CommonModal
            openModal={show}
            handleClose={closeModal}
            className="!w-[480px] h-fit rounded-md p-4 "
        >
            <div className="w-full flex justify-between flex-row ">
                <p className="text-xl tracking-wider font-semibold">{item.caseTitle}</p>
                <VscChromeClose className="text-2xl cursor-pointer font-bold" onClick={closeModal} />
            </div>
            <p className="text-md mt-1 ">{`CaseId: ${item.id}`}</p>
            <span className="font-medium w-full mt-1 mb-2">Summary : <p className="font-extralight text-sm inline italic "> {item?.summary}</p></span>
            <br />
            <span className="font-semibold text-md">Court Address: <p className="font-extralight text-sm inline">{item.court?.courtName}, {item.court?.courtAddress}, {item.court?.courtId}</p></span>
            <br />
            <span className="font-medium w-full">Judge : <p className="font-extralight italic text-sm inline"> {item.judge?.judgeName}, {item.judge?.judgeId}</p></span>
            <br />
            <span className="font-medium w-full">Lawyer : <p className="font-extralight italic text-sm inline"> {item.lawyer?.lawyerName}, {item.lawyer?.lawyerId}</p></span>
            <br /><br />
            <span className="font-medium text-md">Hearing Date: <p className="font-extralight text-sm inline">{item?.hearingDate}</p></span>
            <br />
            <span className="font-medium text-md">Case Timings: <p className="font-extralight text-sm inline">{item?.timings}</p></span>
            <br />
            <span className="font-medium text-md">Case Status: <p className="font-extralight text-sm inline">{item?.caseStatus}</p></span>
        </CommonModal>
    )
};
export default CaseDetailsModal;