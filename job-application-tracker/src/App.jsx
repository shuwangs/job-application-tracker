import "./App.css";
import React from "react";
import LogIn from "./components/LogIn.jsx";
import { Dashboard } from "./components/Dashboard.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
