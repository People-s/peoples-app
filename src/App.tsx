import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Application/Dashboard";
import GuardedRoute from "./Components/GuardedRoute/GuardedRoute"
import Header from "./Components/Header/Header";

export const App = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (<>
    {location.pathname !== "/" && <Header />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={
        <GuardedRoute>
          <Dashboard />
        </GuardedRoute>
      } />
    </Routes>
  </>
  );
};
