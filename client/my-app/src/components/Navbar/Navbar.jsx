import React from 'react';
import { Link } from 'react-router-dom';   // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-white bg-white shadow-sm sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            <img src="/logo.png" alt="Logo" width="40" height="40" className="me-2"/>
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item fw-bold"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item fw-bold"><Link className="nav-link" to="/resume-builder">Resume Builder</Link></li>
              <li className="nav-item fw-bold"><Link className="nav-link" to="/ats-checker">ATS Score Checker</Link></li>
              <li className="nav-item fw-bold"><Link className="nav-link" to="/portfolio-builder">Portfolio Builder</Link></li>
              <li className="nav-item fw-bold"><Link className="nav-link btn btn-primary text-black" to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
