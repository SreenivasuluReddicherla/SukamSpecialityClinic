import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import img2 from "../assets/G0.JPG";
import img3 from "../assets/G1.JPG";
import img5 from "../assets/G2.JPG";
import img6 from "../assets/G3.JPG";
import img7 from "../assets/G4.JPG";
import img8 from "../assets/G5.JPG";
import img9 from "../assets/G6.JPG";
import img10 from "../assets/G7.JPG";
import img11 from "../assets/G8.JPG";
import img12 from "../assets/G9.JPG";
import img13 from "../assets/G10.JPG";
import img14 from "../assets/G11.JPG";
import img15 from "../assets/G12.JPG";
import img16 from "../assets/G13.JPG";
import img17 from "../assets/G12.JPG";


const allImages = [
 
  { id: 2, src: img2, category: "Hospital" },
  { id: 3, src: img3, category: "Reception" },
  { id: 5, src: img5, category: "Reception" },
  { id: 6, src: img6, category: "Hospital" },
  { id: 7, src: img7, category: "Labs" },
  { id: 8, src: img8, category: "Labs" },
  { id: 9, src: img9, category: "Labs" },
  { id: 10, src: img10, category: "Labs" },
  { id: 11, src: img11, category: "Labs" },
  { id: 12, src: img12, category: "Wards" },
  { id: 13, src: img13, category: "Wards" },
  { id: 14, src: img14, category: "Hospital" },
  { id: 15, src: img15, category: "Hospital" },
  { id: 16, src: img16, category: "Hospital" },
  { id: 17, src: img17, category: "Reception" },

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
  const node = galleryRef.current; // ✅ Local snapshot

  const observer = new IntersectionObserver(
    ([entry]) => {
      setInView(entry.isIntersecting);
    },
    { threshold: 0.3 }
  );

  if (node) {
    observer.observe(node);
  }

  return () => {
    if (node) {
      observer.unobserve(node);
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
