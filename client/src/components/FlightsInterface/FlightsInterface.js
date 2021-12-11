import React, { Component } from 'react';
import { EXT_API_KEY, EXT_API_URL } from '../../utils/api';
import './FlightsInterface.scss';
import axios from 'axios';
import flightsMap from '../../assets/images/images/flights-map.png';

export default class FlightsInterface extends Component {
  state = {
    userFlightDuration: '',
    userFlightClass: '',
    userFlightCo2: 0,
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
        });
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
                  value="economy"
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
                  value="premiumEconomy"
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
                  value="first"
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
            <div className="fl-output__content"></div>
          ) : (
            <div className="fl-output__intro">
              <h3 className="el-output__intro-title">
                Flying often represents a
                <br />
                signifcant part of people's footprint. <br />
                Use the map below to estimate yours.
              </h3>
              <img
                className="el-output__intro-image"
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
