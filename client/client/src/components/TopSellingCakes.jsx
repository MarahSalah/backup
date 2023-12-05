import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GiftCard = ({ title, imageSrc, detailsLink, occasion }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const cardStyle = {
    position: 'relative',
    width: '320px',
    height: '320px',
    overflow: 'hidden',
    background: 'rgb(244, 38, 88)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '25px',
    fontWeight: 'bold',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'transform 0.5s',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    margin: '0 10px', 
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: '1',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '15px',
    display: isHovered ? 'none' : 'block',
  };

  const buttonStyle = {
    backgroundColor: '#fff',
    color: '#e74c3c',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    textDecoration: 'none',
    display: isHovered ? 'inline-block' : 'none',
    marginTop: '10px',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    display: isHovered ? 'none' : 'block',
  };

  return (
    <div
      className="card"
      style={cardStyle}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="content" style={contentStyle}>
        <div style={titleStyle}>{title}</div>
        {isHovered ? (
          <>
            <Link to={detailsLink} style={buttonStyle}>
              {occasion} Details
            </Link>
          </>
        ) : null}
      </div>
      <img
        src={imageSrc}
        alt={title}
        style={imageStyle}
      />
    </div>
  );
};

const GiftCardContainer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      <GiftCard
        title="Cakes 1"
        imageSrc="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c8faabe1de87abc38a307f886936155b.jpg?imageView2/2/w/500/q/60/format/webp"
        detailsLink="/birthday-cake"
        occasion="Birthday"
      />
      <GiftCard
        title="Cakes 2"
        imageSrc="https://cdn.shopify.com/s/files/1/0741/2259/2535/products/beautiful-anniversary-cake-8-portions-vanilla_1.jpg?v=1688705770"
        detailsLink="/wedding-cake-2"
        occasion="Wedding"
      />
      <GiftCard
        title="Cakes 3"
        imageSrc="https://i0.wp.com/sha3lelha.com/wp-content/uploads/2022/12/9482fad111936f88ce029004168f8e8e-281x281.jpg"
        detailsLink="/christmas-cake-3"
        occasion="Christmas"
      />
    </div>
  );
};

export default GiftCardContainer;
