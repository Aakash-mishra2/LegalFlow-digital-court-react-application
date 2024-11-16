import CommonModal from "./Modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

const LawyerDetailsModal = ({ item, show, closeModal }) => {
    return (
        <CommonModal
            openModal={show}
            handleClose={closeModal}
            className="relative p-4 rounded-md h-max py-4 !w-[520px]"
        >
            <AiOutlineCloseCircle className="text-2xl absolute cursor-pointer top-4 right-4 font-bold text-pink-800" onClick={closeModal} />
            <div className="flex flex-row gap-2 items-baseline font-circular">
                <p className="text-lg font-medium">{item?.fullName}</p>
                <p className="text-sm mr-8 font-extralight">({item?.enrollmentNumber})</p>
            </div>
            <div className="flex flex-row gap-2 items-baseline font-circular-medium">
                <p className="font-thin text-md italic ">Affiliation: {item?.barCouncilAffiliation}</p>
                <p className="text-sm mr-8 font-extralight">(Cert. {item?.practiceCertificate})</p>
            </div>
            <span className="font-thin w-full mt-1 "><p className="font-medium text-md inline">Address: </p>{item.officeAddress?.street},{" "}{item?.officeAddress?.city},{" "}{item?.officeAddress?.state},{" "}{item.officeAddress?.postalCode}</span>
            <br />
            <span className="font-thin w-full mt-1 "><p className="font-medium text-md inline">Contact: </p>{item.contactDetails?.phoneNumber},{" "}{item.contactDetails?.email}</span>
            <br />
            <br />
            <span className="font-thin w-full">Registration Fees : <p className="font-medium text-md inline"> ₹ {item.feeAgreement?.retainerFee}{" "}{item.feeAgreement?.feeCurrency}</p></span>
            <p className="text-xs italic font-extralight">{item.feeAgreement?.paymentTerms}</p>
        </CommonModal>
    )
};

export default LawyerDetailsModal;