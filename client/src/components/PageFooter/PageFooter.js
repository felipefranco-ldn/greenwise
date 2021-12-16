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
            <span className="span--bold">GreenWise</span> | 2021
          </p>
        </Link>
        <div className="footer__right-box">
          <div className="footer__text-box">
            <a
              className="footer__anchor"
              rel="noreferrer"
              href="mailto:felipefranco8610@gmail.com"
              target="_blank"
            >
              <p className="footer__text">Contact</p>
            </a>
          </div>
          <Link className="footer__link" to="/about">
            <div className="footer__text-box">
              <p className="footer__text">About</p>
            </div>{' '}
          </Link>

          <div className="footer__text-box">
            <p className="footer__text">by Felipe Franco</p>
          </div>
          <div className="footer__text-box">
            <a
              href="https://github.com/felipefranco-ldn"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="footer__icon"
                alt="green-wise logo"
                src={githubIcon}
              />
            </a>
          </div>
          <div className="footer__text-box">
            <a
              href="https://www.linkedin.com/in/felipefranco-ldn/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="footer__icon footer__icon--light"
                alt="green-wise logo"
                src={linkedInIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
