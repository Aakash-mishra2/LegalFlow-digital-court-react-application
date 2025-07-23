import CommonModal from "./Modal";
import { useEffect, useState } from "react";
import Dropdown from "../formElements/Dropdown";
import { VscChromeClose } from "react-icons/vsc";
import { allCourts } from "../../constants/constants";
import Button from "../formElements/Button";
import api from "../../api/ccmsBase";
import { TooltipContainer } from "../UIelements/TooltipContainer";
import DropdownWithOptions from "../UIelements/DropdownWithOptions";

const EditCaseDetailsModal = ({
    show,
    closeModal,
    item,
    refetch
}) => {
    const [selectedCourt, setSelectedCourt] = useState('');
    const [newTitle, setNewTitle] = useState(item.caseTitle);
    const [hearingDate, selectedDate] = useState(""); //store selected date of birth
    const [hearingTime, selectedHearing] = useState("");
    const [isUpdateButtonDisabled, setIsUpdateButtonDisabled] = useState(false);
    const [newStatus, setNewStatus] = useState(item.status);

    useEffect(() => {
        setIsUpdateButtonDisabled(!(hearingDate !== "" && hearingTime !== "" && selectedCourt.name !== ""))

        return () => { }

        //eslint-disable-next react-hooks/exhaustive-deps
    }, [selectedCourt, newTitle, hearingDate, hearingTime]);

    const updateHearing = async () => {

        const body = {
            caseTitle: newTitle,
            status: newStatus,
            ...((selectedCourt !== '') && {
                court: {
                    courtName: selectedCourt.name,
                    courtAddress: selectedCourt.courtAddress,
                }
            }),
            ...((hearingDate !== '') && {
                nextHearing: {
                    date: hearingDate,
                    timings: hearingTime
                }
            })
        }

        try {
            const response = await api.put(`/admin/update-case/${item._id}`, body)
            if (response) {
                closeModal();
                let temp = window.alert(`Case ${newTitle} schedule updated succesfully. `);
                if (temp === undefined) {
                    refetch();
                }
            }
        }
        catch (err) { console.log('error', err); }
    }

    if (!show) return <></>

    return (
        <CommonModal
            openModal={show}
            handleClose={() => closeModal()}
            className="min-w-[45vw] min-h-[35vh] h-fit rounded-xs p-6 flex flex-col relative gap-2 border-2 border-gray-500"
            customStyles={{ top: "40%" }}
        >
            <div className="flex flex-row gap-8 relative justify-between items-center">
                <div className="flex flex-col gap-2 w-full">
                    <p className="text-md font-circular">Case Title</p>
                    <input
                        element="text"
                        value={newTitle}
                        placeholder={item.caseTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="py-2 px-2 rounded-md w-full mr-4 border-2 border-gray-300"
                    />
                </div>
                <div className="w-12 h-12 absolute -top-10 -right-10 bg-[#2a4b80] rounded-full">

                    <VscChromeClose
                        className="text-3xl ml-2 mt-2 font-bold text-white cursor-pointer"
                        onClick={() => closeModal()}
                    />
                </div>
            </div>

            <Dropdown
                id="state"
                label="Select Court"
                data={allCourts}
                setSelectedItem={setSelectedCourt}
                errorMessage="Must Select a valid string"
            />
            <div className="flex flex-row gap-8 mt-2">
                <div className="flex flex-col gap-2">
                    <p className="text-md font-circular text-gray-700">Select Status</p>
                    <DropdownWithOptions
                        label="Select an option"
                        options={["scheduled", "pending", "adjourned", "dismissed", "closed"]}
                        onSelect={(option) => setNewStatus(option)}
                        defaultValue={item.status}
                    />
                </div>

                <div className="flex flex-row gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                        <p className="text-md font-circular text-gray-600 ml-2">Hearing Date</p>
                        <input
                            type="date"
                            value={hearingDate}
                            onChange={(e) => selectedDate(e.target.value)}
                            style={{
                                padding: "5px",
                                marginLeft: "5px",
                                marginBottom: "5px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-md font-circular text-gray-600 ml-2">Hearing Time</p>
                        <input
                            type="time"
                            value={hearingTime}
                            onChange={(e) => selectedHearing(e.target.value)}
                            style={{
                                padding: "5px",
                                marginLeft: "5px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                            }}
                        />
                    </div>
                </div>

            </div>

            <TooltipContainer
                tooltipText="Select all details first."
                isChildElementDisabled={isUpdateButtonDisabled}
            >
                <Button
                    className={`relative w-full rounded-xl text-xl text-white ${isUpdateButtonDisabled ? 'cursor-none bg-blue-400' : 'bg-blue-700 cursor-pointer'} px-4 py-2 font-semibold mt-2`}
                    handler={() => updateHearing()}
                    disabled={isUpdateButtonDisabled}

                >
                    Update
                </Button>
            </TooltipContainer>
        </CommonModal>
    )
};

export default EditCaseDetailsModal;