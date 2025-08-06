import { useState, useEffect, useCallback } from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL + '/ccms';
/**
 * Custom hook to fetch all cases for logged in User
 * @param {string} slug - The API endpoint.
 * @param {object} options - Fetch options like method, headers, body, etc.
 * @returns {object} - { data, error, loading, refetch }
 */

const useGetAllCases = (slug, options = {}) => {

    const url = `${BASE_URL}/${slug}`;
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setLoading((prev) => true);
        setError(null);

        try {
            const token = JSON.parse(localStorage.getItem('Access-token'));
            const response = await axios.get(url, {
                params: options, //Filter object
                headers: token ? { Authorization: `Bearer ${token}` } : {},
            });
            setData(response.data);
            //openSocket(process.env.REACT_APP_BASE_URL);
        } catch (err) {
            setError(err.message);
        }
        setLoading((prev) => false);
    }, [url, options]);

    useEffect(() => {
        if (fetchData) fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, error, loading, refetch: fetchData };
};

export default useGetAllCases;
