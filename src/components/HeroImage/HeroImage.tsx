import React from "react";
import "./HeroImage.scss";
import estimateIcon from "../../assets/images/icons/estimate-icon.png";
import reduceIcon from "../../assets/images/icons/reduce-icon.png";
import compensateIcon from "../../assets/images/icons/compensate-icon.png";
import arrowIcon from "../../assets/images/icons/arrow-icon.png";

import { NavLink } from "react-router-dom";

export default function HeroImage() {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__top-box">
          <h1 className="hero__title">Planet Earth is in crisis!</h1>{" "}
          <h1 className="hero__subtitle">
            Taking care of the environment is one of the most urgent challenges
            that humanity faces nowadays. <br />
            We are here to help! <span className="span--bold">
              GreenWise
            </span>{" "}
            provides an easy-to-use tool to visualise your carbon footprint.{" "}
            <br />
            You will be able to make informed decisions to reduce your CO2
            emissions in three simple steps.
          </h1>
        </div>
        <div className="hero__middle-box">
          <NavLink className="hero__steps" to="/estimate">
            <div className="hero__icon-container">
              <img
                className="hero__icon hero__icon--1"
                alt="estimate icon "
                src={estimateIcon}
              />
            </div>
            <p className="hero__icon-label">Estimate</p>
          </NavLink>

          <div className="hero__arrows">
            <img
              className="hero__arrow-icon"
              alt="arrow icon"
              src={arrowIcon}
            />
          </div>

          <NavLink className="hero__steps" to="/reduce">
            <div className="hero__icon-container">
              <img
                className="hero__icon hero__icon--2"
                alt="estimate icon "
                src={reduceIcon}
              />
            </div>
            <p className="hero__icon-label">Reduce</p>
          </NavLink>

          <div className="hero__arrows">
            <img
              className="hero__arrow-icon"
              alt="arrow icon"
              src={arrowIcon}
            />{" "}
          </div>
          <NavLink className="hero__steps" to="/compensate">
            <div className="hero__icon-container">
              <img
                className="hero__icon hero__icon--3"
                alt="estimate icon "
                src={compensateIcon}
              />
            </div>
            <p className="hero__icon-label">Compensate</p>
          </NavLink>
        </div>
        <div className="hero__bottom-box">
          <NavLink className="hero__button-box" to="/estimate">
            <div className="hero__button">
              <p className="hero__button-text">
                I am ready! Let's take action now{" "}
                <span className="span"> {">>"} </span>
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
