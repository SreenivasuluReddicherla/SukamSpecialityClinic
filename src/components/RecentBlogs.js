import React, { useEffect, useRef, useState } from "react";
import "./RecentBlogs.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    image: img1,
    title: "Understanding Irregular Menstruation: Causes, Signs, and When to Seek Help",
    author: "Dr. Anitha A Manoj",
    date: "March 20, 2025",
  },
  {
    id: 2,
    image: img2,
    title: "Understandig Thyroid Fertility",
    author: "Dr. Manoj Karthik",
    date: "March 22, 2025",
  },
  {
    id: 3,
    image: img1,
    title: "Understandig Egg Freezing",
    author: "Dr. Anitha A Manoj",
    date: "March 24, 2025",
  },
   {
    id: 4,
    image: img2,
    title: "Understandig Hernia",
    author: "Dr. Manoj Karthik",
    date: "March 26, 2025",
  },
  // {
  //   id: 5,
  //   image: img1,
  //   title: "Understandig Menstrual Health",
  //   author: "Dr. Anitha A Manoj",
  //   date: "March 28, 2025",
  // },
  {
    id: 6,
    image: img1,
    title: "Understandig High Risk Pregnancy",
    author: "Dr. Anitha A Manoj",
    date: "March 30, 2025",
  },
];

const RecentBlogs = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  // Auto scroll effect
  useEffect(() => {
    let animationFrameId;
    const speed = 0.3;

    const scroll = () => {
      if (scrollRef.current && !isPaused) {
        scrollRef.current.scrollLeft += speed;
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Fade in animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-on-scroll");
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleReadMore = (id) => {
    navigate(`/blogs/${id}`);
  };

  const handleViewAll = () => {
    navigate("/blogs");
  };

  return (
    <div className="all-blogs-container" ref={containerRef}>
      <h2 className="blog-title">Sukam Blogs</h2>
      <div
        className="blog-strip-container"
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-heading">{blog.title}</h3>
              <p className="blog-meta">
                By {blog.author} | {blog.date}
              </p>
            </div>
          </div>
        ))}

        {/* View All Blogs Card */}
        <div className="blog-card view-all-card">
          <div className="blog-content center-content">
            <button className="read-more" onClick={handleViewAll}>
              View Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
