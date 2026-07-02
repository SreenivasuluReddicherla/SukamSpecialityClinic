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
    url: "https://www.youtube.com/embed/wy2QXpB2A6s?si=zQyaqfNTQoKCAnB7",
    title: "Sukam Specialty and Fertility Clinic is a leading healthcare centre in Bengaluru. | Dr. Manoj Karthik | Dr. Anitha A Manoj",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/AE8Z-0N8Lzc",
    title: "Fertile Window Explained: When Are You Most Likely to Conceive? | Dr. Anitha A Manoj",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/mY25sY26Ztc",
    title: "Fatty Liver Risks, Prevention & Treatment | Dr. Manoj Karthik S",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/ajhkuQssQ10",
    title: "Bleeding in Early Pregnancy? Here's What You Need to Know | Dr. Anitha A Manoj",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/uuWYyEUjrkw",
    title: "Surgery Preparation: Essential Steps | Dr. Manoj Karthik S",
  },
  {
    id: 6,
    url: "https://www.youtube.com/embed/sirKxcCdx9k",
    title: "Recurrent Pregnancy Loss: Causes and Treatments | Dr. Anitha A Manoj",
  },
  {
    id: 7,
    url: "https://www.youtube.com/embed/RkbK9A9E3R0?si=tGPVX0GFk9mOvPj-",
    title: "🎗 Cervical Cancer: What Every Woman Must Know! | Dr. Anitha A Manoj",
  },
  {
    id: 8,
    url: "https://www.youtube.com/embed/OVkNXEgbhFE?si=tvGPHjdJUTVHmTRG",
    title: "🎗 Why Is Cancer Rising in Young People? | Dr. Manoj Karthik",
  },
  {
    id: 9,
    url: "https://www.youtube.com/embed/pqnmhJwXM1Y?si=pleXJ-sySZMDFbRf",
    title: "Is White Discharge (Leucorrhoea) Worrying You? Here's What You Need to Know!| Dr. Anitha A Manoj",
  },
  {
    id: 10,
    url: "https://www.youtube.com/embed/uuWYyEUjrkw?si=SD051IqdlfPqSBnr",
    title: "Surgery Preparation: Essential Steps | Dr. Manoj Karthik S",
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
