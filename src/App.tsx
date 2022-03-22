import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Dashboard from "./Pages/Application/Dashboard"
export const App = () => (
  <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Dashboard />} />
      </Routes>
  </ChakraProvider>
)
