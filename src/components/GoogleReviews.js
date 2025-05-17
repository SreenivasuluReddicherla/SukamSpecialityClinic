import React, { useState, useEffect } from "react";
import "./GoogleReviews.css";

const reviews = [
  {
    id: 1,
    name: "Priyanka V K",
    profilePic: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    text: "Doctor Manoj was very kind, and was helpful in answering all our questions asked. Gave us the right suggestions for the cause, Great experience for the first time and will be going for all my future needs",
    bgColor: "#FFDADA", // Light Red
  },
  {
    id: 2,
    name: "Pallavi Pallavi",
    profilePic: "https://i.pravatar.cc/100?img=2",
    rating: 5,
    text: "I had an excellent experience Dr.Anitha was incredible, professional and compassionate, making me feel cared for throughout my visit. The facilities were clean and well-maintained, and I appreciated the clear communication from my healthcare team regarding my treatment plan. I would highly recommend to anyone in need of medical care",
    bgColor: "#DFFFEF", // Light Green
  },
  {
    id: 3,
    name: "Kalavakunta Ammulu",
    profilePic: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    text: "I consulted Dr. anitha madam throughout my pregnancy, and I couldn't have asked for a better experience. She was always approachable, explained every step clearly, and made me feel confident and supported. Her calm and positive approach made my journey to motherhood so much smoother. Truly grateful for her care!",
    bgColor: "#FFEFC1", // Light Yellow
  },
  {
    id: 4,
    name: "Sasi Priya",
    profilePic: "https://i.pravatar.cc/100?img=4",
    rating: 5,
    text: "I met Anitha ma'am for my PCOD issues. She listened carefully to all my queries and answered them patiently. As a woman, I had many inhibitions, but the way she spoke made me feel very comfortable. Thank you so much, ma'am.",
    bgColor: "#D9ECFF", // Light Blue
  },
  {
    id: 5,
    name: "Prathap kumar",
    // profilePic: "https://i.pravatar.cc/100?img=5",
    rating: 4,
    text: "Sukam Speciality Clinic is really good. Dr Anitha Maam.. is really supportive and she explains our queries very well. My wife pregnancy period is going very smoothly in this hospital. I would recommend for every one for their pregnancy journey...Love u Dr.Anitha Maam...",
    bgColor: "#E3C7EC", // Light Purple
  },
];
const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + visibleCount) % reviews.length
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - visibleCount + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      nextReview();
    }, 8000);
    return () => clearTimeout(interval);
  }, [currentIndex]);

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Our Patients Say</h2>

      <div className="review-wrapper">
        <button className="prevbtn" onClick={prevReview}>⏪</button>

        <div className="review-cards-group">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="review-card"
              style={{ backgroundColor: review.bgColor }}
            >
              {/* <img
                src={review.profilePic}
                alt={review.name}
                className="review-avatar"
              /> */}
              <h3 className="reviewer-name">{review.name}</h3>
              <p className="review-text">"{review.text}"</p>
              <div className="rating">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
            </div>
          ))}
        </div>

        <button className="nextbtn" onClick={nextReview}>⏩</button>
      </div>
    </div>
  );
};

export default GoogleReviews;
