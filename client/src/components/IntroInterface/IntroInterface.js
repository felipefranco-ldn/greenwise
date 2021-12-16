import React from 'react';
import { Link } from 'react-router-dom';
import './IntroInterface.scss';
import greenWiseLogo from '../../assets/images/images/greenwise-logo.svg';
import profilePicture from '../../assets/images/images/felipe-profile-pic.jpg';

export default function IntroInterface() {
  return (
    <div className="about__container">
      <Link className="header__logo-container" to="/">
        <img
          className="header__logo"
          alt="green-wise logo"
          src={greenWiseLogo}
        />
      </Link>

      <h1 className="about__title">Felipe Franco</h1>

      <img className="about__image" alt="felipe franco" src={profilePicture} />

      <p className="about__text">
        Product Designer, Architect
        <br />
        and Web Developer!
      </p>

      <a
        href="https://www.linkedin.com/in/felipefranco-ldn/"
        className="about__text"
        target="_blank"
        rel="noreferrer"
      >
        www.linkedin.com/in/felipefranco-ldn/
      </a>

      <a
        href="https://github.com/felipefranco-ldn"
        className="about__text"
        target="_blank"
        rel="noreferrer"
      >
        github.com/felipefranco-ldn
      </a>

      <a
        className="about__text"
        rel="noreferrer"
        href="mailto:felipefranco8610@gmail.com"
        target="_blank"
      >
        felipefranco8610@gmail.com
      </a>

      <div className="about__bottom-box">
        <Link className="about__link" to="/">
          <p className="about__text">
            <span className="span"> {'<<'} </span> Home
          </p>
        </Link>

        <Link className="about__link" to="/about">
          <p className="about__text">
            About GreenWise <span className="span"> {'>>'} </span>
          </p>
        </Link>
      </div>
    </div>
  );
}
