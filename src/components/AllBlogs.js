import React from "react";
import "./AllBlogs.css";
import { Link } from 'react-router-dom';

import blog1 from "../assets/blog1.jpg"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.jpg"
import blog4 from "../assets/blog4.jpg"
import blog5 from "../assets/blog5.jpg"

const blogs = [
  {
    id: "menstrual-health",
    image: blog1,
    title: "Understandig Menstrual Health",
    author: "Dr. Anitha A Manoj",
    date: "March 28, 2025",
  },
  {
    id: "thyroid-fertility",
    image: blog2,
    title: "Understandig Thyroid & Fertility",
    author: "Dr. Anitha A Manoj",
    date: "March 22, 2025",
  },
  {
    id: "egg-freezing",
    image: blog3,
    title: "Understandig Egg Freezing",
    author: "Dr. Anitha A Manoj",
    date: "March 24, 2025",
  },
   {
    id: "hernia-awareness",
    image: blog4,
    title: "Understandig Hernia",
    author: "Dr. Manoj Karthik",
    date: "March 26, 2025",
  },
  {
    id: "high-risk-pregnancy",
    image: blog5,
    title: "Understandig High Risk Pregnancy",
    author: "Dr. Anitha A Manoj",
    date: "March 30, 2025",
  },
];

const AllBlogs = () => {

  return (
    <div className="all-blogs-container">
      <h2 className="all-blogs-title">Sukam Blogs</h2>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p className="blog-author">
                By {blog.author} | {blog.date}
              </p>
              <Link className="blog-link" to={`/${blog.id}`}>
                See more about it →
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
