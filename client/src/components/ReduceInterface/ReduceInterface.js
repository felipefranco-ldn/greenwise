import React from 'react';
import './ReduceInterface.scss';

export default function ReduceInterface() {
  return (
    <div className="red__container">
      <h1 className="red__title">
        Interesting tips to reduce your carbon footprint
      </h1>
      <article className="article__container">
        <div className="article__number-box">
          <p className="article__number">1</p>
          <div className="article__main-box">
            <p className="article__title">Turn down the heating by 1⁰C</p>
            <div className="article__details">
              <div className="article__savings">£42</div>
              <div className="article__reduction">8%</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
