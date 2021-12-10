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
        <span className="span--dark">first things first:</span>
        <br /> in order to start your journey, <br />
        you need to know how big your environmental footrpint is! <br />
        greenwise will help you estimate it in three fronts:
      </div>
      <div className="landing__middle-box">
        <Link className="landing__image-container" to="/estimate/electricity">
          <p className="landing__subtitle">
            co2 emissions produced by your home electricity consumption{' '}
          </p>
          <img
            className="landing__image"
            alt="electricity image"
            src={electricityImage}
          />
        </Link>
        <Link className="landing__image-container" to="/estimate/flights">
          <p className="landing__subtitle">
            co2 emissions released into the atmosphere when you travel by plane
          </p>
          <img
            className="landing__image"
            alt="electricity image"
            src={flightsImage}
          />
        </Link>
        <Link className="landing__image-container" to="/estimate/vehicles">
          <p className="landing__subtitle">
            co2 emissions generated when you travel by car
          </p>
          <img
            className="landing__image"
            alt="electricity image"
            src={vehiclesImage}
          />
        </Link>
      </div>
      <Link className="landing__button" to="/estimate/electricity">
        let's get started <span className="span"> &gt;&gt; </span>{' '}
      </Link>
    </div>
  );
}
