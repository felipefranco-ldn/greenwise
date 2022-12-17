import React from "react";
import { Link } from "react-router-dom";
import ElectricityChart from "../ElectricityChart/ElectricityChart";
import ligthBulb from "../../assets/images/images/light-bulb.jpg";
import co2Logo from "../../assets/images/images/co2-logo.png";

export default function ElectricityOutput({
  // @ts-ignore
  userElValue,
  // @ts-ignore
  userElCo2,
  // @ts-ignore
  saveElCo2,
  // @ts-ignore
  chartData
}) {
  return (
    <div className="el-output">
      {chartData ? (
        <div className="el-output__content">
          <div className="el-output__content-title">
            Your Home vs. average home in selected countries:
            <br />
            Kilograms of CO2 emitted by annual electricity usage.
          </div>
          <ElectricityChart chartData={chartData} />
          <div className="el-output__content-text">
            <div className="el-output__info-icon">i</div>
            Your home consumes approx.{" "}
            <span className="span--bold"> {userElValue} kwh per year </span>
            ,
            <br />
            which releases{" "}
            <span className="span--bold">
              {" "}
              {userElCo2} kilograms of CO2{" "}
            </span>{" "}
            into the atmosphere. <br />
            This is{" "}
            <span className="span--bold">
              {" "}
              {Number((userElCo2 / 569).toFixed(2))} times{" "}
            </span>{" "}
            the consumption of an average home
            <br /> in the planet.
          </div>
          <div className="el-output__content-button-box">
            <Link
              onClick={saveElCo2}
              className="el-output__link"
              to="/estimate/flights"
            >
              <div className="el-output__content-button el-output__content-button--next">
                Go to Next Step <span className="span"> {">>"} </span>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="el-output__intro">
          <h3 className="el-output__intro-title">
            Knowing your home's <br />
            environmental footprint is a great idea! <br />
            Let's find out!
          </h3>
          <img
            className="el-output__intro-image"
            alt="green bulb"
            src={ligthBulb}
          />
          <img className="el-output__intro-logo" alt="co2 logo" src={co2Logo} />
        </div>
      )}
    </div>
  );
}
