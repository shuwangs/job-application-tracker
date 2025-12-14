import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LogIn.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Passward validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Account created successfully! Please log in.');
        navigate('/');
      } else {
        alert('Registration failed: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error, please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Create Account</h2>

        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <label className="form-label">User Name</label>
            <input 
              type="text" 
              className="form-input"
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              placeholder="Choose a user name"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-input"
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="Create a password"
              required
            />
          </div>

          {/* Re-enter the password */}
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input 
              type="password" 
              className="form-input"
              value={confirmPassword} 
              onChange={e => setConfirmPassword(e.target.value)} 
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Sign Up
          </button>

          {/* return to the login page */}
          <div className="signup-prompt">
            Already have an account?{' '}
            <Link to="/" className="signup-link">
              Log In here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;