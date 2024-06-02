import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password }); // Corrected the endpoint to match the backend
      const token = response.data.token;
      localStorage.setItem('token', token);
      setMessage('Login successful');
      localStorage.setItem('token', response.data.token);
      navigate('/home'); // Navigate to home page after successful login
    } catch (error) {
      setMessage('Error logging in');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
    <p>You don't have Account ? <Link to="/">Sign up</Link> </p>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
