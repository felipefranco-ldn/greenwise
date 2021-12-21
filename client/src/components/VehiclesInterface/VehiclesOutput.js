import React from 'react';
import { Link } from 'react-router-dom';
import fuelIconsLanding from '../../assets/images/icons/fuel-icons-landing.png';
import co2Logo from '../../assets/images/images/co2-logo.svg';

export default function VehiclesOutput({
  chartData,
  vehiclesChart,
  saveVeCo2,
  totalVehicleCo2,
  userDistance,
  userDistanceUnits,
}) {
  return (
    <div className="ve-output">
      {chartData ? (
        <div className="ve-output__content">
          <div className="ve-output__content-title">
            Kilograms of CO2 emitted by your vehicle.
            <br />
            Comparison with other types of vehicle and power sources,
            <br />
            and to the same distance travelled on train.
          </div>
          {vehiclesChart()}
          <div className="ve-output__content-text">
            <div className="ve-output__info-icon">i</div>
            Your vehicle released approx.{' '}
            <span className="span--bold">
              {' '}
              {Number(totalVehicleCo2).toFixed(0)} kilograms of CO2{' '}
            </span>{' '}
            into the atmosphere. Covering the same distance by train would have
            generated{' '}
            <span className="span--bold">
              {' '}
              {Number(
                (userDistanceUnits === 'km'
                  ? userDistance * 0.041
                  : userDistance * 0.066
                ).toFixed(0)
              )}{' '}
              kilograms of CO2
            </span>{' '}
            instead.
          </div>
          <div className="ve-output__content-button-box">
            <Link onClick={saveVeCo2} className="ve-output__link" to="/reduce">
              <div className="ve-output__content-button ve-output__content-button--next">
                Go to Next Step <span className="span"> {'>>'} </span>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="ve-output__intro">
          <h3 className="ve-output__intro-title">
            We know Hybrid and Electric vehicles
            <br />
            are better for the environment <br />
            than those which run on fossil fuels... <br />
            but by how much?
          </h3>
          <img
            className="ve-output__intro-image"
            alt="home electricity consumption and network"
            src={fuelIconsLanding}
          />
          <img className="ve-output__intro-logo" alt="co2 logo" src={co2Logo} />
        </div>
      )}
    </div>
  );
}
