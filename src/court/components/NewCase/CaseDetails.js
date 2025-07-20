import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "../../../shared/hooks/form-hook";
import { addNewCase } from "../../../features/CourtAccount/CaseReducers";
import LoadingSpinner from "../../../shared/UIelements/LoadingSpinner";
import api from "../../../api/ccmsBase";
import PdfUploader from "../../../shared/formElements/PdfUploader";

const CaseDetails = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [confirmCaseDetails, setConfirmCaseDetails] = useState(false);

    const [formState, inputHandler] = useForm({
        documents: {
            value: [],
            isValid: false,
        }
    }, false);

    const userId = useSelector((state) => state.userAccount.userId);

    const submitApplication = async () => {

        if (!confirmCaseDetails) {
            window.alert("Please confirm all details and SUBMIT Again");
            setConfirmCaseDetails(true);
            return;
        }

        setIsLoading(true);
        const existingCase = JSON.parse(localStorage.getItem("CCMS_NEW_CASE"));
        const updatedObject = {
            ...existingCase,
            documents: formState?.inputs?.documents.value,
            userId: userId,
        };

        localStorage.setItem("CCMS_NEW_CASE", JSON.stringify(updatedObject));

        try {
            const response = await api.post('/admin/newcase', updatedObject);
            //update all cases object to render by status tracker
            dispatch(addNewCase(response.data.caseObject));
            setIsLoading(false);
            history('/dashboard');
        }

        catch (err) {
            setIsLoading(false);
            if (err.response) {
                setError(err.response.data.message);
                console.log(err.response.status);
                console.log(error);
            } else {
                setError(err.message);
            }
        }
    }

    const AddNewDocument = (obj) => {
        const existingDocuments = formState?.inputs.documents?.value || [];
        const updatedDocuments = [...existingDocuments, obj];
        inputHandler("documents", updatedDocuments, true);
    }

    return (
        <>
            {isLoading && <LoadingSpinner asOverlay />}
            <div className="mt-4 mb-0 p-4 w-full shadow-card bg-white">
                <p className="text-md font-circular font-thin mt-2">Case Details</p>
                <div className="flex flex-row gap-2">
                    <div className="w-1/2">
                        <PdfUploader
                            addDocument={AddNewDocument}
                        />
                    </div>
                    {
                        formState.inputs.documents.value && formState.inputs.documents.value.length > 0 && (
                            <div className="w-1/2 h-100 flex flex-col justify-between ">
                                <div className="mb-4">
                                    <p className="text-md text-light mb-1 text-gray-600 font-cicular">Uploaded documents</p>
                                    {formState.inputs.documents.value.map((item, index) =>
                                        // <PdfDownloader
                                        //     title="First complaint"
                                        //     pdfTitle={`${item.fileTitle} : ${item.fileName}`}
                                        //     pdfId={item.fileId}
                                        // />
                                        <p key={index} > {`${item.fileTitle} : ${item.fileName}`}</p>
                                    )
                                    }
                                </div>
                                <button className="sticky bottom-0 rounded-md shadow-card text-white bg-blue-500 py-2 px-4 w-4/5" onClick={submitApplication} >Submit Application</button>
                            </div>
                        )
                    }
                </div>
            </div >
        </>
    )
}

export default CaseDetails;
