import React from 'react';
import { Link } from 'react-router-dom';
import './AboutInterface.scss';
import greenWiseLogo from '../../assets/images/images/greenwise-logo.svg';
import techStack from '../../assets/images/images/tech-stack.png';

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

      <h1 className="about__title">Tech Stack</h1>
      <a
        href="https://green-wise.herokuapp.com"
        className="about__text"
        target="_blank"
        rel="noreferrer"
      >
        green-wise2.herokuapp.com/intro
      </a>

      <img className="about__tech-stack" alt="felipe franco" src={techStack} />

      <div className="about__bottom-box">
        <Link className="about__link" to="/">
          <p className="about__text">
            <span className="span"> {'<<'} </span> Home
          </p>
        </Link>

        <Link className="about__link" to="/intro">
          <p className="about__text">
            About Felipe <span className="span"> {'>>'} </span>
          </p>
        </Link>
      </div>
    </div>
  );
}
