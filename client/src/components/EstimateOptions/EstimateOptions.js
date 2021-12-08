import React from 'react';
import './EstimateOptions.scss';
import { NavLink } from 'react-router-dom';

export default function EstimateTable() {
  return (
    <aside className="aside">
      <NavLink className="aside__link" to="/estimate/electricity">
        <article className="aside__card">
          <h3 className="aside__card-title">electricity</h3>
        </article>
      </NavLink>
      <NavLink className="aside__link" to="/estimate/flights">
        <article className="aside__card">
          <h3 className="aside__card-title">flights</h3>
        </article>
      </NavLink>
      <NavLink className="aside__link" to="/estimate/vehicles">
        <article className="aside__card">
          <h3 className="aside__card-title">vehicles</h3>
        </article>
      </NavLink>
    </aside>
  );
}
