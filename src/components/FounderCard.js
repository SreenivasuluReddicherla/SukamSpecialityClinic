import React from 'react';

const FounderCard = ({ name, title, image, onClick }) => {
  return (
    <div className="founder-card" data-aos="zoom-in">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
      <button className="read-more-btn" onClick={onClick}>
        Read More
      </button>
    </div>
  );
};

export default FounderCard;
