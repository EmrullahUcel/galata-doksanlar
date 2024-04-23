import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin";
import Menu from "./components/pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default App;
