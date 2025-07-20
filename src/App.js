import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from './shared/Navigation/Sidebar';
import Header from './shared/Navigation/Header';
import LoadingSpinner from './shared/UIelements/LoadingSpinner';
import Payments from './court/components/Payments';
import Settings from './court/components/Settings';
import Dashboard from './court/components/Dashboard/Dashboard';
import MainNavigation from './shared/Navigation/MainNavigation';
import { NotificationsProvider } from './shared/contexts/NotificationsContext';

import './App.css';

import NewCases from './court/components/NewCases/NewCases';
import Authenticate from './court/components/Authenticate/Authenticate';



const App = () => {

  const isloggedIn = useSelector((state) => state.userAccount.isloggedIn);
  let routes;
  if (isloggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Navigate to={'/dashboard'} />} />
        <Route path="/new-case" element={<NewCases />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    )
  }
  else {
    routes = (
      <Routes>
        <Route path="/*" element={<Navigate to={'/'} />} />
        <Route path="/" element={< Authenticate />} />
      </Routes>
    )
  }
  return (
    // <h1>This is main file code</h1>
    <BrowserRouter>
      <NotificationsProvider>
        <main className='flex h-screen '>
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
      </NotificationsProvider>
    </BrowserRouter>
  );
}

export default App;
