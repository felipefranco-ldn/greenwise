import React from 'react';
import './PageHeader.scss';
import { Link, NavLink } from 'react-router-dom';
import greenWiseLogo from '../../assets/images/images/greenwise-logo.svg';

export default function PageHeader() {
  return (
    <header className="header">
      <div className="header__main-container">
        <Link className="header__logo-container" to="/">
          <img
            className="header__logo"
            alt="inStock logo"
            src={greenWiseLogo}
          />
        </Link>
        <div className="header__buttons-container">
          <NavLink className="header__link" to="/estimate">
            <h3 className="header__button-text ">&lt; 1. estimate &gt;</h3>
          </NavLink>
          <div className="header__button-spacer"></div>
          <NavLink className="header__link" to="/reduce">
            <h3 className="header__button-text">&lt; 2. reduce &gt;</h3>
          </NavLink>
          <div className="header__button-spacer"></div>
          <NavLink className="header__link" to="/offset">
            <h3 className="header__button-text">&lt; 3. offset &gt;</h3>
          </NavLink>
          <div className="header__button-spacer"></div>
          <NavLink className="header__link" to="/my-account">
            <h3 className="header__button-text">&lt; my account &gt;</h3>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
