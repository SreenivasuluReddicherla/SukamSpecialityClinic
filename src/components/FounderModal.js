import React from 'react';

const FounderModal = ({ image, name, title, content, quote, closeModal, modalRef }) => {
  const isManoj = name.includes('Manoj');

  return (
    <div className="modal" ref={modalRef}>
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>&times;</span>

        <div className={`modal-flex ${isManoj ? 'image-left' : 'image-right'}`}>
          <img src={image} className="modal-image-lg" alt={name} />

          <div className="modal-text">
            <h3>{name}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
            <em>{quote}</em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderModal;
