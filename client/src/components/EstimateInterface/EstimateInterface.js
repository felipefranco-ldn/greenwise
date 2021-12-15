import React from 'react';
import './EstimateInterface.scss';
import electricityImage from '../../assets/images/images/electricity-image.png';
import flightsImage from '../../assets/images/images/flights-image.png';
import vehiclesImage from '../../assets/images/images/vehicles-image.png';
import { Link } from 'react-router-dom';

export default function EstimateInterface() {
  return (
    <div className="landing">
      <div className="landing__title">
        <span className="span--dark">
          <span className="span">{'>>'}</span> First things first:
        </span>
        <br /> in order to start your journey, <br />
        you need to know how big your environmental footprint is! <br />
        greenwise will help you estimate it in three fronts:
      </div>
      <div className="landing__middle-box">
        <Link className="landing__image-container" to="/estimate/electricity">
          <p className="landing__subtitle">
            CO2 emissions produced by your home electricity consumption{' '}
          </p>
          <img
            className="landing__image"
            alt="electricity"
            src={electricityImage}
          />
        </Link>
        <Link className="landing__image-container" to="/estimate/flights">
          <p className="landing__subtitle">
            CO2 emissions released into the atmosphere when you travel by plane
          </p>
          <img className="landing__image" alt="flights " src={flightsImage} />
        </Link>
        <Link className="landing__image-container" to="/estimate/vehicles">
          <p className="landing__subtitle">
            CO2 emissions generated when you travel by car
          </p>
          <img className="landing__image" alt="vehicles " src={vehiclesImage} />
        </Link>
      </div>
      <Link className="landing__button" to="/estimate/electricity">
        Let's get started <span className="span"> &gt;&gt; </span>{' '}
      </Link>
    </div>
  );
}
