import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { loginUser } from '../API/ApiCalling';
import { useDispatch } from 'react-redux';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function APIcallLogin() {
    loginUser({ email, password }, dispatch);
  }

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <div className="login-logo">Executive Login Page</div>

          <input
            className="login-input"
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-button" onClick={APIcallLogin}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
