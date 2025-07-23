import axios from 'axios';
import config from "../../constants/config";

const BASE_URL = config.E_COURT_BASE_URL;
const COURTS_URL = `/high-courts/courts`;

export const getAllCourts = () => {
    // try {
    //     const response = await axios.post(`${BASE_URL}${COURTS_URL}`);
    //     return response?.data?.courts;
    // }
    // catch (err) {
    //     console.error("Error: ", err);
    //     return {
    //         status: 400,
    //         message: "Internal server error",
    //     }
    // }
    return {
        data: [
            {
                "name": "Supreme Court of India",
                "short_address": "New Delhi, IND"
            },
            {
                "name": "Delhi High Court",
                "short_address": "New Delhi, IND"
            },
            {
                "name": "Bombay High Court",
                "short_address": "Mumbai, MH"
            },
            {
                "name": "Calcutta High Court",
                "short_address": "Kolkata, WB"
            },
            {
                "name": "Madras High Court",
                "short_address": "Chennai, TN"
            },
            {
                "name": "Allahabad High Court",
                "short_address": "Prayagraj, UP"
            },
            {
                "name": "Karnataka High Court",
                "short_address": "Bengaluru, KA"
            },
            {
                "name": "Punjab and Haryana High Court",
                "short_address": "Chandigarh, PB/HR"
            },
            {
                "name": "Gauhati High Court",
                "short_address": "Guwahati, AS"
            },
            {
                "name": "Kerala High Court",
                "short_address": "Ernakulam, KL"
            },
            {
                "name": "Rajasthan High Court",
                "short_address": "Jodhpur, RJ"
            },
            {
                "name": "Patna High Court",
                "short_address": "Patna, BR"
            },
            {
                "name": "Madhya Pradesh High Court",
                "short_address": "Jabalpur, MP"
            },
            {
                "name": "Jharkhand High Court",
                "short_address": "Ranchi, JH"
            }
        ]
    }
}