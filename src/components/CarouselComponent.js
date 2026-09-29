import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselComponent.css";

// Import images
import img1 from "../assets/web/web1.webp";
import img2 from "../assets/web/web2.webp";
import img3 from "../assets/web/web3.webp";
import img4 from "../assets/web/web4.jpg";
import img5 from "../assets/web/web5.jpg";

const CarouselComponent = () => {
  return (
    <Carousel className="custom-carousel" indicators={false}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img4} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img5} alt="Fifth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
