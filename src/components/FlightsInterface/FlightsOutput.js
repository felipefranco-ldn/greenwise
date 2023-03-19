import React from "react";
import co2Logo from "../../assets/images/images/co2-logo.png";
import flightsMap from "../../assets/images/images/flights-map.png";
import { Link } from "react-router-dom";

export default function FlightsOutput({
  chartData,
  userFlightClass,
  totalFlightCo2,
  userFlightDistance,
  saveFlCo2,
  flightsChart,
}) {
  return (
    <div className="fl-output">
      {chartData ? (
        <div className="fl-output__content">
          <div className="fl-output__content-title">
            Kilograms of CO2 released by your flight in {userFlightClass} Class.
            Comparison with other classes and to an equivalent distance covered
            by train.
          </div>
          {flightsChart()}
          <div className="fl-output__content-text">
            <div className="fl-output__info-icon">i</div>
            <div className="fl-output__content-text-box">
              Your flight released approx.{" "}
              <span className="span--bold">
                {" "}
                {Number(totalFlightCo2).toFixed(0)} kg of CO2.{" "}
              </span>{" "}
              Travelling the same distance by train would have generated{" "}
              <span className="span--bold">
                {Number((userFlightDistance * 0.021).toFixed(0))} kg of CO2
              </span>{" "}
              instead.
              <span className="span--bold">Interesting fact:</span> First class
              seats can occupy up to 6 times more space than an economy class
              seat; that is the footprint of 6 people flying in economy!
            </div>
          </div>
          <div className="fl-output__content-button-box">
            <Link
              onClick={saveFlCo2}
              className="fl-output__link"
              to="/estimate/vehicles"
            >
              <div className="fl-output__content-button fl-output__content-button--next">
                Go to Next Step <span className="span"> {">>"} </span>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="fl-output__intro">
          <h3 className="fl-output__intro-title">
            Flying often represents a signifcant part of people's footprint. You
            can use the map below as a guide to estimate yours.
          </h3>
          <img
            className="fl-output__intro-image"
            alt="home electricity consumption and network"
            src={flightsMap}
          />
          <img className="fl-output__intro-logo" alt="co2 logo" src={co2Logo} />
        </div>
      )}
    </div>
  );
}
