import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Citizens from './citizens/pages/Citizens';
import NewCases from './court/pages/NewCases';
import RegisteredCases from './court/pages/RegisteredCases';
import MainNavigation from './shared/Navigation/MainNavigation';
import UpdateCases from './court/pages/UpdateCases';
import Authenticate from './citizens/pages/Authenticate';
import Counter from './features/counter/Counter';
import './App.css';
function App() {

  const isloggedIn = useSelector((state) => state.userAccount.isloggedIn);
  const currentUserId = useSelector((state) => state.userAccount.UserId);
  let routes;
  if (isloggedIn) {
      routes = (
      <Routes>
        <Route path="/" element={<Navigate to={`/${currentUserId}/cases`} />} />
        <Route path="/allParties" element={< Citizens />} />
        <Route path="/cases/new" element={<NewCases />} />
        <Route path={`/:uid/cases`} element={< RegisteredCases />} />
        <Route path="/update/:caseID" element={<UpdateCases />} />
        <Route path="/counter" element={<Counter />} />
        </Routes>
      )
  } 
  else {
      routes = (
      <Routes>
         <Route path="/counter" element={<Navigate to="/" />} />
        <Route path="/cases/new" element={<Navigate to="/" />} />
        <Route path="/:uid/cases" element={<Navigate to="/" />} />
        <Route path="/update/:caseID" element={<Navigate to="/" />} />
        <Route path="/" element={< Authenticate />} />
      </Routes>
      )
  } 
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        {routes}
      </main>
    </BrowserRouter>
  );
}

export default App;
