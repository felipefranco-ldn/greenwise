import React from 'react';
import { NavLink } from 'react-router-dom';

export default function OptionsTab({ linkTo, cardTitle, imgAlt, imgSrc }) {
  return (
    <NavLink className="aside__link" to={linkTo}>
      <article className="aside__card">
        <h3 className="aside__card-title">{cardTitle}</h3>
        <img className="aside__card-icon" alt={imgAlt} src={imgSrc} />
      </article>
    </NavLink>
  );
}
