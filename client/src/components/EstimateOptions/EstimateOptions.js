import React from 'react';
import './EstimateOptions.scss';
import { NavLink } from 'react-router-dom';
import electricityIcon from '../../assets/images/icons/electricity-icon.png';
import flightsIcon from '../../assets/images/icons/flights-icon.png';
import vehiclesIcon from '../../assets/images/icons/vehicles-icon.png';

export default function EstimateOptions() {
  return (
    <aside className="aside">
      <NavLink className="aside__link" to="/estimate/electricity">
        <article className="aside__card">
          <h3 className="aside__card-title">electricity</h3>
          <img
            className="aside__card-icon"
            alt="home electricity icon"
            src={electricityIcon}
          />
        </article>
      </NavLink>
      <NavLink className="aside__link" to="/estimate/flights">
        <article className="aside__card">
          <h3 className="aside__card-title">flights</h3>
          <img
            className="aside__card-icon"
            alt="home electricity icon"
            src={flightsIcon}
          />
        </article>
      </NavLink>
      <NavLink className="aside__link" to="/estimate/vehicles">
        <article className="aside__card">
          <h3 className="aside__card-title">vehicles</h3>{' '}
          <img
            className="aside__card-icon"
            alt="home electricity icon"
            src={vehiclesIcon}
          />
        </article>
      </NavLink>
    </aside>
  );
}
