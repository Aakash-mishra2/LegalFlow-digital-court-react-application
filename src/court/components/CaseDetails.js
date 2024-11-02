import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";
import Input from "../../shared/formElements/Input";
import Button from "../../shared/formElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { useSelector } from "react-redux";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import DocumentUploader from "../../shared/formElements/DocumentUploader";
import { useNavigate } from "react-router";

const CaseDetails = () => {
    const username = useSelector((state) => state.userAccount.userName);
    const [formState, inputHandler] = useForm({
        petitioner_name: {
            value: username,
            isValid: false,
        },
        opp_name: {
            value: '',
            isValid: false,
        },
        opp_address: {
            value: '',
            isValid: false,
        },
    });

    const history = useNavigate();
    const handleSubmit = async () => {
        console.log('formstate', formState);
        history('/payments');
    }
    return (
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
            <div className="flex flex-row gap-8 items-end">

                <DocumentUploader />
                <div className="h-full flex flex-col gap-2 pb-4">
                    <p className="text-lg ml-2 text-medium font-circular">Registration Fees: {500}</p>
                    <Button
                        className={`rounded-full text-lg px-12 mt-1 py-2 text-white font-circular font-thin ${!formState.isValid ? "!cursor-not-allowed bg-blue-500" : " bg-blue-500"}`} disabled={false}
                        handler={handleSubmit}
                    >
                        Proceed to Pay
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CaseDetails;
