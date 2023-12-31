import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { ContactUs } from "./Components/ContactUs";
import { NextUIProvider } from "@nextui-org/react";
import "./App.css";

const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
};

export default App;
