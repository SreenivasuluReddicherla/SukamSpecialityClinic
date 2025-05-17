import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css";

const videoTestimonials = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/AE8Z-0N8Lzc",
    title: "Fertile Window Explained: When Are You Most Likely to Conceive? | Dr. Anitha A Manoj",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/mY25sY26Ztc",
    title: "Fatty Liver Risks, Prevention & Treatment | Dr. Manoj Karthik S",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/ajhkuQssQ10",
    title: "Bleeding in Early Pregnancy? Here's What You Need to Know | Dr. Anitha A Manoj",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/uuWYyEUjrkw",
    title: "Surgery Preparation: Essential Steps | Dr. Manoj Karthik S",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/sirKxcCdx9k",
    title: "Recurrent Pregnancy Loss: Causes and Treatments | Dr. Anitha A Manoj",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>Sukam Voices</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
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
