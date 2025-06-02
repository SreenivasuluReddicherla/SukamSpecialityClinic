import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import img5 from "../assets/gallery5.png";
import img6 from "../assets/gallery6.png";
import img7 from "../assets/gallery7.png";
import img8 from "../assets/gallery8.png";
import img9 from "../assets/img11.JPG";
import img10 from "../assets/img12.JPG";
import img11 from "../assets/img13.JPG";
import img12 from "../assets/img14.JPG";


const allImages = [
 
  { id: 2, src: img2, category: "Hospital" },
  { id: 3, src: img3, category: "Hospital" },
  { id: 4, src: img12, category: "Reception" },
  { id: 5, src: img5, category: "Hospital" },
  { id: 6, src: img6, category: "Labs" },
  { id: 7, src: img7, category: "Labs" },
  { id: 8, src: img8, category: "Hospital" },
  { id: 9, src: img9, category: "Reception" },
  { id: 10, src: img10, category: "Reception" },
  { id: 11, src: img11, category: "Reception" },
  
];

const categories = ["All", "Hospital", "Wards", "Labs", "Reception"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [fade, setFade] = useState(false);
  const [inView, setInView] = useState(false);
  const galleryRef = useRef(null);

  const filteredImages =
    selectedCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setFade(true);
    setTimeout(() => {
      setSelectedImage(filteredImages[newIndex]?.src);
      setCurrentIndex(newIndex);
      setFade(false);
    }, 300);
  };

  const nextImage = () => {
    const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setFade(true);
    setTimeout(() => {
      setSelectedImage(filteredImages[newIndex]?.src);
      setCurrentIndex(newIndex);
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <div className={`gallery-container ${inView ? "animate" : ""}`} ref={galleryRef}>
      <h2 className="gallery-title">Sukam Gallery</h2>

      {/* Category Filters */}
      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="gallery-grid">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.category}
              className="gallery-image"
              onClick={() => {
                setSelectedImage(image.src);
                setCurrentIndex(index);
              }}
            />
          ))
        ) : (
          <p className="no-images">No images available in this category.</p>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="prev-btn" onClick={(e) => { e.stopPropagation(); prevImage(); }}>❮</button>
          <img
            src={selectedImage}
            alt="Enlarged View"
            className={`lightbox-image ${fade ? "fade-out" : "fade-in"}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="next-btn" onClick={(e) => { e.stopPropagation(); nextImage(); }}>❯</button>
          <button className="close-lightbox" onClick={() => setSelectedImage(null)}>✖</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
