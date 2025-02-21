import React from 'react';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import './Login.css';
const Login =()=> {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '400px', borderRadius: '12px' }}>
        <h2 className="text-center fw-bold mb-4">Login</h2>

        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" />
        </div>

        {/* Login Button */}
        <div className="d-grid mb-3">
          <button className="btn btn-primary">Login</button>
        </div>

        {/* Divider */}
        <div className="text-center mb-3 text-muted">OR</div>

        <div className="d-grid">
          <button className="btn btn-outline-danger w-100 mt-2 d-flex align-items-center justify-content-center">
        <FaGoogle size={20} className="me-2" /> Continue with Google
      </button>

      {/* LinkedIn Button */}
      <button className="btn btn-outline-primary w-100 mt-2 d-flex align-items-center justify-content-center">
        <FaLinkedin size={20} className="me-2" /> Continue with LinkedIn
      </button>
        </div>

        {/* Signup Link */}
        <p className="text-center mt-3 mb-0">
          Don't have an account? <a href="/signup" className="text-primary">Sign up here</a>
        </p>
      </div>
    </div>
  );
}
export default Login;
