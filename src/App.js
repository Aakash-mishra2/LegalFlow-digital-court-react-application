import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from './shared/Navigation/Sidebar';
import Header from './shared/Navigation/Header';
import Counter from './features/counter/Counter';
import LoadingSpinner from './shared/UIelements/LoadingSpinner';
import RegisteredCases from './court/pages/RegisteredCases';
import Payments from './court/components/Payments';

import './App.css';

const Citizens = React.lazy(() => import('./citizens/pages/Citizens'));
const NewCases = React.lazy(() => import('./court/pages/NewCases'));
const UpdateCases = React.lazy(() => import('./court/pages/UpdateCases'));
const Authenticate = React.lazy(() => import('./citizens/pages/Authenticate'));



const App = () => {

  const isloggedIn = useSelector((state) => state.userAccount.isloggedIn);
  const currentUserId = useSelector((state) => state.userAccount.UserId);
  let routes;
  if (isloggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Navigate to={`/${currentUserId}/cases`} />} />
        <Route path="/allParties" element={< Citizens />} />
        <Route path="/new-case" element={<NewCases />} />
        <Route path={`/cases`} element={< RegisteredCases />} />
        <Route path="/update/:caseID" element={<UpdateCases />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    )
  }
  else {
    routes = (
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/*" element={< Authenticate />} />
      </Routes>
    )
  }
  return (
    <BrowserRouter>
      <main className='flex h-screen'>
        <Sidebar />
        <div className='flex-1 flex flex-col'>

          <Header />
          <Suspense
            fallback={
              <div className='center'><LoadingSpinner asOverlay /></div>
            }>
            {routes}
          </Suspense>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
