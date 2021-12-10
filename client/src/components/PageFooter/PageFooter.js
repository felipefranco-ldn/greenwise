import React from 'react';
import { Link } from 'react-router-dom';
import './PageFooter.scss';
import githubIcon from '../../assets/images/icons/github-icon.png';
import linkedInIcon from '../../assets/images/icons/linkedin-icon.png';

export default function PageFooter() {
  return (
    <footer className="footer">
      <div className="footer__main-container">
        <Link className="footer__link" to="/">
          <p className="footer__text">
            <span className="footer__span">green</span>wise | 2021{' '}
          </p>
        </Link>
        <div className="footer__right-box">
          <div className="footer__text-box">
            <p className="footer__text">contact</p>
          </div>
          <div className="footer__text-box">
            <p className="footer__text">about</p>
          </div>
          <div className="footer__text-box">
            <p className="footer__text">felipe franco</p>
          </div>{' '}
          <div className="footer__text-box">
            <img
              className="footer__icon"
              alt="green-wise logo"
              src={githubIcon}
            />
          </div>
          <div className="footer__text-box">
            <img
              className="footer__icon footer__icon--light"
              alt="green-wise logo"
              src={linkedInIcon}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
