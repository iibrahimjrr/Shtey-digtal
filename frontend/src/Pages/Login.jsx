import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {

  useEffect(() => {

    const link = document.createElement("link");
                link.href = "css/auth.css"; 
                link.rel = "stylesheet";
                document.head.appendChild(link);

                return () => {
                  document.head.removeChild(link);
                }
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: email, // الباك بيطلب email، مش username
        password: password
      }, {
        headers: {
          'Accept': 'application/json'
        },
        withCredentials: true // لو بتستخدم Sanctum
      });
  
      const userData = response.data;
  
      // حفظ الـ token لو الباك بيرجعه:
      if (userData.token) {
        localStorage.setItem('token', userData.token);
      }
  
      // تسجيل الدخول في الـ context
      login(userData); 
      navigate('/profile');
  
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Login failed');
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };
  

  return (
    <main className="auth-container">
      <div className="auth-box">
        <div className="flex justify-center mb-6">

        </div>
        <h2>Sign in to your account</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="submit-button">Log in</button>
          <p className="login-link">Don't have an account? <Link to="/register">Register</Link></p>
        </form>
      </div>
    </main>
  );
};

export default Login;