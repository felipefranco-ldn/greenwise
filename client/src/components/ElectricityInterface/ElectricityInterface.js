import React, { Component } from 'react';
import { EXT_API_KEY, EXT_API_URL } from '../../utils/api';
import './ElectricityInterface.scss';
import axios from 'axios';
import ElectricityChart from '../ElectricityChart/ElectricityChart';
import { cloneDeep } from 'lodash';
import { chartData } from '../ElectricityChart/chartData';
import electricityImage from '../../assets/images/images/electricity-image.png';

export default class ElectricityInterface extends Component {
  state = {
    userCountry: '',
    userElValue: 0,
    isApartment: false,
    userElCo2: 0,
  };

  // set state while the user types
  handleChange = (event) => {
    if (event.target.value === 'apartment') {
      console.log('apartment', event.target.value);
      this.setState({
        isApartment: true,
      });
    } else if (event.target.value === 'house') {
      console.log('house', event.target.value);
      this.setState({
        isApartment: false,
      });
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleBedroomsChange = (event) => {
    this.setState({
      userElValue: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // get electricity consumption info

    console.log('sent', this.state.userCountry, this.state.userElValue);
    axios
      .post(
        `${EXT_API_URL}`,
        {
          type: 'electricity',
          country: this.state.userCountry,
          electricity_unit: 'kwh',
          electricity_value: this.state.userElValue,
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
          // userCountry: '',
          // userElValue: 0,
          // isApartment: false,
          // userElCo2: 0,
        });
      })
      .catch((err) =>
        console.log(
          'Something went wrong while fetching the electricity consumption data: ',
          err
        )
      );
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
                <span className="span">&gt;&gt; </span> first, please select
                your country of residence
              </label>
              <select
                name="userCountry"
                className="el-input__form-select"
                onChange={this.handleChange}
                value={this.userCountry}
              >
                <option value="">where is your home?</option>
                <option value="gb">🇬🇧 united kingdom</option>
                <option value="us">🇺🇸 united states of america</option>
                <option value="ca">🇨🇦 canada</option>
                <option value="at">🇦🇹 austria</option>
                <option value="be">🇧🇪 belgium</option>
                <option value="bg">🇧🇬 bulgaria</option>
                <option value="hr">🇭🇷 croatia</option>
                <option value="cy">🇨🇾 cyprus</option>
                <option value="cz">🇨🇿 czechia</option>
                <option value="dk">🇩🇰 denmark</option>
                <option value="ee">🇪🇪 estonia</option>
                <option value="fi">🇫🇮 finland</option>
                <option value="fr">🇫🇷 france</option>
                <option value="de">🇩🇪 germany</option>
                <option value="gr">🇬🇷 greece</option>
                <option value="hu">🇭🇺 hungary</option>
                <option value="ie">🇮🇪 ireland</option>
                <option value="it">🇮🇹 italy</option>
                <option value="lv">🇱🇻 latvia</option>
                <option value="lt">🇱🇹 lithuania</option>
                <option value="lu">🇱🇺 luxembourg</option>
                <option value="mt">🇲🇹 malta</option>
                <option value="nl">🇳🇱 netherlands</option>
                <option value="pl">🇵🇱 poland</option>
                <option value="po">🇵🇹 portugal</option>
                <option value="ro">🇷🇴 romania</option>
                <option value="sk">🇷🇸 slovakia</option>
                <option value="si">🇸🇰 slovenia</option>
                <option value="es">🇪🇸 spain</option>
                <option value="se">🇸🇪 sweden</option>
              </select>
            </div>

            <div className="el-input__form-question">
              <label className="el-input__form-label">
                <span className="span">&gt;&gt; </span> now select your type of
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
                  apartment
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
                  house
                </label>
              </div>
            </div>

            <div className="el-input__form-question">
              <label className="el-input__form-label">
                <span className="span">&gt;&gt; </span> and finally, how many
                bedrooms are there in your home?
              </label>

              <div className="el-input__form-bedrooms-box">
                <input
                  className="el-input__form-radio"
                  type="radio"
                  id="1bedroom"
                  name="userElValue"
                  // value={Math.random() * 1000}
                  value={this.state.isApartment ? 3100 : 3900}
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
                  value={this.state.isApartment ? 4650 : 5800}
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
                  value={this.state.isApartment ? 7450 : 9300}
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
                  value={this.state.isApartment ? 9100 : 11300}
                  onChange={this.handleBedroomsChange}
                />
                <label className="el-input__form-bedrooms" htmlFor="4bedrooms">
                  4 bedrooms +
                </label>
              </div>
            </div>

            <div className="el-input__form-button-box">
              <button className="el-input__form-button">
                show my estimate <span className="span">&gt;&gt; </span>
              </button>
            </div>
          </form>
        </div>

        {/* //! output section (right side) starts here */}
        <div className="el-output">
          {this.state.chartData ? (
            <div className="el-output__content">
              <div className="el-output__content-title">
                average home in selected countries vs. your home:
                <br />
                kilograms of co2 emitted by annual electricity usage
              </div>
              <ElectricityChart chartData={this.state.chartData} />
              <div className="el-output__content-text">
                your homes consumes approx.{' '}
                <span className="span--bold">
                  {' '}
                  {this.state.userElValue} kwh per year{' '}
                </span>
                ,
                <br />
                which releases into the atmosphere{' '}
                <span className="span--bold">
                  {' '}
                  {this.state.userElCo2} kilograms of co2{' '}
                </span>
                . <br />
                this is{' '}
                <span className="span--bold">
                  {' '}
                  {Number((this.state.userElCo2 / 569).toFixed(2))} times{' '}
                </span>{' '}
                the consumption of an average home in the planet.
              </div>
              <div className="el-output__content-button-box">
                <button className="el-output__content-button">
                  save this estimate in my dashboard
                  <span className="span"> &gt;&gt; </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="el-output__intro">
              <h3 className="el-output__intro-title">
                would you like to know your home's co2 footprint? <br />
                let's find out!
              </h3>
              <img
                className="el-output__intro-image"
                alt="home electricity consumption and network"
                src={electricityImage}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
