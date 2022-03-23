import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Application/Dashboard";
import GuardedRoute from "./Components/GuardedRoute/GuardedRoute"
import Header from "./Components/Header/Header";

export const App = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <ChakraProvider theme={theme}>
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={
          <GuardedRoute>
            <Dashboard />
          </GuardedRoute>
        }/>
      </Routes>
    </ChakraProvider>
  );
};
