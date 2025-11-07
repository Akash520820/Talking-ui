import React from "react";
import "./OlympiadHomePart2.css";

const OlympiadHomePart2 = () => {
  const handleDownloadAdmitCard = () => {
    console.log('Download Admit Card clicked');
    // Add your download logic here
  };

  return (
    <div className="olympiad-container">
      {/* Background Pattern */}
      <div className="bg-pattern"></div>

      <div className="olympiad-content-wrapper">
        <div className="hero-layout">
          {/* Left Content Section */}
          <div className="hero-left-content">
            {/* State Badge */}
            <div className="state-badge-wrapper">
              <span className="badge-text">Tripura's Biggest</span>
              <span className="badge-text">State Level</span>
              <span className="badge-highlight">English</span>
            </div>

            {/* Main Title */}
            <div className="olympiad-title-section">
              <h1 className="olympiad-main-title">OLYMPIAD</h1>
              <div className="title-underline"></div>
              <p className="olympiad-subtitle">
                Join thousands of students across Tripura in the most prestigious 
                English language competition. Showcase your skills and win amazing prizes!
              </p>
            </div>
          </div>

          {/* Right Registration Card */}
          <div className="registration-card-wrapper">
            <div className="registration-card">
              {/* Card Header */}
              <div className="card-header">
                <h2 className="card-title">
                  <span className="card-title-highlight">Register Now</span> for the State Level English Olympiad
                </h2>
                <p className="card-subtitle">
                  Unlock your potential and let your skills shine on the biggest stage!
                </p>
              </div>

              {/* Info Cards */}
              <div className="info-cards-container">
                {/* Exam Date Card */}
                <div className="info-card exam-date-card">
                  <div className="card-note-label">
                    <svg className="note-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    Important Note
                  </div>
                  <p className="info-card-text">
                    The exam for the State Level English Olympiad 2.0 will be held on:
                  </p>
                  <div className="date-highlight-box">
                    <span className="date-day">SUNDAY</span>
                    <span className="date-main">27th July</span>
                    <span className="date-year">2025</span>
                  </div>
                </div>

                {/* Exam Time Card */}
                <div className="info-card exam-time-card">
                  <div className="card-note-label">
                    <svg className="note-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    Exam Schedule
                  </div>
                  <p className="info-card-text">
                    Exam time: <strong>12:00 PM</strong>
                  </p>
                  <p className="info-card-text">
                    Reporting time: <strong>1 hour before</strong> the exam time (11:00 AM)
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <button 
                className="download-button"
                onClick={handleDownloadAdmitCard}
              >
                <svg 
                  className="download-icon-svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                <span>Download Admit Card</span>
              </button>

              {/* Organizer Info */}
              <div className="organizer-section">
                <span className="organizer-label">Organised By</span>
                <div className="organizer-logo-wrapper">
                  <img
                    src="https://olympiad.talkengglobal.com/images/logo-forwebsite.png"
                    alt="Talk English Global Logo"
                    className="organizer-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OlympiadHomePart2;