import React from 'react';
import './FAQThirdPart.css';

const FAQThirdPart = () => {
  return (
    <section className="talkeng-section">
      <div className="container">
        <div className="talkeng-content-wrapper">
          <div className="row align-items-center">
            {/* Left Content Section */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              {/* Logo */}
              <div className="logo-container">
                <div className="logo-wrapper">
                  <div className="logo-icon-box">
                    <svg className="logo-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                  </div>
                  <div className="logo-text-group">
                    <span className="logo-text">TALKENG</span>
                    <span className="logo-tagline">Learn Language Practically</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="content-section">
                <h2 className="section-heading">
                  The Best Platform to <span className="section-heading-highlight">Master English</span>
                </h2>
                
                <p className="description-text">
                  TalkEng is the best platform to become fluent in English. Join live 1-ON-1 
                  video/voice classes with expert tutors or guided Public Speaking for free. 
                  This helps you become fluent in English as well as boost your confidence as 
                  easily as you learned your mother tongue. <strong>LEARNING ENGLISH HAS NEVER BEEN EASIER.</strong>
                </p>
                
                {/* Features List */}
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-icon-wrapper">
                      <svg className="feature-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <p className="feature-text">Live 1-ON-1 video/voice classes with expert tutors</p>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon-wrapper">
                      <svg className="feature-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <p className="feature-text">Free guided Public Speaking sessions</p>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon-wrapper">
                      <svg className="feature-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <p className="feature-text">Build confidence and fluency naturally</p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button 
                  className="cta-button"
                  onClick={() => {
                    console.log('Get Started clicked');
                  }}
                >
                  Get Started
                  <svg className="cta-arrow" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right Contact Card */}
            <div className="col-lg-6">
              <div className="contact-card">
                <h3 className="contact-card-title">
                  <span className="contact-card-title-icon">
                    <svg className="contact-title-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </span>
                  Get in Touch
                </h3>
                
                <div className="contact-items-wrapper">
                  {/* Address */}
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg className="contact-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h5 className="contact-label">Agartala (HQ)</h5>
                      <p className="contact-text">
                        5TH FLOOR, STPI, IT BHAVAN, ITI ROAD, AGARTALA,<br/>
                        West Tripura, Tripura, 799006
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg className="contact-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <h5 className="contact-label">Email</h5>
                      <div className="email-links-wrapper">
                        <a href="mailto:support@talkengglobal.com" className="email-link">
                          <svg className="email-link-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          support@talkengglobal.com
                        </a>
                        <a href="mailto:info@talkengglobal.com" className="email-link">
                          <svg className="email-link-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          info@talkengglobal.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone (Optional - can be added if needed) */}
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg className="contact-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <h5 className="contact-label">Support Hours</h5>
                      <p className="contact-text">
                        Monday - Saturday: 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQThirdPart;