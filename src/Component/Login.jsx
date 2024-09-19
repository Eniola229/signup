import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic form validation
    if (username === 'admin' && password === '12345') {
      alert('Login successful!');
      setErrorMessage('');
      // You can redirect to another page or perform additional logic here
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <div className="input-wrapper">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
              <span className="icon">&#128100;</span>
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <span className="icon">&#128274;</span>
            </div>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
      <div className="image-section">
      </div>
    </div>

  )
};

export default Login