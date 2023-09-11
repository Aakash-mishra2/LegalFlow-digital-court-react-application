import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Citizens from './citizens/pages/Citizens';
import NewCases from './court/pages/NewCases';
import RegisteredCases from './court/pages/RegisteredCases';
import MainNavigation from './shared/Navigation/MainNavigation';
import UpdateCases from './court/pages/UpdateCases';
import Authenticate from './citizens/pages/Authenticate';
import './App.css';
import Counter from './features/counter/Counter';

function App() {
  let routes = (
    <Routes>
      <Route path="/" element={< Citizens />} />
      <Route path="/cases/new" element={<NewCases />} />
      <Route path="/:uid/cases" element={< RegisteredCases />} />
      <Route path="/update/:caseID" element={<UpdateCases />} />
      <Route path="/users/authenticate" element={<Authenticate />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );

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
