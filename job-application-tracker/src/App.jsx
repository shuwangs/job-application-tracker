import "./App.css";
import React from "react";
import LogIn from "./components/LogIn.jsx";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
