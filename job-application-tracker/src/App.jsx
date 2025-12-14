import "./App.css";
import React,{useState} from "react";
import { Dashboard } from "./components/Dashboard.jsx";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LogIn from "./components/LogIn.jsx"; 
import SignUp from "./components/SignUp.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };
  
  return (  
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path = "/signup" element = {<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
