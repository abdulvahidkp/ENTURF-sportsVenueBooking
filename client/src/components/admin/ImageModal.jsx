import React from 'react';
import './image.css'

export const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="image-modal-overlay" onClick={onClose}>
    <div className="image-modal">
      <img src={imageUrl} alt="User's profile" />
      <button onClick={onClose}>close</button>
    </div>
  </div>
  );
};
