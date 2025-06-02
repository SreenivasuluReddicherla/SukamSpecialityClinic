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
    title: "Navigating the Digital Health Resolution",
    author: "Dr. Manoj Karthik",
    date: "March 28, 2025",
  },
  {
    id: 2,
    image: img2,
    title: "How Nutrition Affects Fertility?",
    author: "Dr. Anitha A Manoj",
    date: "March 25, 2025",
  },
  {
    id: 3,
    image: img3,
    title: "The Role of Stress in Infertility",
    author: "Dr. Anitha A Manoj",
    date: "March 22, 2025",
  },
  {
    id: 4,
    image: img1,
    title: "Tips for Healthy Pregnancy",
    author: "Dr. Kavya S",
    date: "March 18, 2025",
  },
  {
    id: 5,
    image: img2,
    title: "Male Fertility Myths Debunked",
    author: "Dr. Manoj Karthik",
    date: "March 14, 2025",
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
              <button className="read-more" onClick={() => handleReadMore(blog.id)}>
                Read More
              </button>
            </div>
          </div>
        ))}

        {/* View All Blogs Card */}
        <div className="blog-card view-all-card">
          <div className="blog-content center-content">
            <h3 className="blog-heading">View All Blogs</h3>
            <button className="read-more" onClick={handleViewAll}>
              Go to Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
