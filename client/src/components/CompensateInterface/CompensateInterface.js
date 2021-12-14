import React from 'react';
import './CompensateInterface.scss';
import geothermalImage from '../../assets/images/images/geothermal-wayang-windu.jpg';
import reforestationlImage from '../../assets/images/images/reforestation-brazil.jpg';
import solarImage from '../../assets/images/images/solar-acme-india.jpg';
import solarCookerImage from '../../assets/images/images/solar-cooker-heqing.jpg';
import purifiersImage from '../../assets/images/images/water-purifiers-cambodia.jpg';
import windImage from '../../assets/images/images/wind-larimar-domrep.jpg';
import offsetIcon from '../../assets/images/icons/offset-icon.png';

export default function CompensateInterface() {
  return (
    <>
      <div className="comp__container">
        <section className="comp__gallery">
          <h1 className="comp__title">
            A selection of Carbon Offseting Projects
          </h1>
          <p className="comp__text">
            As you have seen so far, our everyday actions consume energy and
            produce a huge amount of carbon emissions. A Carbon offset is a way
            to compensate for your emissions by funding an equivalent C02 saving
            elsewhere.
            <br /> <br />
            Many carbon offsetting projects also provide additional benefits
            such as biodiversity increase, education, jobs, food security, clean
            drinking water and well-being to local communities.
            <br /> <br />
            You can choose to support any of the projects below, and many more,
            in order to balance out your carbon footrpint. These comply with
            Certified Emission Reductions (CERs), Gold Standard CERs, Gold
            Standard Verified Emission Reductions (VERs) or Verified Carbon
            Standard (VCS) certified credits, so you can be confident that
            they're effective and have a real impact!
            <br /> <br />
            Happy browsing! 🌎 🌳
          </p>
          <article className="article__container">
            <div className="article__image-container">
              <img
                className="article__image"
                alt="solar farm in india"
                src={solarImage}
              />
            </div>
            <div className="article__info-box">
              <h3 className="article__title">Solar Farm by ACME Group</h3>
              <p className="article__info article__info--full-length">
                <span className="span--bold"> Category:</span> Technology /
                Clean Energy production
              </p>
              <div className="article__double-info-box">
                <p className="article__info">
                  <span className="span--bold"> Location:</span> India
                </p>
                <p className="article__info">
                  <span className="span--bold"> Standard:</span> Verified CS
                </p>
              </div>
              <p className="article__text">
                <span className="span"> {'>> '} </span> The project activity
                generates electricity using solar energy. The generated
                electricity is exported to the regional electricty grid system
                in India. It seeks to enable investment in large and small grid
                connected plants that export their generated output to the
                regional / national electricity grid in India.
              </p>
              <p className="article__info article__info--green article__info--full-length">
                <span className="span--bold"> Estimated Reductions: </span>{' '}
                730,500 tCO2e per year
              </p>
              <a
                className="article__info article__info--cta"
                href="https://www.carbonfootprint.com/vcs_india_solar_acme.html"
                target="_blank"
                rel="noreferrer"
              >
                Support this project <span className="span"> {' >>'} </span>
              </a>
            </div>
          </article>

          <article className="article__container">
            <div className="article__image-container">
              <img
                className="article__image"
                alt="air shot of wind farm in dominican republic"
                src={windImage}
              />
            </div>
            <div className="article__info-box">
              <h3 className="article__title">Larimar Wind Farm</h3>
              <p className="article__info article__info--full-length">
                <span className="span--bold"> Category:</span> Technology /
                Clean Energy production
              </p>
              <div className="article__double-info-box">
                <p className="article__info">
                  <span className="span--bold"> Location:</span> Dominican Rep.
                </p>
                <p className="article__info">
                  <span className="span--bold"> Standard:</span> Verified CS
                </p>
              </div>
              <p className="article__text">
                <span className="span"> {'>> '} </span> The project involves the
                construction and operation of two wind farms located in
                Enriquillo Region of the Dominican Republic. “Larimar I” has 15
                wind turbines with a total installed capacity of 49.5 MW; and
                “Larimar II” has 14 wind turbines with a total installed
                capacity of 48.3 MW. The total installed capacity of the wind
                farm is 97.8 MW.
              </p>
              <p className="article__info article__info--green article__info--full-length">
                <span className="span--bold"> Estimated Reductions: </span>{' '}
                246,800 tCO2e per year
              </p>
              <a
                className="article__info article__info--cta"
                href="https://www.carbonfootprint.com/dominican_republic_wind_1644.html"
                target="_blank"
                rel="noreferrer"
              >
                Support this project <span className="span"> {' >>'} </span>
              </a>
            </div>
          </article>

          <article className="article__container">
            <div className="article__image-container">
              <img
                className="article__image"
                alt="family with ceramic water purifier"
                src={purifiersImage}
              />
            </div>
            <div className="article__info-box">
              <h3 className="article__title">
                Distributing Ceramic Water Purifiers{' '}
              </h3>
              <p className="article__info article__info--full-length">
                <span className="span--bold"> Category:</span> Tech / Clean
                water / Local communities
              </p>
              <div className="article__double-info-box">
                <p className="article__info">
                  <span className="span--bold"> Location:</span> Cambodia
                </p>
                <p className="article__info">
                  <span className="span--bold"> Standard:</span> Gold Std. VER
                </p>
              </div>
              <p className="article__text">
                <span className="span"> {'>> '} </span> In Cambodia, nearly two
                million rural households do not have access to safe, potable
                water. While boiling water helps reduce exposure to water-borne
                diseases, the indoor air pollution created by wood fires causes
                serious respiratory and heart problems.
                <br />A Cambodian social enterprise, has set out to change this
                with its locally made ceramic water purifiers. With a filter in
                their homes, families no longer need to boil their water to make
                it safe. This reduces indoor air pollution and protects
                vulnerable forests.
              </p>
              <p className="article__info article__info--green article__info--full-length">
                <span className="span--bold"> Estimated Reductions: </span>{' '}
                20,550 tCO2e per year
              </p>
              <a
                className="article__info article__info--cta"
                href="https://www.carbonfootprint.com/cambodia_water_filter.html"
                target="_blank"
                rel="noreferrer"
              >
                Support this project <span className="span"> {' >>'} </span>
              </a>
            </div>
          </article>
        </section>

        <section className="comp__gallery">
          <img
            className="comp__icon"
            alt="carbon offset icon"
            src={offsetIcon}
          />
          <div className="comp__break"></div>

          <article className="article__container">
            <div className="article__image-container">
              <img
                className="article__image"
                alt="geothermal plant in indonesia"
                src={geothermalImage}
              />
            </div>
            <div className="article__info-box">
              <h3 className="article__title">Wayang Windu Geothermal Power</h3>
              <p className="article__info article__info--full-length">
                <span className="span--bold"> Category:</span> Technology /
                Clean Energy production
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
                geothermal power station, which is an additional power unit to
                an existing grid-connected renewable power plant. The project
                reduces greenhouse gas emissions through the displacement of
                fossil fuel electricity generation with a clean, renewable
                energy source.{' '}
              </p>
              <p className="article__info article__info--green article__info--full-length">
                <span className="span--bold"> Estimated Reductions: </span>{' '}
                795,000 tCO2e per year
              </p>
              <a
                className="article__info article__info--cta"
                href="https://www.carbonfootprint.com/vcs_indonesia_geothermal.html"
                target="_blank"
                rel="noreferrer"
              >
                Support this project <span className="span"> {' >>'} </span>
              </a>
            </div>
          </article>

          <article className="article__container">
            <div className="article__image-container">
              <img
                className="article__image"
                alt="reforestation in brazil's rainforest"
                src={reforestationlImage}
              />
            </div>
            <div className="article__info-box">
              <h3 className="article__title">
                Portel-Pará Reforestation Project
              </h3>
              <p className="article__info article__info--full-length">
                <span className="span--bold"> Category:</span> Social
                responsibility / Reforestation
              </p>
              <div className="article__double-info-box">
                <p className="article__info">
                  <span className="span--bold"> Location:</span> Brazil
                </p>
                <p className="article__info">
                  <span className="span--bold"> Standard:</span> VCS +CCBS
                </p>
              </div>

              <p className="article__text">
                <span className="span"> {'>> '} </span> Portel-Pará REDD (Reduce
                Deforestation) project is working to prevent unplanned
                deforestation in native forests, which has occurred due to
                logging, squatting and attempts to implement pastures. The
                project is expected to avoid over 22 million tonnes of carbon
                dioxide equivalent greenhouse gas emissions over a 40 year
                period. This will be achieved by managing the land in the form
                of a "private conservation reserve", through rigorous monitoring
                and enforcement.
              </p>
              <p className="article__info article__info--green article__info--full-length">
                <span className="span--bold"> Estimated Reductions: </span>{' '}
                553,250 tCO2e per year
              </p>
              <a
                className="article__info article__info--cta"
                href="https://www.carbonfootprint.com/brazil_para_redd.html"
                target="_blank"
                rel="noreferrer"
              >
                Support this project <span className="span"> {' >>'} </span>
              </a>
            </div>
          </article>

          <article className="article__container">
            <div className="article__image-container">
              <img
                className="article__image"
                alt="heqing solar cooker"
                src={solarCookerImage}
              />
            </div>
            <div className="article__info-box">
              <h3 className="article__title">Heqing Solar Cooker Project </h3>
              <p className="article__info article__info--full-length">
                <span className="span--bold"> Category:</span> Household solar
                power / Local communities
              </p>
              <div className="article__double-info-box">
                <p className="article__info">
                  <span className="span--bold"> Location:</span> Gansu, China
                </p>
                <p className="article__info">
                  <span className="span--bold"> Standard:</span> Verified CS
                </p>
              </div>

              <p className="article__text">
                <span className="span"> {'>> '} </span> Coal is overwhelmingly
                the main energy source for rural residents in this region of
                China. The proposed project will enable the rural residents to
                efficiently substitute solar energy for coal used in daily
                cooking and water boiling, avoiding CO2 emission that would be
                generated by fossil fuel consumption. The project has installed
                49,000 solar cookers for the rural residents.
              </p>
              <p className="article__info article__info--green article__info--full-length">
                <span className="span--bold"> Estimated Reductions: </span>{' '}
                143,750 tCO2e per year
              </p>
              <a
                className="article__info article__info--cta"
                href="https://www.carbonfootprint.com/vcs_china_solar_cooker.html"
                target="_blank"
                rel="noreferrer"
              >
                Support this project <span className="span"> {' >>'} </span>
              </a>
            </div>
          </article>
        </section>
      </div>

      <h1 className="re-title re-title--bottom">
        For more information on Carbon Offsetting Projects <br />
        and how you can support them, please visit the links below:{' '}
      </h1>

      <div className="re-content__button-box re-content__button-box--bottom re-content__button-box--compensate ">
        <a
          className="re-content__link re-content__link--half-width"
          href="https://sustainabletravel.org/our-work/carbon-offsets/calculate-footprint/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="re-content__button re-content__button--half-length">
            Sustainable Travel International - Offset your flights
            <span className="span"> {'>>'} </span>
          </div>
        </a>

        <a
          className="re-content__link re-content__link--half-width"
          href="https://eco-act.com/carbon-offsetting-projects/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="re-content__button ">
            EcoAct - Carbon Offsetting Projects{' '}
            <span className="span"> {'>>'} </span>
          </div>
        </a>

        <a
          className="re-content__link re-content__link--half-width"
          href="https://www.wren.co/projects"
          target="_blank"
          rel="noreferrer"
        >
          <div className="re-content__button re-content__button--half-length">
            Wren - Planet-saving, life-changing projects
            <span className="span"> {'>>'} </span>
          </div>
        </a>

        <a
          className="re-content__link re-content__link--half-width"
          href="https://ecologi.com/projects"
          target="_blank"
          rel="noreferrer"
        >
          <div className="re-content__button ">
            Ecologi - Carbon offsetting monthly subscription
            <span className="span"> {'>>'} </span>
          </div>
        </a>
      </div>
    </>
  );
}
