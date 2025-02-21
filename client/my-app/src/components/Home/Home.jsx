import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Build Your Perfect Resume & Get an ATS Score!</h1>
          <p className="lead mt-3">Create industry-ready resumes using templates and analyze your ATS score instantly.</p>
          {/* <a href="/get-started" className="btn btn-light btn-lg fw-bold mt-3 cta-button"> Start Building Now</a> */}
        <Link to={"/get-started"} className="btn btn-light btn-lg fw-bold mt-3 cta-button">Start Building Now</Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Our Platform?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card feature-card p-4">
                <h5 className="fw-bold">Quick Editing</h5>
                <p>Easily customize your resume in minutes with user-friendly tools.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card p-4">
                <h5 className="fw-bold">ATS Score Analysis</h5>
                <p>Get instant feedback on how well your resume performs with Applicant Tracking Systems.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card p-4">
                <h5 className="fw-bold">Professional Templates</h5>
                <p>Choose from a range of modern and professional resume templates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
