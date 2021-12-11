import React, { Component } from 'react';
import { EXT_API_KEY, EXT_API_URL } from '../../utils/api';
import './FlightsInterface.scss';
import axios from 'axios';
import flightsMap from '../../assets/images/images/flights-map.png';
import { Link } from 'react-router-dom';
import FlightsChart from '../FligthsChart/FligthsChart';
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

export default class FlightsInterface extends Component {
  state = {
    userFlightDuration: '',
    userFlightClass: '',
    userFlightCo2: 0,
    totalFlightCo2: 0,
  };

  handleChange = (event) => {
    if (event.target.value === 'domestic') {
      this.setState({ userFlightDuration: 'domestic' }, this.getData);
    } else if (event.target.value === 'short') {
      this.setState({ userFlightDuration: 'short' }, this.getData);
    } else if (event.target.value === 'medium') {
      this.setState({ userFlightDuration: 'medium' }, this.getData);
    } else if (event.target.value === 'long') {
      this.setState({ userFlightDuration: 'long' }, this.getData);
    } else if (event.target.value === 'extraLong') {
      this.setState({ userFlightDuration: 'extraLong' }, this.getData);
    } else if (event.target.value === 'ultraLong') {
      this.setState({ userFlightDuration: 'ultraLong' }, this.getData);
    }
  };

  handleClassChange = (event) => {
    this.setState(
      {
        userFlightClass: event.target.value,
      },
      this.getData
    );
  };

  getFlight = () => {
    switch (this.state.userFlightDuration) {
      case 'domestic':
        return {
          type: 'flight',
          passengers: 1,
          legs: [
            { departure_airport: 'lhr', destination_airport: 'txl' },
            { departure_airport: 'txl', destination_airport: 'lhr' },
          ],
        };
      case 'short':
        return {
          type: 'flight',
          passengers: 1,
          legs: [
            { departure_airport: 'lhr', destination_airport: 'kbp' },
            { departure_airport: 'kbp', destination_airport: 'lhr' },
          ],
        };
      case 'medium':
        return {
          type: 'flight',
          passengers: 1,
          legs: [
            { departure_airport: 'lhr', destination_airport: 'bos' },
            { departure_airport: 'bos', destination_airport: 'lhr' },
          ],
        };
      case 'long':
        return {
          type: 'flight',
          passengers: 1,
          legs: [
            { departure_airport: 'lhr', destination_airport: 'bkk' },
            { departure_airport: 'bkk', destination_airport: 'lhr' },
          ],
        };
      case 'extraLong':
        return {
          type: 'flight',
          passengers: 1,
          legs: [
            { departure_airport: 'lhr', destination_airport: 'per' },
            { departure_airport: 'per', destination_airport: 'lhr' },
          ],
        };
      case 'ultraLong':
        return {
          type: 'flight',
          passengers: 1,
          legs: [
            { departure_airport: 'lhr', destination_airport: 'per' },
            { departure_airport: 'per', destination_airport: 'akl' },
            { departure_airport: 'akl', destination_airport: 'per' },
            { departure_airport: 'per', destination_airport: 'lhr' },
          ],
        };
      default:
        console.log('No flights found');
    }
  };

  getCo2 = () => {
    switch (this.state.userFlightClass) {
      case 'Economy':
        this.setState({ totalFlightCo2: this.state.userFlightCo2 });
        break;
      case 'PremiumEconomy':
        this.setState({ totalFlightCo2: this.state.userFlightCo2 * 1.66 });
        break;
      case 'Business':
        this.setState({ totalFlightCo2: this.state.userFlightCo2 * 3.48 });
        break;
      case 'First':
        this.setState({ totalFlightCo2: this.state.userFlightCo2 * 5.45 });
        break;
      default:
        console.log('No flights found');
    }
  };

