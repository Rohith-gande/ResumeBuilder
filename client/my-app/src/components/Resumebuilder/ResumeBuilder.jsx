// Resume Builder with Wizard Style and Split-Screen Toggle (Styled with Bootstrap)

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        template: '',
        name: '',
        contact: '',
        skills: '',
        education: [],
        experience: [],
        projects: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="container-fluid resume-builder py-5">
            <div className="steps d-flex justify-content-around mb-4">
                <div className={`step-indicator ${step === 1 ? 'active' : ''}`}>Step 1: Choose Template</div>
                <div className={`step-indicator ${step === 2 ? 'active' : ''}`}>Step 2: Input Information</div>
                <div className={`step-indicator ${step === 3 ? 'active' : ''}`}>Step 3: Preview</div>
            </div>

            {step === 1 && (
                <div className="step step-1 text-center">
                    <h2 className="mb-4">Choose a Resume Template</h2>
                    <div className="row g-3">
                        {['Classic', 'Modern', 'Creative', 'Minimalist'].map((template) => (
                            <div key={template} className="col-md-3">
                                <div className="card template-card p-3" onClick={() => { setFormData({ ...formData, template }); nextStep(); }}>
                                    {template}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="step step-2">
                    <h2 className="text-center mb-4">Enter Your Information</h2>
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Name" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label>Contact</label>
                        <input type="text" name="contact" className="form-control" placeholder="Contact" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label>Skills</label>
                        <textarea name="skills" className="form-control" placeholder="Skills" onChange={handleChange}></textarea>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
                        <button className="btn btn-primary" onClick={nextStep}>Next</button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="step step-3">
                    <h2 className="text-center mb-4">Resume Preview</h2>
                    <div className="card p-4 border mb-3">
                        <h3>{formData.name}</h3>
                        <p>{formData.contact}</p>
                        <p>{formData.skills}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
                        <button className="btn btn-success btn-download">Download PDF</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumeBuilder;
