import React from 'react';
import './EstimateTable.scss';
import { NavLink } from 'react-router-dom';

export default function EstimateTable({ children }) {
  return (
    <section className="estimate__main-box">
      <aside className="aside">
        <article className="aside__card">
          <NavLink className="aside__link" to="/estimate/electricity">
            <h3 className="aside__card-title">electricity</h3>
          </NavLink>
        </article>
        <article className="aside__card">
          <NavLink className="aside__link" to="/estimate/flights">
            <h3 className="aside__card-title">flights</h3>
          </NavLink>
        </article>
        <article className="aside__card">
          <NavLink className="aside__link" to="/estimate/vehicles">
            <h3 className="aside__card-title">vehicles</h3>
          </NavLink>
        </article>
      </aside>
      <section className="estimate__content-box">
        <div className="estimate__content"> {children}</div>
      </section>
    </section>
  );
}
