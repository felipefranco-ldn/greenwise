import React from "react";
import co2Logo from "../../assets/images/images/co2-logo.png";
import flightsMap from "../../assets/images/images/flights-map.png";
import { Link } from "react-router-dom";

export default function FlightsOutput({
  // @ts-ignore
  chartData,
  // @ts-ignore
  userFlightClass,
  // @ts-ignore
  totalFlightCo2,
  // @ts-ignore
  userFlightDistance,
  // @ts-ignore
  saveFlCo2,
  // @ts-ignore
  flightsChart
}) {
  return (
    <div className="fl-output">
      {chartData ? (
        <div className="fl-output__content">
          <div className="fl-output__content-title">
            Kilograms of CO2 released by <br /> your flight in {userFlightClass}{" "}
            Class. <br />
            Comparison with other classes and <br /> to an equivalent distance
            covered by train.
          </div>
          {flightsChart()}
          <div className="fl-output__content-text">
            <div className="fl-output__info-icon">i</div>
            Your flight released approx.{" "}
            <span className="span--bold">
              {" "}
              {Number(totalFlightCo2).toFixed(0)} kg of CO2.{" "}
            </span>{" "}
            Travelling the same distance by train would have generated{" "}
            <span className="span--bold">
              {Number((userFlightDistance * 0.021).toFixed(0))} kg of CO2
            </span>{" "}
            instead. <br />
            <span className="span--bold">Interesting fact:</span> First class
            seats can occupy up to 6 times more space than an economy class
            seat; that is the footprint of 6 people flying in economy!
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
            Flying often represents a
            <br />
            signifcant part of people's footprint. <br />
            You can use the map below as a guide
            <br />
            to estimate yours.
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
