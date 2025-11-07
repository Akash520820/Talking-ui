import React, { useState } from "react";
import "./OlympiadHomePart3.css";

function OlympiadHomePart3() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleSyllabusDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      console.log("Syllabus download initiated!");
      // Add your actual download logic here
      // Example: window.open('path-to-syllabus.pdf', '_blank');
    }, 2000);
  };

  return (
    <section className="syllabus-section">
      {/* Background Circles */}
      <div className="bg-circles">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      <div className="syllabus-container">
        <div className="syllabus-content-card">
          {/* Icon */}
          <div className="syllabus-icon-container">
            <svg 
              className="syllabus-icon-svg" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
              <path d="M8 15h8v2H8zm0-4h8v2H8zm0-4h5v2H8z"/>
            </svg>
          </div>

          {/* Header */}
          <div className="syllabus-header">
            <span className="syllabus-badge">Comprehensive Guide</span>
            <h1 className="syllabus-title">
              Syllabus for State Level
              <span className="syllabus-title-highlight">English Olympiad 2.0</span>
            </h1>
            <p className="syllabus-description">
              Access the comprehensive syllabus for the upcoming State Level English Olympiad 2.0. 
              Get detailed insights into topics, exam patterns, marking schemes, and expert preparation 
              strategies designed to help you excel in the competition.
            </p>
          </div>

          {/* Download Button */}
          <button 
            className={`syllabus-download-button ${isDownloading ? 'downloading' : ''}`}
            onClick={handleSyllabusDownload}
            disabled={isDownloading}
          >
            <svg 
              className="download-icon-svg" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              {isDownloading ? (
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
              ) : (
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              )}
            </svg>
            <span>{isDownloading ? 'Preparing Download...' : 'Download Syllabus'}</span>
          </button>

          {/* Features Grid */}
          <div className="syllabus-features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-check-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <span className="feature-text">Complete Topic Coverage</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-check-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <span className="feature-text">Detailed Exam Pattern</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-check-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <span className="feature-text">Expert Guidelines</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-check-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <span className="feature-text">Sample Questions</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="syllabus-stats-section">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Topics Covered</span>
            </div>

            <div className="stat-item">
              <span className="stat-number">100</span>
              <span className="stat-label">Sample Questions</span>
            </div>

            <div className="stat-item">
              <span className="stat-number">25</span>
              <span className="stat-label">Pages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OlympiadHomePart3;