import React, { useState } from 'react';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('User signed up:', formData);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: '400px', borderRadius: '12px' }}>
                <h2 className="text-center fw-bold mb-4">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" id="name" placeholder="Enter your name" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" id="email" placeholder="Enter your email" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" id="password" placeholder="Enter your password" required />
                    </div>

                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </form>

                <div className="text-center mb-3 text-muted">OR</div>

                <div className="d-grid">
                    <button className="btn btn-outline-danger w-100 mt-2 d-flex align-items-center justify-content-center">
                        <FaGoogle size={20} className="me-2" /> Continue with Google
                    </button>

                    <button className="btn btn-outline-primary w-100 mt-2 d-flex align-items-center justify-content-center">
                        <FaLinkedin size={20} className="me-2" /> Continue with LinkedIn
                    </button>
                </div>

                <p className="text-center mt-3 mb-0">
                    Already have an account? <a href="/login" className="text-primary">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
