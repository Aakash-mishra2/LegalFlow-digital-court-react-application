import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from './shared/Navigation/Sidebar';
import Header from './shared/Navigation/Header';
import Counter from './features/counter/Counter';
import LoadingSpinner from './shared/UIelements/LoadingSpinner';
import Payments from './court/components/Payments';
import Settings from './court/components/Settings';
import Dashboard from './court/components/Dashboard/Dashboard';
import MainNavigation from './shared/Navigation/MainNavigation';

import './App.css';

const NewCases = React.lazy(() => import('./court/pages/NewCases'));
const UpdateCases = React.lazy(() => import('./court/pages/UpdateCases'));
const Authenticate = React.lazy(() => import('./citizens/pages/Authenticate'));



const App = () => {

  const isloggedIn = useSelector((state) => state.userAccount.isloggedIn);
  let routes;
  if (isloggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Navigate to={'/dashboard'} />} />
        <Route path="/new-case" element={<NewCases />} />
        <Route path="/update/:caseID" element={<UpdateCases />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/settings" element={<Settings />} />
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
        {isloggedIn && <Sidebar />}
        <div className='flex-1 flex flex-col'>
          {isloggedIn ? <Header /> : <MainNavigation />}
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
