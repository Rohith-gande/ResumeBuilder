import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="display-4 fw-bold mb-4">Get Started with Your Career Journey</h1>
      <p className="lead mb-5">Choose a tool to begin building your future.</p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-lg p-4 tool-card">
            <h3 className="fw-bold">📄 Resume Builder</h3>
            <p>Create a professional resume with easy-to-use templates.</p>
            <a href="/resume-builder" className="btn btn-primary fw-bold">Start Building</a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg p-4 tool-card">
            <h3 className="fw-bold">✅ ATS Score Checker</h3>
            <p>Analyze your resume to ensure it passes Applicant Tracking Systems.</p>
            <a href="/ats-checker" className="btn btn-success fw-bold">Check Score</a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg p-4 tool-card">
            <h3 className="fw-bold">💼 Portfolio Builder</h3>
            <p>Showcase your skills and projects in a professional portfolio.</p>
            <a href="/portfolio-builder" className="btn btn-warning fw-bold">Create Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
