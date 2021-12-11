import React from 'react';
import './HeroImage.scss';
import estimateIcon from '../../assets/images/icons/estimate-icon.png';
import reduceIcon from '../../assets/images/icons/reduce-icon.png';
import compensateIcon from '../../assets/images/icons/compensate-icon.png';

export default function HeroImage() {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__top-box">
          <h1 className="hero__title">Planet Earth is in crisis!</h1>{' '}
          <h1 className="hero__subtitle">
            And taking care of the environment is one of the most urgent
            challenges that humanity faces nowadays. <br />
            We are here to help! <span className="span--bold">
              GreenWise
            </span>{' '}
            provides an easy-to-use tool to visualise your carbon footprint.{' '}
            <br />
            You will be able to make informed decisions to reduce your co2
            emissions in three simple steps:
          </h1>
        </div>
        <div className="hero__bottom-box">
          <div className="hero__icon-container">
            <p className="hero__icon-title">Estimate</p>
            <img
              className="hero__icon"
              alt="estimate icon "
              src={estimateIcon}
            />
          </div>
          <div className="hero__icon-container">
            <p className="hero__icon-title">Reduce</p>
            <img className="hero__icon" alt="estimate icon " src={reduceIcon} />
          </div>
          <div className="hero__icon-container">
            <p className="hero__icon-title">Compensate</p>
            <img
              className="hero__icon"
              alt="estimate icon "
              src={estimateIcon}
            />
          </div>
        </div>
      </div>
      {/* <img className="hero-image" alt="inStock logo" src={heroImage} /> */}
    </div>
  );
}
