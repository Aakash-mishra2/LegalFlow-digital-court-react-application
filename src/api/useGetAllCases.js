import { useState, useEffect, useCallback } from "react";
import api from "./ccmsBase";
const BASE_URL = process.env.REACT_APP_BASE_URL;

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
            const response = await api.get(url, {
                params: options, //Filter object
            });
            setData(response.data);
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