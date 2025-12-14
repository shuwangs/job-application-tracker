import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./components/LogIn"; 
import SignUp from "./components/SignUp";
import Table from "./components/Table";

function App() {
  return (
     <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LogIn />} />
      <Route path = "/signup" element = {<SignUp />} />
      <Route path="/dashboard" element={<Table />} />
      
      {/*       
      <div className="App">
        <Table />
      </div> */}
    </Routes>
  );
}
export default App;
