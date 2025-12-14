import React from 'react';
import { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import './LogIn.css';
const LogIn = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); 
        setIsLoggedIn(true);
        navigate('/dashboard');
      } else {
        alert('Login failed: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error, please try again.');
    }
    
  };
  
  return (
   <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Job Tracker Login</h2>


     <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">User Name</label>
            <input 
              type="text" 
              className="form-input"
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              placeholder="Enter user name"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-input"
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="Please enter your password"
            />
          </div>

          <button type="submit" className="login-button">
            Log In
          </button>

          <div className="signup-link-container">
            Don't have an account?{' '}
            <Link to="/signup" className="signup-link">
              Create New Account
            </Link>
          
          </div>

        </form>
    </div>
    </div>
  );
};

export default LogIn;
