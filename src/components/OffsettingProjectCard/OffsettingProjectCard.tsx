import React from "react";

export default function OffsettingProjectCard({
  // @ts-ignore
  title,
  // @ts-ignore
  img,
  // @ts-ignore
  imgAlt,
  // @ts-ignore
  category,
  // @ts-ignore
  location,
  // @ts-ignore
  standard,
  // @ts-ignore
  description,
  // @ts-ignore
  reductions,
  // @ts-ignore
  website
}) {
  return (
    <article className="article__container">
      <div className="article__image-container">
        <img className="article__image" alt={imgAlt} src={`${img}`} />
      </div>
      <div className="article__info-box">
        <h3 className="article__title">
          <span className="span">{">>"}</span> {title}
        </h3>
        <p className="article__info article__info--full-length">
          <span className="span--bold"> Category:</span> {category}
        </p>
        <div className="article__double-info-box">
          <p className="article__info">
            <span className="span--bold"> Location:</span> {location}
          </p>
          <p className="article__info">
            <span className="span--bold"> Standard:</span> {standard}
          </p>
        </div>
        <p className="article__text">
          <span className="span"> {">> "} </span> {description}
        </p>
        <p className="article__info article__info--green article__info--full-length">
          <span className="span--bold"> Estimated Reductions: </span>{" "}
          {reductions}
        </p>
        <a
          className="article__info article__info--cta"
          href={website}
          target="_blank"
          rel="noreferrer"
        >
          Support this project <span className="span"> {" >>"} </span>
        </a>
      </div>
    </article>
  );
}
