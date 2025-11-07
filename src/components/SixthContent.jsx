import { useState, useEffect } from 'react';
import './SixthContent.css';

function SixthContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "This is a nice and helpful app for learning English so I have requested all students download this app learning English best app love this app",
      author: "Yogesh Nain",
      avatar: "YN",
      rating: 5
    },
    {
      id: 2,
      text: "Very good application Sir and I would like to give five stars to this application as it is very helpful for every student. Really super application",
      author: "Deep Chauhan",
      avatar: "DC",
      rating: 5
    },
    {
      id: 3,
      text: "It is a very nice application. Very easy to use and very useful app. I really like it. I am very satisfied with this app",
      author: "Ramprasad Roy",
      avatar: "RR",
      rating: 5
    },
    {
      id: 4,
      text: "I found the app very appealing. The 1-1 to 1 tutors is what's best they are providing for student like me, who are shy to speak infront of others. Thanks Ã¢ËœÂº",
      author: "Amhvert Guy",
      avatar: "AG",
      rating: 5
    },
    {
      id: 5,
      text: "Great app if you want to learn English with a reasonable price OR want to help others to be fluent in the language. They also pay you for it!",
      author: "Birat Roy Choudhury",
      avatar: "BC",
      rating: 5
    },
    {
      id: 6,
      text: "Very good experience We can learn a lot through a very good application and there is a lot to learn here and it is very important for the students for the exam.",
      author: "Ashraful Ali",
      avatar: "AA",
      rating: 5
    },
    {
      id: 7,
      text: "This is so nice app for learning English without giving any expensive coaching fees this is mostly helpful for poor students they doesn't have money",
      author: "Raj kumar",
      avatar: "R",
      rating: 5
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(1, reviews.length - 3));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, [reviews.length]);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  const StarIcon = () => (
    <svg className="sixth-content-star-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  return (
    <div className="sixth-content">
      {/* Background decorative elements */}
      <div className="sixth-content-bg-decoration-large"></div>
      <div className="sixth-content-bg-decoration-small"></div>
      <div className="sixth-content-bg-decoration-accent1"></div>
      <div className="sixth-content-bg-decoration-accent2"></div>
      
      <div className="sixth-content-wrapper">
        {/* Header */}
        <div className="sixth-content-header-section">
          <h2 className="sixth-content-main-title">
            <span className="sixth-content-highlight-blue"> How Our Previous Learners Feel</span> 
          </h2>
          <h3 className="sixth-content-sub-title">
            About Us
          </h3>
          <p className="sixth-content-section-label">
            CUSTOMER REVIEWS
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="sixth-content-carousel-container">
          {/* Reviews Grid */}
          <div className="sixth-content-reviews-wrapper">
            <div className="sixth-content-reviews-grid">
              {getVisibleReviews().map((review, index) => (
                <div
                  key={`${review.id}-${currentSlide}-${index}`}
                  className="sixth-content-review-card"
                >
                  {/* Quote Icon */}
                  <div className="sixth-content-quote-mark">
                    <svg className="sixth-content-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  {/* Review Text */}
                  <p className="sixth-content-review-text">
                    {review.text}
                  </p>
                  
                  {/* Rating */}
                  <div className="sixth-content-rating-section">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="sixth-content-author-section">
                    <p className="sixth-content-author-name">
                      @{review.author}
                    </p>
                    
                    {/* Avatar */}
                    <div className="sixth-content-avatar">
                      {review.avatar}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="sixth-content-indicators-section">
          {Array.from({ length: Math.max(1, reviews.length - 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`sixth-content-indicator ${currentSlide === index ? 'sixth-content-indicator-active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SixthContent;