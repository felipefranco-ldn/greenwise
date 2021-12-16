import React from 'react';
import { Link } from 'react-router-dom';
import './AboutInterface.scss';
import greenWiseLogo from '../../assets/images/images/greenwise-logo.svg';

export default function AboutInterface() {
  return (
    <div className="about__container">
      <Link className="header__logo-container" to="/">
        <img
          className="header__logo"
          alt="green-wise logo"
          src={greenWiseLogo}
        />
      </Link>

      <h1 className="about__text">Tech Stack</h1>

      <Link className="about__link" to="/">
        <p className="about__text">
          <span className="span"> {'<<'} </span> Back to home
        </p>
      </Link>
    </div>
  );
}
