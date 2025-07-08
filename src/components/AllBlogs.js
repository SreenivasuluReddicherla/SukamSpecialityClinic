import React from "react";
import "./AllBlogs.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: "Blog1IrregularMenstruation",
    image: img1,
    title: "Understanding Irregular Menstruation: Causes, Signs, and When to Seek Help",
    author: "Dr. Anitha A Manoj",
    date: "March 20, 2025",
  },
  {
    id: "thyroid-fertility",
    image: img2,
    title: "Understandig Thyroid Fertility",
    author: "Dr. Manoj Karthik",
    date: "March 22, 2025",
  },
  {
    id: "egg-freezing",
    image: img1,
    title: "Understandig Egg Freezing",
    author: "Dr. Anitha A Manoj",
    date: "March 24, 2025",
  },
   {
    id: "hernia-awareness",
    image: img2,
    title: "Understandig Hernia",
    author: "Dr. Manoj Karthik",
    date: "March 26, 2025",
  },
  {
    id: "menstrual-health",
    image: img1,
    title: "Understandig Menstrual Health",
    author: "Dr. Anitha A Manoj",
    date: "March 28, 2025",
  },
  {
    id: "high-risk-pregnancy",
    image: img1,
    title: "Understandig High Risk Pregnancy",
    author: "Dr. Anitha A Manoj",
    date: "March 30, 2025",
  },
];

const AllBlogs = () => {
  const navigate = useNavigate();

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
              {/* <p className="blog-description">{blog.content}</p> */}
              <a
  className="blog-link"
  onClick={() => navigate(`/${blog.id}`)}
>
  See more about it →
</a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
