import React from 'react';
import './HeroImage.scss';
import heroImage from '../../assets/images/images/hero.png';

export default function HeroImage() {
  return (
    <div className="hero-container">
      <img className="hero-image" alt="inStock logo" src={heroImage} />
    </div>
  );
}
