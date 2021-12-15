import React from 'react';
import './ProfileOptions.scss';
import { NavLink } from 'react-router-dom';
import loginIcon from '../../assets/images/icons/user-login-icon.svg';
import registerIcon from '../../assets/images/icons/user-register-icon.svg';
import helpIcon from '../../assets/images/icons/user-help-icon.svg';

export default function ProfileOptions() {
  return (
    <aside className="aside">
      <NavLink className="aside__link" to="/login">
        <article className="aside__card">
          <h3 className="aside__card-title">Login</h3>
          <img
            className="aside__card-icon"
            alt="home electricity icon"
            src={loginIcon}
          />
        </article>
      </NavLink>
      <NavLink className="aside__link" to="/register">
        <article className="aside__card">
          <h3 className="aside__card-title">Register</h3>
          <img
            className="aside__card-icon"
            alt="home electricity icon"
            src={registerIcon}
          />
        </article>
      </NavLink>
      <NavLink className="aside__link" to="/help">
        <article className="aside__card">
          <h3 className="aside__card-title">Help</h3>{' '}
          <img
            className="aside__card-icon"
            alt="home electricity icon"
            src={helpIcon}
          />
        </article>
      </NavLink>
    </aside>
  );
}
