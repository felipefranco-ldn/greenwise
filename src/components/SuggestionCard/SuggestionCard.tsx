import React from "react";

export default function SuggestionCard({
  // @ts-ignore
  number,
  // @ts-ignore
  name,
  // @ts-ignore
  description,
  // @ts-ignore
  moneySaving,
  // @ts-ignore
  co2Saving,
  // @ts-ignore
  handleChange
}) {
  return (
    <article className="re-article">
      <input
        className="re-article__check"
        type="checkbox"
        id={name}
        name={name}
        value="true"
        onChange={handleChange}
      />
      <label className="re-article__container" htmlFor={name}>
        <div className="re-article__number-box">
          <p className="re-article__number">{number}</p>
        </div>
        <div className="re-article__main-box">
          <p className="re-article__title">{description} </p>
          <div className="re-article__details">
            <div className="re-article__savings">
              <span className="span--bold">£{moneySaving} saved </span>&nbsp;
              per year
            </div>
            <div className="re-article__reduction">
              Reduction of
              <br /> <span className="span--bold">{co2Saving}kg of CO2</span> a
              year
            </div>
          </div>
        </div>
      </label>
    </article>
  );
}
