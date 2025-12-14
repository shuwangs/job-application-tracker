import "./App.css";
import React from "react";
import { Dashboard } from "./components/Dashboard.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./components/LogIn"; 
import SignUp from "./components/SignUp";

function App() {
  return (
     <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LogIn />} />
      <Route path = "/signup" element = {<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/*       
      <div className="App">
        <Table />
      </div> */}
    </Routes>
  );
}

export default App;
