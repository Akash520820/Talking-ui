import React, { useState, useEffect } from 'react';
import './FourthContent.css';

// Import images
import spokenEnglishImg from '../assets/videosAndPhotos/coursespic/spoken_english_and_personality_development_course_app.jpg';
import englishMasteryImg from '../assets/videosAndPhotos/coursespic/English mastery.jpg';
import enrichmentImg from '../assets/videosAndPhotos/coursespic/enrichment(3-5).jpg';
import academicSuccessImg from '../assets/videosAndPhotos/coursespic/EnglishAcademicSuccess.jpg';

function FourthContent() {
  const [screenSize, setScreenSize] = useState('large');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('large');
      } else if (window.innerWidth >= 768) {
        setScreenSize('medium');
      } else {
        setScreenSize('mobile');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const courseData = [
    {
      id: 1,
      imageurl: spokenEnglishImg,
      coursename: "Spoken English and Personality Development Program",
      coursedescription:
        "Designed for best value, this combo pack is specially crafted for you. ENROLL NOW! for the best value",
      rating: "4.0",
    },
    {
      id: 2,
      imageurl: englishMasteryImg,
      coursename: "English Mastery Program",
      coursedescription:
        "We are excited to introduce you to TalkEng's English Mastery Program, specially designed for students in...",
      rating: "4.2",
    },
    {
      id: 3,
      imageurl: enrichmentImg,
      coursename: "English Enrichment Program",
      coursedescription:
        "The English Enrichment Program for classes 3-5 is a comprehensive language course aimed at...",
      rating: "4.3",
    },
    {
      id: 4,
      imageurl: academicSuccessImg,
      coursename: "English for Academic Success",
      coursedescription:
        "In this curriculum students from 6 to 8 to a rigorous curriculum, students will strengthen their reading...",
      rating: "4.5",
    },
  ];

  return (
    <section className={`fourth-content-special-courses-section fourth-content-${screenSize}-screen`}>
      {/* Header Area */}
      <div className="fourth-content-course-header-wrapper">
        <div className="fourth-content-course-title-area">
          {screenSize === 'mobile' ? (
            <>
              <h2 className="fourth-content-primary-heading fourth-content-mobile-heading">
                <span className="fourth-content-accent-coral">Special</span>{" "}
                <span className="fourth-content-accent-emerald">Courses</span>
              </h2>
              <h2 className="fourth-content-primary-heading fourth-content-mobile-heading">
                <span className="fourth-content-accent-dark">For Your Learning</span>
              </h2>
            </>
          ) : (
            <>
              <h2 className="fourth-content-primary-heading">
                <span className="fourth-content-accent-coral">Special</span>{" "}
                <span className="fourth-content-accent-emerald">Courses</span>{" "}
                <span className="fourth-content-accent-dark">To Meet Your</span>
              </h2>
              <h2 className="fourth-content-primary-heading">
                <span className="fourth-content-accent-dark">Specific</span>{" "}
                <span className="fourth-content-accent-coral">Learning Needs</span>
              </h2>
            </>
          )}
        </div>
        <h3 className="fourth-content-section-tagline">
          <span className="fourth-content-tagline-decoration">•</span>
          SPECIAL COURSES
          <span className="fourth-content-tagline-decoration">•</span>
        </h3>
      </div>

      {/* Course Cards Area */}
      <div className="fourth-content-course-cards-wrapper">
        <div className={`fourth-content-course-cards-grid fourth-content-${screenSize}-grid`}>
          {courseData.map((course, index) => (
            <div
              key={course.id}
              className={`fourth-content-single-course-card fourth-content-${screenSize}-card`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Image Section */}
              <div className="fourth-content-course-image-wrapper">
                <img
                  src={course.imageurl}
                  className="fourth-content-course-thumbnail"
                  alt={course.coursename}
                  loading="lazy"
                />
                <div className="fourth-content-image-overlay">
                  <div className="fourth-content-overlay-content">
                    <span className="fourth-content-course-category">English Course</span>
                  </div>
                </div>
              </div>
              
              {/* Course Details Section */}
              <div className="fourth-content-course-info-container">
                <div className="fourth-content-course-header-info">
                  <h5 className="fourth-content-course-heading">
                    {course.coursename}
                  </h5>
                  <div className="fourth-content-course-meta">
                    <span className="fourth-content-course-duration">12 weeks</span>
                    <span className="fourth-content-course-level">Beginner</span>
                  </div>
                </div>
                
                <p className="fourth-content-course-summary">
                  {course.coursedescription}
                </p>
                
                {/* Course Footer with Rating and CTA */}
                <div className="fourth-content-course-actions-bar">
                  <div className="fourth-content-rating-section">
                    <span className="fourth-content-course-rating-tag">
                      ⭐ {course.rating}
                    </span>
                    <span className="fourth-content-rating-count">(124)</span>
                  </div>
                  <button className="fourth-content-course-enroll-button">
                    {screenSize === 'mobile' ? 'Enroll' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="fourth-content-view-all-wrapper">
          <button className="fourth-content-view-all-courses-btn">
            <span className="fourth-content-btn-textCourse">View All Courses</span>
            <span className="fourth-content-btn-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FourthContent;