import React, { Component } from 'react';
import { EXT_API_KEY, EXT_API_URL } from '../../utils/api';
// import errorIcon from '../../assets/images/icons/error-24px.svg';
import './ElectricityChart.scss';
import axios from 'axios';
axios.defaults.baseURL = `${EXT_API_URL}`;
axios.defaults.headers.common = { Authorization: `Bearer ${EXT_API_KEY}` };
// export default axios;

export default class ElectricityChart extends Component {
  state = {
    userHomeType: '',
    userNumberOfBedrooms: '',
    userCountry: '',
  };

  // set state while the user types
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleDisable = () => {
    const status = document.querySelector('input[name="status"]:checked').value;
    if (status === 'In Stock') {
      document.querySelector('.quantity').disabled = false;
    } else {
      document.querySelector('.quantity').disabled = true;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //  kwh per month
    //        flat    house
    // 1bed   200     300
    // 2bed   300     400
    // 3bed   380     500
    // 4bed   450     600

    // Object example
    //   {
    //     "type": "electricity",
    //     "country": "hu",
    //     "electricity_unit": "kwh",
    //     "electricity_value": 100.0
    // }

    // get electricity consumption info
    axios
      .post(
        { EXT_API_URL },

        {
          type: 'electricity',
          country: this.userCountry,
          electricity_unit: 'kwh',
          electricity_value: 200,
        }
      )

      .then((response) => {
        const data = response.data;
      })

      .catch((err) =>
        console.log(
          'Something went wrong while fetching the electricity consumption data: ',
          err
        )
      );
  };

  render() {
    return (
      <div className="el-container">
        <div className="el-input">
          <form className="el-input__form" onSubmit={this.handleSubmit}>
            <label htmlFor="userCountry" className="el-input__form-label">
              please select your country of residence
            </label>
            <select
              name="userCountry"
              className="el-input__select"
              placeholder="Please select"
              onChange={this.handleChange}
              value={this.userCountry}
            >
              <option selected="true" value="" className="default" disabled>
                please select
              </option>
              <option value="gb">united kingdom</option>
              <option value="us">united states of america</option>
              <option value="ca">canada</option>
              <option value="at">austria</option>
              <option value="be">belgium</option>
              <option value="bg">bulgaria</option>
              <option value="hr">croatia</option>
              <option value="cy">cyprus</option>
              <option value="cz">czechia</option>
              <option value="dk">denmark</option>
              <option value="ee">estonia</option>
              <option value="fi">finland</option>
              <option value="fr">france</option>
              <option value="de">germany</option>
              <option value="gr">greece</option>
              <option value="hu">hungary</option>
              <option value="ie">ireland</option>
              <option value="it">italy</option>
              <option value="lv">latvia</option>
              <option value="lt">lithuania</option>
              <option value="lu">luxembourg</option>
              <option value="mt">malta</option>
              <option value="nl">netherlands</option>
              <option value="pl">poland</option>
              <option value="po">portugal</option>
              <option value="ro">romania</option>
              <option value="sk">slovakia</option>
              <option value="si">slovenia</option>
              <option value="es">spain</option>
              <option value="se">sweden</option>
            </select>

            <label className="el-input__form-label">
              select your type of home
            </label>

            <label className="el-input__form-home-type" htmlFor="userHomeType">
              apartment
            </label>
            <input
              className="el-input__form-radio"
              type="radio"
              id="apartment"
              name="userHomeType"
              value="apartment"
              // checked="checked"
              onChange={this.handleChange}
              // onClick={this.handleDisable}
            />

            <label className="el-input__form-home-type" htmlFor="userHomeType">
              house
            </label>
            <input
              className="el-input__form-radio"
              type="radio"
              id="house"
              name="userHomeType"
              value="house"
              onChange={this.handleChange}
              // onClick={this.handleDisable}
            />

            {/* <div className="edit__form-error-container status-check">
            <img
              className="edit__form-error-icon"
              src={errorIcon}
              alt="error icon"
            />
            <p className="edit__form-error-text">This field is required</p>
          </div> */}

            <label className="el-input__form-label">
              how many bedrooms are there in your home?
            </label>

            <label
              className="el-input__form-bedrooms"
              htmlFor="userNumberOfBedrooms"
            >
              1 bedroom
            </label>
            <input
              className="el-input__form-radio"
              type="radio"
              id="1bedroom"
              name="userNumberOfBedrooms"
              value="1"
              onChange={this.handleChange}
              // onClick={this.handleDisable}
            />

            <label
              className="el-input__form-bedrooms"
              htmlFor="userNumberOfBedrooms"
            >
              2 bedrooms
            </label>
            <input
              className="el-input__form-radio"
              type="radio"
              id="2bedrooms"
              name="userNumberOfBedrooms"
              value="2"
              onChange={this.handleChange}
              // onClick={this.handleDisable}
            />

            <label
              className="el-input__form-bedrooms"
              htmlFor="userNumberOfBedrooms"
            >
              3 bedrooms
            </label>
            <input
              className="el-input__form-radio"
              type="radio"
              id="3bedrooms"
              name="userNumberOfBedrooms"
              value="3"
              onChange={this.handleChange}
              // onClick={this.handleDisable}
            />

            <label
              className="el-input__form-bedrooms"
              htmlFor="userNumberOfBedrooms"
            >
              4 or more bedrooms
            </label>
            <input
              className="el-input__form-radio"
              type="radio"
              id="4bedrooms"
              name="userNumberOfBedrooms"
              value="4"
              onChange={this.handleChange}
              // onClick={this.handleDisable}
            />

            <div className="el-input__form-button-box">
              <button className="el-input__form-button">
                show my estimate &gt;&gt;
              </button>
            </div>
          </form>
        </div>
        <div className="el-output"></div>
      </div>
    );
  }
}
