import axios from "axios";

export default axios.create({
    baseURL: 'https://courtroom-admin.onrender.com/ccms',
})