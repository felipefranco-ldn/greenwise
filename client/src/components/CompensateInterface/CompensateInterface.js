import React from 'react';
import './CompensateInterface.scss';
import geothermalImage from '../../assets/images/images/geothermal-wayang-windu.jpg';
import reforestationlImage from '../../assets/images/images/reforestation-brazil.jpg';
import solarImage from '../../assets/images/images/solar-acme-india.jpg';
import solarCookerImage from '../../assets/images/images/solar-cooker-heqing.jpg';
import purifiersImage from '../../assets/images/images/water-purifiers-cambodia.jpg';
import windImage from '../../assets/images/images/wind-larimar-domrep.jpg';

export default function CompensateInterface() {
  return (
    <div className="comp__container">
      <h1 className="comp__title">A selection of carbon offset projects</h1>
      <section className="comp__gallery">
        <article className="article__container">
          <div className="article__image-container">
            <img
              className="article__image"
              alt="geothermal plant"
              src={geothermalImage}
            />
          </div>
          <div className="article__info-box">
            <h3 className="article__title">Wayang Windu Geothermal Power</h3>
            <p className="article__info article__info--full-length">
              <span className="span--bold"> Category:</span> Technology / Clean
              Energy production
            </p>
            <div className="article__double-info-box">
              <p className="article__info">
                <span className="span--bold"> Location:</span> Java, Indonesia
              </p>
              <p className="article__info">
                <span className="span--bold"> Standard:</span> Verified CS
              </p>
            </div>

            <p className="article__text">
              <span className="span"> {'>> '} </span> Wayang Windu is a 117MW
              geothermal power station, which is an additional power unit to an
              existing grid-connected renewable power plant. The project reduces
              greenhouse gas emissions through the displacement of fossil fuel
              electricity generation with a clean, renewable energy source.{' '}
            </p>
            <p className="article__info article__info--green article__info--full-length">
              <span className="span--bold"> Estimated Reductions: </span>{' '}
              795,000 tCO2e per year
            </p>
            <a
              className="article__info article__info--cta"
              href="https://www.carbonfootprint.com/vcs_indonesia_geothermal.html"
              target="_blank"
            >
              Support this project <span className="span"> {' >>'} </span>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
