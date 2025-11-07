import React from 'react';
import './ApplyAsTutorHowToApply.css';

function ApplyAsTutorHowToApply() {
  const applicationSteps = [
    {
      id: 1,
      number: "01",
      label: "Step 1",
      title: "Download TalkEng From Google Play Store & SignUp as a Tutor",
      description: "Get started by downloading our app and creating your tutor profile",
      icon: (
        <svg className="step-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"/>
        </svg>
      )
    },
    {
      id: 2,
      number: "02",
      label: "Step 2",
      title: "Create a 2-mins Intro Video, Speaking in English & Following the Guidelines",
      description: "Showcase your teaching style and English proficiency in a short video",
      icon: (
        <svg className="step-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
        </svg>
      )
    },
    {
      id: 3,
      number: "03",
      label: "Step 3",
      title: "Watch The Full Training Video Carefully and its Mandatory",
      description: "Learn our teaching methodology and platform features thoroughly",
      icon: (
        <svg className="step-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      )
    },
    {
      id: 4,
      number: "04",
      label: "Step 4",
      title: "Attend Demo Classes with the TalkEng Team and Wait For Approval",
      description: "Demonstrate your teaching skills in practice sessions with our team",
      icon: (
        <svg className="step-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    },
    {
      id: 5,
      number: "05",
      label: "Step 5",
      title: "If Approved, Start Your Journey as a Tutor at TalkEng as a Basic Tutor",
      description: "Begin teaching and making an impact on students worldwide",
      icon: (
        <svg className="step-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="how-to-apply-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Application Process</div>
          <h2 className="section-title">How To Apply?</h2>
          <p className="section-description">
            Follow these simple steps to become a part of the TalkEng tutoring community
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="steps-container">
          <div className="row g-4">
            {applicationSteps.map((step) => (
              <div 
                key={step.id} 
                className="col-lg-4 col-md-6 col-12"
              >
                <div className="step-card">
                  <div className="step-header">
                    <div className="step-number-badge">
                      <span className="step-number">{step.number}</span>
                    </div>
                    <div className="step-icon-wrapper">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="step-content">
                    <div className="step-label">{step.label}</div>
                    <h3 className="step-title">{step.title}</h3>
                    <div className="step-divider"></div>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="cta-container">
          <button className="cta-button">
            Start Your Application
            <svg className="arrow-icon" fill="currentColor" viewBox="0 0 24 24">-
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ApplyAsTutorHowToApply;