import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./shared/Navigation/Sidebar";
import LoadingSpinner from "./components/LoadingSpinner";
import Payments from "./court/components/Payments";
import Settings from "./court/components/Settings";
import Dashboard from "./court/components/Dashboard/Dashboard";
import NotificationsProvider from "./components/NotificationsProvider";
import Home from "./components/Home";
import ContactUsForm from "./components/ContactUsForm";
import "./App.css";
import NewCases from "./court/components/NewCase/NewCases";
import Authenticate from "./components/dashboard/Authenticate";

const App = () => {
  const isloggedIn = !!localStorage.getItem('Access-token');
  // Keep user on same route after reload if logged in
  useEffect(() => {
    if (isloggedIn) {
      const currentPath = window.location.pathname;
      // If user is on /auth or /, redirect to /dashboard
      if (currentPath === '/auth' || currentPath === '/') {
        window.history.replaceState({}, '', '/dashboard');
      }
    }
    else if (!localStorage.getItem('Access-token')) {
      const currentPath = window.location.pathname;
      // If user is on /auth or /, redirect to /dashboard
      if (currentPath === '/auth' || currentPath === '/') {
        window.history.replaceState({}, '.');
      }
    }
  }, [isloggedIn]);

  useEffect(() => {
    const handleStorage = () => {
      //setIsloggedIn(!!localStorage.getItem('Access-token'));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  let routes;
  if (isloggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new-case" element={<NewCases />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to={"/dashboard"} />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authenticate />} />
        <Route path="/contact-us" element={<ContactUsForm />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    );
  }

  return (
    <Router>
      <NotificationsProvider>
        <main className="flex h-screen ">
          {isloggedIn && <Sidebar />}
          <div className="flex-1 flex flex-col">
            <Suspense
              fallback={
                <div className="center">
                  <LoadingSpinner asOverlay />
                </div>
              }
            >
              {routes}
            </Suspense>
          </div>
        </main>
      </NotificationsProvider>
    </Router>
  );
};

export default App;