  chartData = () => {
    const chartData = {
      labels: [
        this.state.userFlightClass === 'Economy'
          ? 'Your flight in Economy class'
          : 'Economy Class',
        this.state.userFlightClass === 'PremiumEconomy'
          ? 'Your flight in Premium Economy'
          : 'Premium Economy',
        this.state.userFlightClass === 'Business'
          ? 'Your flight in Business class'
          : 'Business Class',
        this.state.userFlightClass === 'First'
          ? 'Your flight in First class'
          : 'First Class',
      ],

      datasets: [
        {
          label: 'Flight CO2 emissions',
          data: [
            this.state.userFlightCo2,
            this.state.userFlightCo2 * 1.66,
            this.state.userFlightCo2 * 3.48,
            this.state.userFlightCo2 * 5.45,
          ],
          backgroundColor: [
            this.state.userFlightClass === 'Economy'
              ? 'rgba(0, 100, 255, 0.6)'
              : 'rgba(0, 255, 255, 0.2)',
            this.state.userFlightClass === 'PremiumEconomy'
              ? 'rgba(0, 100, 255, 0.6)'
              : 'rgba(0, 255, 255, 0.2)',
            this.state.userFlightClass === 'Business'
              ? 'rgba(0, 100, 255, 0.6)'
              : 'rgba(0, 255, 255, 0.2)',
            this.state.userFlightClass === 'First'
              ? 'rgba(0, 100, 255, 0.6)'
              : 'rgba(0, 255, 255, 0.2)',
          ],
          borderColor: ['rgba(0,0,0,.5)'],
          borderWidth: 0.8,
        },
      ],
    };

    return chartData;
  };

