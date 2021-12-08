import React, { Component } from 'react';
import { EXT_API_KEY, EXT_API_URL } from '../../utils/api';
import './ElectricityInterface.scss';
import axios from 'axios';
import { cloneDeep } from 'lodash';
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
      display: true,
      font: {
        family: 'Titillium Web',
        size: 16,
      },
      text: 'kg of co2 emitted by electricity usage of average home, per year',
    },
  },
};

const labels = [
  '🇺🇸 united states',
  '🇦🇺 australia',
  '🇨🇦 canada',
  '🇩🇪 germany',
  '🇬🇧 united kingdom',
  '🇷🇺 russia',
  '🇪🇸 spain',
  '🇪🇺 eu',
  '🇿🇦 south africa',
  '🇮🇹 italy',
  '🌎 world',
  '🇫🇷 france',
  '🇯🇵 japan',
  '🇧🇷 brazil',
  '🇲🇽 mexico',
  '🇨🇳 china',
  '🇮🇳 india',
  '🇳🇬 nigeria',
  '',
  '🏠 your home',
];

const chartData = {
  labels,
  datasets: [
    {
      label: 'yearly co2 emissions',
      data: [
        2918, 2176, 1544, 1056, 971, 851, 784, 732, 719, 589, 569, 348, 303,
        300, 296, 221, 147, 93, 0,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 180, 0)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(0, 255, 0)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(255, 99, 132, 0.25)',
        'rgba(0, 255, 255)',
      ],
      borderColor: ['rgba(0,0,0,.5)'],
      borderWidth: 0.6,
    },
  ],
};

export default class ElectricityChart extends Component {
  state = {
    userCountry: '',
    userElValue: 0,
    isApartment: false,
    userElCo2: 0,
  };

  // set state while the user types
  handleChange = (event) => {
    if (event.target.value === 'apartment') {
      this.setState({
        [event.target.name]: event.target.value,
        isApartment: true,
      });
    } else if (event.target.value === 'house') {
      this.setState({
        [event.target.name]: event.target.value,
        isApartment: false,
      });
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // get electricity consumption info

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
        const userElCo2 = data.data.attributes.carbon_kg;
        const newChartData = cloneDeep(chartData);

        newChartData.datasets[0].data.push(userElCo2);
        console.log('newChartData"', newChartData);
        this.setState({
          myChartData: newChartData,
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
        <div className="el-input">
          <form className="el-input__form" onSubmit={this.handleSubmit}>
            <label htmlFor="userCountry" className="el-input__form-label">
              please select your country of residence
            </label>
            <select
              name="userCountry"
              className="el-input__select"
              onChange={this.handleChange}
              value={this.userCountry}
            >
              <option value="">please select:</option>
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
              onChange={this.handleChange}
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
            />

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
              name="userElValue"
              value={this.state.isApartment ? 3100 : 4000}
              onChange={this.handleChange}
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
              name="userElValue"
              value={this.state.isApartment ? 4600 : 5500}
              onChange={this.handleChange}
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
              name="userElValue"
              value={this.state.isApartment ? 7300 : 8000}
              onChange={this.handleChange}
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
              name="userElValue"
              value={this.state.isApartment ? 9000 : 10000}
              onChange={this.handleChange}
            />

            <div className="el-input__form-button-box">
              <button className="el-input__form-button">
                show my estimate &gt;&gt;
              </button>
            </div>
          </form>
        </div>
        <div className="el-output">
          {this.state.myChartData ? (
            <Bar options={chartOptions} data={this.state.myChartData} />
          ) : (
            <div>hello</div>
          )}
        </div>
      </div>
    );
  }
}
