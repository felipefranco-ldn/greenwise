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
            <a
              className="footer__anchor"
              href="mailto:felipefranco8610@gmail.com"
              target="_blank"
            >
              <p className="footer__text">contact</p>
            </a>
          </div>
          <div className="footer__text-box">
            <p className="footer__text">about</p>
          </div>
          <div className="footer__text-box">
            <p className="footer__text">felipe franco</p>
          </div>
          <div className="footer__text-box">
            <a href="https://github.com/felipefranco-ldn" target="_blank">
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
