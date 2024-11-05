import CommonModal from "./Modal";
import { VscChromeClose } from "react-icons/vsc";

const CaseDetailsModal = ({ item, openDetails, toggleCaseDetails }) => {
    return (
        <CommonModal
            openModal={openDetails}
            handleClose={toggleCaseDetails}
            className="!w-[480px] h-[420px] rounded-md p-4"
        >
            <div className="h-12 w-full flex justify-between flex-row ">
                <p className="text-xl tracking-wider font-semibold">{item.caseTitle}</p>
                <VscChromeClose className="text-2xl cursor-pointer font-bold" onClick={toggleCaseDetails} />
            </div>
        </CommonModal>
    )
};
export default CaseDetailsModal;