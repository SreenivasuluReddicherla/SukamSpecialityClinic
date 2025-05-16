import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css"; // Same styling remains

const videoTestimonials = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/CXDszX8-P-o",
      title: "Hernia Explained from Formation to Treatment | Dr. Manoj Karthik S",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/ccR62nPk8PM",
      title: "Swelling (Cysts) on the Body Explained Causes, Types and Treatment Options | Dr. Manoj Karthik",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/ZqIqkz-e3kQ",
      title: "Diabetic Foot Essential Tips for Prevention and Care | Dr. Manoj Karthik",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/mY25sY26Ztc",
      title: "Fatty Liver Risks, Prevention & Treatment | Dr. Manoj Karthik S",
    },
    {
      id: 5,
      url: "https://www.youtube.com/embed/uuWYyEUjrkw",
      title: "Surgery Preparation: Essential Steps | Dr. Manoj Karthik S",
    },
  ];
  

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>Sukam Voices</h2>
      <br></br>
      <Swiper
        modules={[Navigation, Pagination]} // ❌ Only Navigation and Pagination
        navigation
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {videoTestimonials.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="testimonial-card">
              <div className="video-container">
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h4>{video.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;