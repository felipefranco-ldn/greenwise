import React from "react";
import "./CompensateInterface.scss";
import offsetIcon from "../../assets/images/icons/offset-icon.png";
import projectsData from "../../data/offsetting-projects.json";
import OffsettingProjectCard from "../OffsettingProjectCard/OffsettingProjectCard";

export default function CompensateInterface() {
  return (
    <>
      <div className="comp__container">
        <section className="comp__gallery">
          <h1 className="comp__title">
            <span className="span">{">>"}</span> A selection of outstanding
            <br />
            Carbon Offseting Projects
          </h1>
          <p className="comp__text">
            As you have seen so far, our everyday actions consume energy and
            produce a huge amount of carbon emissions. A Carbon offset is a way
            to compensate for your emissions by funding an equivalent C02 saving
            elsewhere.
            <br /> <br />
            Many carbon offsetting projects also provide additional benefits
            such as biodiversity increase, education, jobs, food security, clean
            drinking water and wellbeing to local communities.
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
          {projectsData.slice(0, projectsData.length / 2).map(project => (
            <OffsettingProjectCard
              key={project.title}
              title={project.title}
              img={project.img}
              imgAlt={project.imgAlt}
              category={project.category}
              location={project.location}
              standard={project.standard}
              description={project.description}
              reductions={project.reductions}
              website={project.website}
            />
          ))}
        </section>

        <section className="comp__gallery">
          <img
            className="comp__icon"
            alt="carbon offset icon"
            src={offsetIcon}
          />

          {projectsData
            .slice(projectsData.length / 2, projectsData.length + 1)
            .map(project => (
              <OffsettingProjectCard
                key={project.title}
                title={project.title}
                img={project.img}
                imgAlt={project.imgAlt}
                category={project.category}
                location={project.location}
                standard={project.standard}
                description={project.description}
                reductions={project.reductions}
                website={project.website}
              />
            ))}
        </section>
      </div>

      <div className="re-container">
        <h1 className="re-title re-title--bottom">
          <span className="span">{">>"}</span> More Carbon Offsetting Projects
          <br />
          and how you can support them:
        </h1>
        <a
          className="re-content__link re-content__link--half-width"
          href="https://sustainabletravel.org/our-work/carbon-offsets/calculate-footprint/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="re-content__button re-content__button--half-length">
            Sustainable Travel International - <br />
            Offset your flights
            <span className="span"> {">>"} </span>
          </div>
        </a>

        <a
          className="re-content__link re-content__link--half-width"
          href="https://eco-act.com/carbon-offsetting-projects/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="re-content__button ">
            EcoAct - <br />
            Carbon Offsetting Projects <span className="span"> {">>"} </span>
          </div>
        </a>

        <a
          className="re-content__link re-content__link--half-width"
          href="https://www.wren.co/projects"
          target="_blank"
          rel="noreferrer"
        >
          <div className="re-content__button re-content__button--half-length">
            Wren - <br />
            Planet-saving, life-changing projects
            <span className="span"> {">>"} </span>
          </div>
        </a>

        <a
          className="re-content__link re-content__link--half-width"
          href="https://ecologi.com/projects"
          target="_blank"
          rel="noreferrer"
        >
          <div className="re-content__button ">
            Ecologi - <br />
            Carbon offsetting monthly subscription
            <span className="span"> {">>"} </span>
          </div>
        </a>
      </div>
    </>
  );
}
