import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutTheDevs from "./pages/AboutTheDevs";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={}/> */}
      <Route path="/about" element={<AboutTheDevs />}></Route>
    </Routes>
  );
};

export default App;
