import React, { Component } from 'react';
import { EXT_API_KEY, EXT_API_URL } from '../../utils/api';
import './ElectricityInterface.scss';
import axios from 'axios';
import ElectricityChart from '../ElectricityChart/ElectricityChart';
import { cloneDeep } from 'lodash';
import { chartData } from '../ElectricityChart/chartData';
import ligthBulb from '../../assets/images/images/light-bulb.jpg';
import { apartment, house } from './elValues';
import { Link } from 'react-router-dom';

export default class ElectricityInterface extends Component {
  state = {
    userCountry: '',
    userElValue: 0,
    userElCo2: 0,
    bedroomNumber: 0,
  };

  handleCountryChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      this.getData
    );
  };

  // set state while the user types
  handleChange = (event) => {
    if (event.target.value === 'apartment') {
      this.setState(
        {
          isApartment: true,
        },
        this.getData
      );
    } else if (event.target.value === 'house') {
      this.setState(
        {
          isApartment: false,
        },
        this.getData
      );
    }
  };

  handleBedroomsChange = (event) => {
    this.setState(
      {
        bedroomNumber: event.target.value,
      },
      this.getData
    );
  };

  getUserElValue = () => {
    let userElValue = this.state.isApartment
      ? apartment[this.state.bedroomNumber - 1]
      : house[this.state.bedroomNumber - 1];
    this.setState({ userElValue: userElValue });
    return userElValue;
  };

  getData = () => {
    if (this.state.userCountry && this.state.bedroomNumber) {
      // get electricity consumption info

      // console.log('sent', this.state.userCountry, this.state.userElValue);
      axios
        .post(
          `${EXT_API_URL}`,
          {
            type: 'electricity',
            country: this.state.userCountry,
            electricity_unit: 'kwh',
            electricity_value: this.getUserElValue(),
          },
          {
            headers: { Authorization: `Bearer ${EXT_API_KEY}` },
          }
        )
        .then((response) => {
          const data = response.data;
          console.log(data);
          const userElCo2Data = data.data.attributes.carbon_kg;
          this.setState({ userElCo2: userElCo2Data });
          const newChartData = cloneDeep(chartData);
          newChartData.datasets[0].data.unshift(userElCo2Data);
          console.log('newChartData"', newChartData);
          this.setState({
            chartData: newChartData,
          });
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
    console.log(this.state.isApartment);
    return (
      <div className="el-container">
        {/* //! input section (left side) starts here */}

        <div className="el-input">
          <form className="el-input__form" onSubmit={this.handleSubmit}>
            <div className="el-input__form-question">
              <label htmlFor="userCountry" className="el-input__form-label">
                <span className="span">&gt;&gt; </span> First, please select
                your country of residence
              </label>
              <select
                name="userCountry"
                className="el-input__form-select"
                onChange={this.handleCountryChange}
                value={this.userCountry}
              >
                <option value="">Where is your home?</option>
                <option value="gb">🇬🇧 United Kingdom</option>
                <option value="us">🇺🇸 United States of America</option>
                <option value="ca">🇨🇦 Canada</option>
                <option value="at">🇦🇹 Austria</option>
                <option value="be">🇧🇪 Belgium</option>
                <option value="bg">🇧🇬 Bulgaria</option>
                <option value="hr">🇭🇷 Croatia</option>
                <option value="cy">🇨🇾 Cyprus</option>
                <option value="cz">🇨🇿 Czechia</option>
                <option value="dk">🇩🇰 Denmark</option>
                <option value="ee">🇪🇪 Estonia</option>
                <option value="fi">🇫🇮 Finland</option>
                <option value="fr">🇫🇷 France</option>
                <option value="de">🇩🇪 Germany</option>
                <option value="gr">🇬🇷 Greece</option>
                <option value="hu">🇭🇺 Hungary</option>
                <option value="ie">🇮🇪 Ireland</option>
                <option value="it">🇮🇹 Italy</option>
                <option value="lv">🇱🇻 Latvia</option>
                <option value="lt">🇱🇹 Lithuania</option>
                <option value="lu">🇱🇺 Luxembourg</option>
                <option value="mt">🇲🇹 Malta</option>
                <option value="nl">🇳🇱 Netherlands</option>
                <option value="pl">🇵🇱 Poland</option>
                <option value="po">🇵🇹 Portugal</option>
                <option value="ro">🇷🇴 Romania</option>
                <option value="sk">🇷🇸 Slovakia</option>
                <option value="si">🇸🇰 Slovenia</option>
                <option value="es">🇪🇸 Spain</option>
                <option value="se">🇸🇪 Sweden</option>
              </select>
            </div>

            <div className="el-input__form-question">
              <label className="el-input__form-label">
                <span className="span">&gt;&gt; </span> Now select your type of
                home
              </label>

              <div className="el-input__form-home-box">
                <input
                  className="el-input__form-radio"
                  type="radio"
                  id="apartment"
                  name="userHomeType"
                  value="apartment"
                  onChange={this.handleChange}
                />
                <label className="el-input__form-home-type" htmlFor="apartment">
                  Apartment
                </label>

                <input
                  className="el-input__form-radio"
                  type="radio"
                  id="house"
                  name="userHomeType"
                  value="house"
                  onChange={this.handleChange}
                />
                <label className="el-input__form-home-type" htmlFor="house">
                  House
                </label>
              </div>
            </div>

            <div className="el-input__form-question">
              <label className="el-input__form-label">
                <span className="span">&gt;&gt; </span>And finally, how many
                bedrooms are there in your home?
              </label>

              <div className="el-input__form-bedrooms-box">
                <input
                  className="el-input__form-radio"
                  type="radio"
                  id="1bedroom"
                  name="userElValue"
                  value="1"
                  onChange={this.handleBedroomsChange}
                />
                <label className="el-input__form-bedrooms" htmlFor="1bedroom">
                  1 bedroom
                </label>

                <input
                  className="el-input__form-radio"
                  type="radio"
                  id="2bedrooms"
                  name="userElValue"
                  value="2"
                  onChange={this.handleBedroomsChange}
                />
                <label className="el-input__form-bedrooms" htmlFor="2bedrooms">
                  2 bedrooms
                </label>
              </div>

              <div className="el-input__form-bedrooms-box">
                <input
                  className="el-input__form-radio"
                  type="radio"
                  id="3bedrooms"
                  name="userElValue"
                  value="3"
                  onChange={this.handleBedroomsChange}
                />
                <label className="el-input__form-bedrooms" htmlFor="3bedrooms">
                  3 bedrooms
                </label>

                <input
                  className="el-input__form-radio"
                  type="radio"
                  id="4bedrooms"
                  name="userElValue"
                  value="4"
                  onChange={this.handleBedroomsChange}
                />
                <label className="el-input__form-bedrooms" htmlFor="4bedrooms">
                  4 bedrooms +
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* //! output section (right side) starts here */}
        <div className="el-output">
          {this.state.chartData ? (
            <div className="el-output__content">
              <div className="el-output__content-title">
                Your Home vs. average home in selected countries:
                <br />
                Kilograms of CO2 emitted by annual electricity usage
              </div>
              <ElectricityChart chartData={this.state.chartData} />
              <div className="el-output__content-text">
                Your home consumes approx.{' '}
                <span className="span--bold">
                  {' '}
                  {this.state.userElValue} kwh per year{' '}
                </span>
                ,
                <br />
                which releases{' '}
                <span className="span--bold">
                  {' '}
                  {this.state.userElCo2} kilograms of CO2{' '}
                </span>
                into the atmosphere. <br />
                This is{' '}
                <span className="span--bold">
                  {' '}
                  {Number((this.state.userElCo2 / 569).toFixed(2))} times{' '}
                </span>{' '}
                the consumption of an average home in the planet.
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
            <div className="el-output__intro">
              <h3 className="el-output__intro-title">
                Knowing your home's <br />
                environmental footprint is a great idea! <br />
                Let's find out!
              </h3>
              <img
                className="el-output__intro-image"
                alt="home electricity consumption and network"
                src={ligthBulb}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
