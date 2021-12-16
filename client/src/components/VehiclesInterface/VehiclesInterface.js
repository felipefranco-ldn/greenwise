import React, { Component } from 'react';
import './VehiclesInterface.scss';
import { EXT_API_KEY, EXT_API_URL } from '../../utils/api';
import axios from 'axios';
import { Link } from 'react-router-dom';
import cityCarIcon from '../../assets/images/icons/city-car.png';
import compactCarIcon from '../../assets/images/icons/compact.png';
import fullSizeCarIcon from '../../assets/images/icons/full-size.png';
import minivanIcon from '../../assets/images/icons/minivan.png';
import cuvIcon from '../../assets/images/icons/cuv.png';
import suvIcon from '../../assets/images/icons/suv.png';
import pickupIcon from '../../assets/images/icons/pickup.png';
import otherIcon from '../../assets/images/icons/other.png';
import fuelIcon from '../../assets/images/icons/fuel.png';
import hybridIcon from '../../assets/images/icons/hybrid.png';
import electricIcon from '../../assets/images/icons/electric.png';
import fuelIconsLanding from '../../assets/images/icons/fuel-icons-landing.png';
import co2Logo from '../../assets/images/images/co2-logo.svg';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default class VehiclesInterface extends Component {
  state = {
    userDistance: 0,
    userDistanceUnits: '',
    userVehicleSize: '',
    userVehiclePower: '',
    userVehicleCo2: 0,
    totalVehicleCo2: 0,
  };

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      this.getData
    );
  };

  handleSizeChange = (event) => {
    if (event.target.value === 'micro') {
      this.setState({ userVehicleSize: 'micro' }, this.getData);
    } else if (event.target.value === 'compact') {
      this.setState({ userVehicleSize: 'compact' }, this.getData);
    } else if (event.target.value === 'fullsize') {
      this.setState({ userVehicleSize: 'fullsize' }, this.getData);
    } else if (event.target.value === 'minivan') {
      this.setState({ userVehicleSize: 'minivan' }, this.getData);
    } else if (event.target.value === 'cuv') {
      this.setState({ userVehicleSize: 'cuv' }, this.getData);
    } else if (event.target.value === 'suv') {
      this.setState({ userVehicleSize: 'suv' }, this.getData);
    } else if (event.target.value === 'pickup') {
      this.setState({ userVehicleSize: 'pickup' }, this.getData);
    } else if (event.target.value === 'other') {
      this.setState({ userVehicleSize: 'other' }, this.getData);
    }
  };

  getVehicleCo2 = () => {
    switch (this.state.userVehicleSize) {
      case 'micro':
        return {
          type: 'vehicle',
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: 'ef495746-c349-48e6-835b-80240b1e2dbd',
        };
      case 'compact':
        return {
          type: 'vehicle',
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: '2ae1d26c-3fdf-4004-84e2-09eafd2b1e4f',
        };
      case 'fullsize':
        return {
          type: 'vehicle',
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: '00c24c0c-ac9f-4f4f-a8ea-aa9e1be2fb72',
        };
      case 'minivan':
        return {
          type: 'vehicle',
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: '46c7c58b-e68d-4ef2-bf19-6c4306b47259',
        };
      case 'cuv':
        return {
          type: 'vehicle',
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: '1628cb32-6446-4ace-8714-a99012d851e5',
        };
      case 'suv':
        return {
          type: 'vehicle',
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: '12971be3-2daa-42c2-a245-a78fe06a647e',
        };
      case 'pickup':
        return {
          type: 'vehicle',
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: 'b88810e0-b625-4949-b5de-8f838b396020',
        };
      case 'other':
        return {
          type: 'vehicle',
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: '25d80cfb-027f-4be4-8d64-2d2a3a488edc',
        };
      default:
        console.log('No vehicles found');
    }
  };

  getCo2 = () => {
    switch (this.state.userVehiclePower) {
      case 'petrol':
        this.setState({ totalVehicleCo2: this.state.userVehicleCo2 });
        break;
      case 'hybrid':
        this.setState({ totalVehicleCo2: this.state.userVehicleCo2 * 0.6 });
        break;
      case 'electric':
        this.setState({ totalVehicleCo2: this.state.userVehicleCo2 * 0.35 });
        break;
      default:
        console.log('No vehicles found');
    }
  };

  chartData = () => {
    const chartData = {
      labels: [
        this.state.userVehiclePower === 'petrol'
          ? '⛽ Your ride on a petrol vehicle'
          : '⛽ Petrol or diesel vehicle',
        this.state.userVehiclePower === 'hybrid'
          ? '⛽⚡ Your ride on a hybrid vehicle'
          : '⛽⚡ Hybrid vehicle',
        this.state.userVehiclePower === 'electric'
          ? '⚡ Your ride on an electric vehicle'
          : '⚡ Electric vehicle',
        '🚆 Equivalent trip on train',
      ],

      datasets: [
        {
          label: 'Vehicle CO2 emissions (kg)',
          data: [
            this.state.userVehicleCo2,
            this.state.userVehicleCo2 * 0.6,
            this.state.userVehicleCo2 * 0.35,
            this.state.userDistanceUnits === 'km'
              ? this.state.userDistance * 0.041
              : this.state.userDistance * 0.066,
          ],
          backgroundColor: [
            this.state.userVehiclePower === 'petrol'
              ? 'rgba(0, 100, 255, 0.6)'
              : 'rgba(0, 255, 255, 0.2)',
            this.state.userVehiclePower === 'hybrid'
              ? 'rgba(0, 100, 255, 0.6)'
              : 'rgba(0, 255, 255, 0.2)',
            this.state.userVehiclePower === 'electric'
              ? 'rgba(0, 100, 255, 0.6)'
              : 'rgba(0, 255, 255, 0.2)',
            'rgba(0, 255, 0, 0.6)',
          ],
          borderColor: ['rgba(0,0,0,.5)'],
          borderWidth: 0.8,
        },
      ],
    };

    return chartData;
  };

  vehiclesChart = () => {
    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'top',
          labels: {
            font: {
              family: 'Titillium Web',
            },
          },
        },
        title: {
          display: false,
          font: {
            family: 'Titillium Web',
            size: 16,
          },
          text: 'kg of CO2 emitted by vehicles depending on their power source',
        },
      },
    };

    console.log('chart data here:', this.state.chartData);
    return <Bar options={chartOptions} data={this.state.chartData} />;
  };

  getData = () => {
    if (
      this.state.userDistance &&
      this.state.userDistanceUnits &&
      this.state.userVehicleSize &&
      this.state.userVehiclePower
    ) {
      axios
        .post(`${EXT_API_URL}`, this.getVehicleCo2(), {
          headers: { Authorization: `Bearer ${EXT_API_KEY}` },
        })
        .then((response) => {
          const data = response.data;
          console.log('vehicles data:', data);
          const userVeCo2Data = data.data.attributes.carbon_kg;
          this.setState({ userVehicleCo2: userVeCo2Data });
          this.setState({ chartData: this.chartData() });
          this.vehiclesChart(this.state.chartData);
          this.getCo2();
        })
        .catch((err) =>
          console.log(
            'Something went wrong while fetching the vehicles CO2 emissions data: ',
            err
          )
        );
    }
  };

  saveVeCo2 = () => {
    sessionStorage.setItem('userVeCo2', this.state.userVehicleCo2);
  };

  render() {
    return (
      <div className="ve-container">
        {/* //! input section (left side) starts here */}
        <div className="ve-input">
          <form className="ve-input__form">
            <div className="ve-input__form-question">
              <label className="ve-input__form-label">
                <span className="span">{'>>'} </span> How long have you driven?
              </label>

              <div className="ve-input__form-distance-box">
                <input
                  type="text"
                  name="userDistance"
                  className="ve-input__form-input"
                  placeholder="Enter distance"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <select
                  name="userDistanceUnits"
                  className="ve-input__form-select"
                  onChange={this.handleChange}
                >
                  <option value="">Units</option>
                  <option value="km">Kilometres</option>
                  <option value="mi">Miles</option>
                </select>
              </div>
            </div>

            <div className="ve-input__break"></div>

            <div className="ve-input__form-question">
              <label className="ve-input__form-label">
                <span className="span">{'>>'} </span> Select type of vehicle
              </label>
              <div className="ve-input__form-type-box">
                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="micro"
                  name="carSize"
                  value="micro"
                  onChange={this.handleSizeChange}
                />
                <label className="ve-input__form-size" htmlFor="micro">
                  <h3 className="ve-input__form-label-title">
                    City car <br />
                  </h3>
                  <div className="ve-input__form-image-box">
                    <img
                      className="ve-input__form-car-image"
                      alt="micro car example"
                      src={cityCarIcon}
                    />
                  </div>
                </label>

                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="compact"
                  name="carSize"
                  value="compact"
                  onChange={this.handleSizeChange}
                />
                <label className="ve-input__form-size" htmlFor="compact">
                  <h3 className="ve-input__form-label-title">
                    Compact <br />
                  </h3>
                  <div className="ve-input__form-image-box">
                    <img
                      className="ve-input__form-car-image"
                      alt="compact car example"
                      src={compactCarIcon}
                    />
                  </div>
                </label>
              </div>

              <div className="ve-input__form-type-box">
                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="fullsize"
                  name="carSize"
                  value="fullsize"
                  onChange={this.handleSizeChange}
                />
                <label className="ve-input__form-size" htmlFor="fullsize">
                  <h3 className="ve-input__form-label-title">
                    Full-size <br />
                  </h3>
                  <div className="ve-input__form-image-box">
                    <img
                      className="ve-input__form-car-image"
                      alt="full-size car example"
                      src={fullSizeCarIcon}
                    />
                  </div>
                </label>

                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="minivan"
                  name="carSize"
                  value="minivan"
                  onChange={this.handleSizeChange}
                />
                <label className="ve-input__form-size" htmlFor="minivan">
                  <h3 className="ve-input__form-label-title">
                    Minivan <br />
                  </h3>
                  <div className="ve-input__form-image-box">
                    <img
                      className="ve-input__form-car-image"
                      alt="minivan example"
                      src={minivanIcon}
                    />
                  </div>
                </label>
              </div>

              <div className="ve-input__form-type-box">
                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="cuv"
                  name="carSize"
                  value="cuv"
                  onChange={this.handleSizeChange}
                />
                <label className="ve-input__form-size" htmlFor="cuv">
                  <h3 className="ve-input__form-label-title">
                    CUV <br />
                  </h3>
                  <div className="ve-input__form-image-box">
                    <img
                      className="ve-input__form-car-image"
                      alt="CUV example"
                      src={cuvIcon}
                    />
                  </div>
                </label>

                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="suv"
                  name="carSize"
                  value="suv"
                  onChange={this.handleSizeChange}
                />
                <label className="ve-input__form-size" htmlFor="suv">
                  <h3 className="ve-input__form-label-title">
                    SUV <br />
                  </h3>
                  <div className="ve-input__form-image-box">
                    <img
                      className="ve-input__form-car-image"
                      alt="SUV example"
                      src={suvIcon}
                    />
                  </div>
                </label>
              </div>

              <div className="ve-input__form-type-box">
                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="pickup"
                  name="carSize"
                  value="pickup"
                  onChange={this.handleSizeChange}
                />
                <label className="ve-input__form-size" htmlFor="pickup">
                  <h3 className="ve-input__form-label-title">
                    Pick-up <br />
                  </h3>
                  <div className="ve-input__form-image-box">
                    <img
                      className="ve-input__form-car-image"
                      alt="pick-up example"
                      src={pickupIcon}
                    />
                  </div>
                </label>

                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="other"
                  name="carSize"
                  value="other"
                  onChange={this.handleSizeChange}
                />
                <label className="ve-input__form-size" htmlFor="other">
                  <h3 className="ve-input__form-label-title">Other large</h3>
                  <div className="ve-input__form-image-box">
                    <img
                      className="ve-input__form-car-image"
                      alt="other car example"
                      src={otherIcon}
                    />
                  </div>
                </label>
              </div>
            </div>

            <div className="ve-input__break"></div>

            <div className="ve-input__form-question">
              <label className="ve-input__form-label">
                <span className="span">{'>>'} </span> Select fuel / power source
              </label>

              <div className="ve-input__form-power-box">
                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="petrol"
                  name="userVehiclePower"
                  value="petrol"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-power" htmlFor="petrol">
                  <h3 className="ve-input__form-label-title">Fuel</h3>
                  <img
                    className="ve-input__form-power-icon"
                    alt="petrol car icon"
                    src={fuelIcon}
                  />
                </label>

                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="hybrid"
                  name="userVehiclePower"
                  value="hybrid"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-power" htmlFor="hybrid">
                  <h3 className="ve-input__form-label-title">Hybrid</h3>
                  <img
                    className="ve-input__form-power-icon"
                    alt="hybrid car icon"
                    src={hybridIcon}
                  />
                </label>

                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="electric"
                  name="userVehiclePower"
                  value="electric"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-power" htmlFor="electric">
                  <h3 className="ve-input__form-label-title">Electric</h3>
                  <img
                    className="ve-input__form-power-icon"
                    alt="electric car icon"
                    src={electricIcon}
                  />
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* //! output section (right side) starts here */}
        <div className="ve-output">
          {this.state.chartData ? (
            <div className="ve-output__content">
              <div className="ve-output__content-title">
                Kilograms of CO2 emitted by your vehicle.
                <br />
                Comparison with other types of vehicle and power sources,
                <br />
                and to the same distance travelled on train.
              </div>
              {this.vehiclesChart()}
              <div className="ve-output__content-text">
                <div className="ve-output__info-icon">i</div>
                Your vehicle released approx.{' '}
                <span className="span--bold">
                  {' '}
                  {Number(this.state.totalVehicleCo2).toFixed(0)} kilograms of
                  CO2{' '}
                </span>{' '}
                into the atmosphere. Covering the same distance by train would
                have generated{' '}
                <span className="span--bold">
                  {' '}
                  {Number(
                    (this.state.userDistanceUnits === 'km'
                      ? this.state.userDistance * 0.041
                      : this.state.userDistance * 0.066
                    ).toFixed(0)
                  )}{' '}
                  kilograms of CO2
                </span>{' '}
                instead.
              </div>
              <div className="ve-output__content-button-box">
                {/* <div className="ve-output__content-button">
                  Save estimate in dashboard
                  <span className="span"> {'>>'} </span>
                </div> */}
                <Link
                  onClick={this.saveVeCo2}
                  className="ve-output__link"
                  to="/reduce"
                >
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
              <img
                className="ve-output__intro-logo"
                alt="co2 logo"
                src={co2Logo}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
