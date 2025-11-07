import React from 'react';
import './ApplyAsTutorLearnersLevels.css';

function ApplyAsTutorLearnersLevels() {
  const learnerLevels = [
    {
      id: 1,
      number: "1",
      title: "LEVEL-1",
      description: "Focus on improving the listening skills of learners, help them build confidence and engage more.",
      duration: "1 Month",
      icon: (
        <svg className="level-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
        </svg>
      )
    },
    {
      id: 2,
      number: "2",
      title: "LEVEL-2",
      description: "Encouraging learners to engage more in conversations and introduction to new vocabularies.",
      duration: "2 Months",
      icon: (
        <svg className="level-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      )
    },
    {
      id: 3,
      number: "3",
      title: "LEVEL-3",
      description: "Engage learners in more complex conversations to get the learner fluent in the language.",
      duration: "3 Months",
      icon: (
        <svg className="level-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
        </svg>
      )
    },
    {
      id: 4,
      number: "4",
      title: "LEVEL-4",
      description: "This level will primarily focus on teaching British / American accents to the learners.",
      duration: "4 Months",
      icon: (
        <svg className="level-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      id: 5,
      number: "5",
      title: "LEVEL-5",
      description: "This is the final level where the learners focus on perfecting their fluency and accent.",
      duration: "2 Months",
      icon: (
        <svg className="level-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path d="M12 6l-6 8h12z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="learners-levels-section">
      <div className="container">
        {/* Section Header */}
        <div className="levels-header">
          <div className="levels-subtitle">Learning Journey</div>
          <h2 className="levels-title">5 Levels Of The Learners</h2>
          <p className="levels-description">
            Our structured learning path helps students progress from basic listening skills 
            to complete fluency with proper accent
          </p>
        </div>
        
        {/* Levels Timeline */}
        <div className="levels-timeline-container">
          <div className="timeline-line d-none d-xl-block"></div>
          
          <div className="row g-4">
            {learnerLevels.map((level) => (
              <div 
                key={level.id} 
                className="col-xl col-lg-4 col-md-6 col-12"
              >
                <div className="level-card-wrapper">
                  <div className="level-card">
                    {/* Level Number Badge */}
                    <div className="level-number-badge">
                      <span className="level-number-text">{level.number}</span>
                    </div>
                    
                    {/* Level Icon */}
                    <div className="level-icon-wrapper">
                      {level.icon}
                    </div>
                    
                    {/* Level Content */}
                    <div className="level-content">
                      <h3 className="level-title">{level.title}</h3>
                      <p className="level-description">{level.description}</p>
                      
                      {/* Duration Badge */}
                      <div className="level-duration">
                        <svg className="duration-icon" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                        <span>Time: {level.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="levels-cta-section">
          <button className="levels-cta-button">
            Start Learning Journey
            <svg className="cta-arrow-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ApplyAsTutorLearnersLevels;