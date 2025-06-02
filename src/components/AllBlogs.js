import React from "react";
import "./AllBlogs.css";
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
    content:
      "In this comprehensive guide, we will explore the IVF process, its success rates, and things you should know before opting for it.",
  },
  {
    id: 2,
    image: img2,
    title: "How Nutrition Affects Fertility?",
    author: "Dr. Anitha A Manoj",
    date: "March 25, 2025",
    content:
      "A deep dive into the importance of nutrition and how it plays a crucial role in both male and female fertility.",
  },
  {
    id: 3,
    image: img3,
    title: "The Role of Stress in Infertility",
    author: "Dr. Anitha A Manoj",
    date: "March 22, 2025",
    content:
      "Discover how stress impacts hormonal balance and what strategies can help manage stress effectively.",
  },
  {
    id: 4,
    image: img1,
    title: "Tips for Healthy Pregnancy",
    author: "Dr. Kavya S",
    date: "March 18, 2025",
    content:
      "Here are some must-follow tips for expecting mothers to ensure a smooth and healthy pregnancy journey.",
  },
  {
    id: 5,
    image: img2,
    title: "Male Fertility Myths Debunked",
    author: "Dr. Manoj Karthik",
    date: "March 14, 2025",
    content:
      "Let’s bust some common myths about male fertility and shed light on facts supported by science.",
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
              <p className="blog-description">{blog.content}</p>
              <a
  className="blog-link"
  onClick={() => navigate(`/blogs/${blog.id}`)}
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