  flightsChart = () => {
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
          text: 'kg of CO2 emitted by selected flight duration and class',
        },
      },
    };

    return <Bar options={chartOptions} data={this.chartData} />;
  };

  getData = () => {
    if (this.state.userFlightDuration && this.state.userFlightClass) {
      axios
        .post(`${EXT_API_URL}`, this.getFlight(), {
          headers: { Authorization: `Bearer ${EXT_API_KEY}` },
        })
        .then((response) => {
          const data = response.data;
          console.log('flights data:', data);
          const userFlCo2Data = data.data.attributes.carbon_kg;
          this.setState({ userFlightCo2: userFlCo2Data });
          // const newChartData = 1;
          this.setState({ chartData: this.chartData() });
          this.flightsChart(this.state.chartData);
          this.getCo2();
        })
        .catch((err) =>
          console.log(
            'Something went wrong while fetching the electricity consumption data: ',
            err
          )
        );
    }
  };

  render() {
    return (
      <div className="fl-container">
        {/* //! input section (left side) starts here */}
        <div className="fl-input">
          <form className="fl-input__form">
            <div className="fl-input__form-question">
              <label className="fl-input__form-label">
                <span className="span">{'>>'} </span> How long was your flight?
              </label>

              <div className="fl-input__form-duration-box">
                <input
                  className="fl-input__form-radio"
                  type="radio"
                  id="domestic"
                  name="flightDuration"
                  value="domestic"
                  onChange={this.handleChange}
                />
                <label className="fl-input__form-duration" htmlFor="domestic">
                  <h3 className="fl-input__form-label-title">
                    Domestic / Regional
                  </h3>
                  <p className="fl-input__form-label-info">
                    Up to 1:40h or 950km / 590mi
                  </p>
                  <p className="fl-input__form-label-example">
                    e.g. London - Berlin
                  </p>
                </label>

                <input
                  className="fl-input__form-radio"
                  type="radio"
                  id="short"
                  name="flightDuration"
                  value="short"
                  onChange={this.handleChange}
                />
                <label className="fl-input__form-duration" htmlFor="short">
                  <h3 className="fl-input__form-label-title">Short-haul</h3>
                  <p className="fl-input__form-label-info">
                    Up to 3:20h or 2200km / 1370mi
                  </p>
                  <p className="fl-input__form-label-example">
                    e.g. London - Kiev
                  </p>
                </label>
              </div>

              <div className="fl-input__form-duration-box">
                <input
                  className="fl-input__form-radio"
                  type="radio"
                  id="medium"
                  name="flightDuration"
                  value="medium"
                  onChange={this.handleChange}
                />
                <label className="fl-input__form-duration" htmlFor="medium">
                  <h3 className="fl-input__form-label-title">Medium-haul</h3>
                  <p className="fl-input__form-label-info">
                    Up to 6:40h or 5300km / 3300mi
                  </p>
                  <p className="fl-input__form-label-example">
                    e.g. London - Boston
                  </p>
                </label>

                <input
                  className="fl-input__form-radio"
                  type="radio"
                  id="long"
                  name="flightDuration"
                  value="long"
                  onChange={this.handleChange}
                />
                <label className="fl-input__form-duration" htmlFor="long">
                  <h3 className="fl-input__form-label-title">Long-haul</h3>
                  <p className="fl-input__form-label-info">
                    Up to 11:30h or 9600km / 5970mi
                  </p>
                  <p className="fl-input__form-label-example">
                    e.g. London - Bangkok
                  </p>
                </label>
              </div>

              <div className="fl-input__form-duration-box">
                <input
                  className="fl-input__form-radio"
                  type="radio"
                  id="extraLong"
                  name="flightDuration"
                  value="extraLong"
                  onChange={this.handleChange}
                />
                <label className="fl-input__form-duration" htmlFor="extraLong">
                  <h3 className="fl-input__form-label-title">
                    Extra-long-haul
                  </h3>
                  <p className="fl-input__form-label-info">
                    Up to 16:40h or 14500km / 9000mi
                  </p>
                  <p className="fl-input__form-label-example">
                    e.g. London - Perth
                  </p>
                </label>

                <input
                  className="fl-input__form-radio"
                  type="radio"
                  id="ultraLong"
                  name="flightDuration"
                  value="ultraLong"
                  onChange={this.handleChange}
                />
                <label className="fl-input__form-duration" htmlFor="ultraLong">
                  <h3 className="fl-input__form-label-title">Ulta-long-haul</h3>
                  <p className="fl-input__form-label-info">
                    Up to 24:00h or 18400km / 11370mi
                  </p>
                  <p className="fl-input__form-label-example">
                    e.g. London - Auckland
                  </p>
                </label>
              </div>
            </div>

            <div className="fl-input__form-question">
              <label className="fl-input__form-label">
                <span className="span">{'>>'} </span> What class did you fly in?
              </label>

              <div className="fl-input__form-class-box">
                <input
                  className="fl-input__form-radio"
                  type="radio"
                  id="economy"
                  name="flightClass"
                  value="Economy"
                  onChange={this.handleClassChange}
                />
                <label className="fl-input__form-duration" htmlFor="economy">
                  <h3 className="fl-input__form-label-title">Economy Class</h3>
                </label>

                <input
                  className="fl-input__form-radio"
                  type="radio"
                  id="premiumEconomy"
                  name="flightClass"
                  value="PremiumEconomy"
                  onChange={this.handleClassChange}
                />
                <label
                  className="fl-input__form-duration"
                  htmlFor="premiumEconomy"
                >
                  <h3 className="fl-input__form-label-title">
                    Premium Economy{' '}
                  </h3>
                </label>
              </div>

              <div className="fl-input__form-class-box">
                <input
                  className="fl-input__form-radio"
                  type="radio"
                  id="Business"
                  name="flightClass"
                  value="Business"
                  onChange={this.handleClassChange}
                />
                <label className="fl-input__form-duration" htmlFor="Business">
                  <h3 className="fl-input__form-label-title">Business Class</h3>
                </label>

                <input
                  className="fl-input__form-radio"
                  type="radio"
                  id="first"
                  name="flightClass"
                  value="First"
                  onChange={this.handleClassChange}
                />
                <label className="fl-input__form-duration" htmlFor="first">
                  <h3 className="fl-input__form-label-title">First Class</h3>
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* //! output section (right side) starts here */}
        <div className="el-output">
          {this.state.chartData ? (
            <div className="fl-output__content">
              <div className="el-output__content-title">
                Your flight in {this.state.userFlightClass} Class <br />
                compared to other classes
              </div>
              <FlightsChart chartData={this.state.chartData} />
              <div className="el-output__content-text">
                Your flight released approx.{' '}
                <span className="span--bold">
                  {' '}
                  {Number(this.state.totalFlightCo2).toFixed(0)} kilograms of
                  CO2{' '}
                </span>
                into the atmosphere. <br />
                Covering the same distance by train would have generated
                <span className="span--bold">
                  {' '}
                  {Number((this.state.userFlightCo2 / 5).toFixed(0))} kilograms
                  of CO2
                </span>{' '}
                instead.
              </div>
              <div className="el-output__content-button-box">
                <div className="el-output__content-button">
                  Save estimate in dashboard
                  <span className="span"> {'>>'} </span>
                </div>
                <Link className="el-output__link" to="/estimate/flights">
                  <div className="el-output__content-button el-output__content-button--next">
                    Go to Next Step <span className="span"> {'>>'} </span>
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
                Use the map below to estimate yours.
              </h3>
              <img
                className="fl-output__intro-image"
                alt="home electricity consumption and network"
                src={flightsMap}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
