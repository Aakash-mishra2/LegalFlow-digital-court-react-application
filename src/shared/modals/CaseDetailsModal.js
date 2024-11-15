import CommonModal from "./Modal";
import { VscChromeClose } from "react-icons/vsc";
import { defaultCaseObject } from "../../constants/default_values";

const CaseDetailsModal = ({ item, show, closeModal }) => {
    const {
        summary = defaultCaseObject.summary,
        caseTitle = defaultCaseObject.caseTitle,
        id = defaultCaseObject.id,
        court = defaultCaseObject.court,
        judge = defaultCaseObject.judge,
        lawyer = defaultCaseObject.lawyer,
        nextHearing = defaultCaseObject.nextHearing,
        status = defaultCaseObject.status
    } = item;

    return (
        <CommonModal
            openModal={show}
            handleClose={closeModal}
            className="!w-[480px] h-fit rounded-md p-4 "
        >
            <div className="w-full flex justify-between flex-row ">
                <p className="text-xl tracking-wider font-semibold">{caseTitle}</p>
                <VscChromeClose className="text-2xl cursor-pointer font-bold" onClick={closeModal} />
            </div>
            <p className="text-md mt-1 ">{`CaseId: ${id}`}</p>
            <span className="font-medium w-full mt-1 mb-2">Summary : <p className="font-extralight text-sm inline italic "> {summary}</p></span>
            <br />
            <span className="font-semibold text-md">Court Address: <p className="font-extralight text-sm inline">{court?.courtName}, {court?.courtAddress}, {court?.courtId}</p></span>
            <br />
            <span className="font-medium w-full">Judge : <p className="font-extralight italic text-sm inline"> {judge?.judgeName}, {judge?.judgeId}</p></span>
            <br />
            <span className="font-medium w-full">Lawyer : <p className="font-extralight italic text-sm inline"> {lawyer?.lawyerName}, {lawyer?.lawyerId}</p></span>
            <br /><br />
            <span className="font-medium text-md">Hearing Date: <p className="font-extralight text-sm inline">{nextHearing?.date}</p></span>
            <br />
            <span className="font-medium text-md">Case Timings: <p className="font-extralight text-sm inline">{nextHearing?.timings}</p></span>
            <br />
            <span className="font-medium text-md">Case Status: <p className="font-extralight text-sm inline">{status}</p></span>
        </CommonModal>
    )
};
export default CaseDetailsModal;