import { useState } from "react";
import { useForm } from "../../shared/hooks/form-hook";
import { useSelector } from "react-redux";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Input from "../../shared/formElements/Input";
import Button from "../../shared/formElements/Button";
import api from "../../api/ccmsBase";
import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";
import ErrorModal from "../../shared/modals/ErrorModal";
import VerifyOtpModal from "../../shared/modals/VerifyOtpModal";
import axios from "axios";

const Settings = () => {
    const userEmail = useSelector((state) => state.userAccount.email);
    const userId = useSelector((state) => state.userAccount.userId);
    const [emailVerified, setEmailVerified] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [openOtp, setOpenOtp] = useState(false);
    const [otp, setOtp] = useState("");

    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const onChange = (value) => setOtp(value);

    const [formState, inputHandler] = useForm({
        email: { value: "", isValid: false },
        current_password: { value: "", isValid: false },
    },
        false
    );


    const clearError = () => setError(null);
    //for reset password api call
    const submitHandler = async (event) => {
        event.preventDefault();
        console.log('user id', userId);
        if (newPassword !== confirmNewPassword) {
            return window.alert("Confirm password inputs do not match. Try again.")
        }
        setEmailVerified((prev) => !prev);
        const token = localStorage.getItem("Access-token");
        console.log('token', token);

        const requestBody = { new_password: newPassword };

        try {
            const headers = {
                'Content-Type': 'application/json',  // Ensure the server understands you're sending JSON
                'Authorization': token ? `Bearer ${token}` : ''  // Add the token in Authorization header
            };

            await axios.patch(`${process.env.REACT_APP_BASE_URL}/user/reset-password/${userId}`, requestBody, { headers });
            window.alert('Password reset succesfull.');
            //setEmailVerified(false);
        }
        catch (error) {
            setIsLoading(false);
            setError(error.response.data.message);
            return;
        }
    }

    //for two factor authentication by otp on email
    const sendOtp = async (event) => {
        event.preventDefault();
        setOtp("")
        setIsLoading(true);
        try {
            await api.post('/otp/generate-otp', {
                email: formState.inputs.email.value,
                password: formState.inputs.current_password.value,
            })
            setIsLoading(false);
            setOpenOtp(true);
        }
        catch (error) {
            setIsLoading(false);
            setError(error.response.data.message);
            return;
        }
    }

    return (
        <div className="p-4 h-screen bg-gray-200">
            {isLoading && <LoadingSpinner asOverlay />}
            <ErrorModal error={error} onClear={clearError} />
            <p className="text-xl font-bold font-circular">Reset Password</p>
            <div className="flex w-3/5 h-fit flex-col p-2 mt-2 pl-4 pr-4 rounded-md bg-white pb-4">
                <VerifyOtpModal
                    show={openOtp}
                    handleClose={() => setOpenOtp(false)}
                    resendOtp={sendOtp}
                    email={(formState.inputs?.email?.value) ? (formState.inputs?.email?.value) : ""}
                    onVerificationSuccess={() => { setOpenOtp(false); setEmailVerified(true); }}
                    setError={setError}
                    loading={isLoading}
                    value={otp}
                    onChange={onChange}
                    setIsLoading={setIsLoading}
                />

                {
                    emailVerified ? (
                        <div className="flex flex-col gap-4 pt-2">
                            <div className="flex flex-col gap-2">
                                <p className="text-md font-circular text-gray-800">New Password</p>
                                <input
                                    id="new_password"
                                    type="text"
                                    value={newPassword}
                                    onChange={(event) => setNewPassword(event.target.value)}
                                    placeHolder=" Your New 8 digit password"
                                    className="w-full h-14 px-2 border-2 border-gray-200 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-md font-circular text-gray-800">Confirm New Password</p>
                                <input
                                    id="confirm_password"
                                    type="password"
                                    value={confirmNewPassword}
                                    onChange={(event) => setConfirmNewPassword(event.target.value)}
                                    placeHolder=" Confirm New Password"
                                    className="w-full h-14 px-2 border-2 border-gray-200 rounded-md"
                                />
                            </div>

                        </div>
                    ) : (
                        <>
                            <p className="text-sm italic text-gray-500">Confirm current email and password</p>
                            <Input
                                element="input"
                                id="email"
                                type="text"
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                label="Your Email Address"
                                placeholder={`${userEmail}`}
                                errorText="Must be a valid email address"
                            />
                            <Input
                                element="input"
                                id="current_password"
                                type="password"
                                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8)]}
                                onInput={inputHandler}
                                maxLength={8}
                                label={" Current Password"}
                                placeHolder=" Your 8 digit password"
                                errorText=" Enter a valid password of 8 digit or more"
                            />
                        </>
                    )
                }
                <Button
                    disabled={!emailVerified ? !formState.isValid : false}
                    handler={emailVerified ? submitHandler : sendOtp}
                    className={`${formState.isValid ? '!cursor-pointer' : '!cursor-not-allowed'} bg-[#213555] mt-4 w-full rounded-xl text-white font-thin font-circular text-md tracking-wide pt-3 pb-3`}
                >
                    {emailVerified ? 'Confirm New Password' : 'Send OTP'}
                </Button>
            </div>
        </div >
    )
};
export default Settings;