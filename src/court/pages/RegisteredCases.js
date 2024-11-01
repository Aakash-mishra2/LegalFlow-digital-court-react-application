import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CaseList from "../components/CaseList";
import api from "../../api/ccmsBase";
import ErrorModal from "../../shared/UIelements/ErrorModal";
import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";
import { allDummyCases } from "../../data/dummyCasesList";

export default function RegisteredCases() {
  const userID = useParams().uid;
  const [allCases, setAllCases] = useState(allDummyCases);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // const getCases = async () => {
    //   try {
    //     const response = await api.get(`/admin/user/${userID}`);
    //     setAllCases(response.data.allCases);
    //   } catch (err) {
    //     setIsLoading(false);
    //     if (err.response) {
    //       setError(err.response.data.message);
    //       console.log(err.response.status);
    //       console.log(error);
    //     } else {
    //       setError(err.message);
    //     }
    //   }
    // }
    //getCases();
  }, [userID, setAllCases, error, setIsLoading]);


  const clearError = () => {
    setError(null);
  }

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
      <ErrorModal error={null} onClear={clearError} />
      <CaseList cases={allCases} />;
    </>
  )
}
