import axios from "axios";
import config from "../../constants/config";

const BASE_URL = config.E_COURT_BASE_URL;
const STATES_URL = `/district-court/states`;
const DISTRICT_URL = `/district-court/districts`;

export const getAllStates = async () => {
    try {

        const response = await axios.post(`${BASE_URL}${STATES_URL}`);
        return response?.data?.states;
    }
    catch (err) {
        console.error("Error: ", err);
        return {
            status: 400,
            message: "Internal server error",
        }
    }
}

export const getDistrictsByState = async (state) => {
    try {
        const response = await axios.post(`${BASE_URL}${DISTRICT_URL}`, {
            stateId: state.id,
        })
        return response?.data?.districts;
    }
    catch (err) {
        console.log("Error: ", err);
        return {
            status: 400,
            message: "Internal server error",
        }
    }
}