import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Input from "../../shared/formElements/Input";
import PdfUploader from "../../shared/formElements/PdfUploader";
import PdfDownloader from "../../shared/formElements/PdfDownloader";
import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";
import api from "../../api/ccmsBase";

const CaseDetails = () => {
    const history = useNavigate();
    const username = useSelector((state) => state.userAccount.userName);
    const [newCase, setNewCase] = useState(() => JSON.parse(localStorage.getItem("CCMS_NEW_CASE")));
    const [isLoading, setIsLoading] = useState(false);
    const [documentId, setDocumentId] = useState("complaint");
    const [error, setError] = useState("");

    const [formState, inputHandler] = useForm({
        opp_name: {
            value: '',
            isValid: false,
        },
        opp_address: {
            value: '',
            isValid: false,
        },
        documents: {
            value: [],
            isValid: true,
        }
    }, false);

    useEffect(() => { console.log('formstate is', formState); }, [formState])

    const submitApplication = async () => {
        setIsLoading(true);
        try {
            const response = await api.post('/admin/newcase', newCase);
            setIsLoading(false);
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
        // setSuccess(true);
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
                <p className="text-sm font-circular font-thin mt-2">Case Details</p>

                <div className="flex flex-row gap-4 w-full">

                    <Input
                        id="opp_name"
                        element="input"
                        type="text"
                        label="Defendant name"
                        placeHolder="Enter defendant name"
                        errorText="Must contain 12 digits (0-9)"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        customStyle={{ width: "30%" }}
                    />

                    <Input
                        id="opp_address"
                        element="input"
                        type="text"
                        label="Defendant Address"
                        placeHolder="Enter defendant address"
                        errorText="Must contain 12 digits (0-9)"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        customStyle={{ width: "65%" }}
                    />
                </div>
                <div className="flex flex-row gap-1">
                    <div className="w-1/2">
                        <PdfUploader
                            label="Written Complaint"
                            documentId={documentId}
                            addDocument={AddNewDocument}
                        />
                    </div>
                    {
                        formState.inputs.documents.value && formState.inputs.documents.value.length > 0 && (
                            <div className="w-1/2">
                                <p className="text-md text-light mb-1 text-gray-600 font-cicular">Uploaded document</p>
                                {
                                    formState.inputs.documents.value.map((item, index) =>
                                        <PdfDownloader
                                            title="First complaint"
                                            pdfTitle={`${item.fileTitle} : ${item.fileName}`}
                                            pdfId={item.fileId}
                                        />
                                    )
                                }

                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default CaseDetails;
