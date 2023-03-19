import React, { Component } from "react";
import { EXT_API_KEY, EXT_API_URL } from "../../utils/api";
import "./ElectricityInterface.scss";
import axios from "axios";
import { cloneDeep } from "lodash";
import { chartData } from "../ElectricityChart/chartData";
import { apartment, house } from "./elValues";
import apartmentIcon from "../../assets/images/icons/building-icon.png";
import houseIcon from "../../assets/images/icons/house-icon.png";
import ElectricityInput from "./ElectricityInput";
import ElectricityOutput from "./ElectricityOutput";
import scrollToTop from "../../utils/helpers/scrollToTop";

export default class ElectricityInterface extends Component {
  state = {
    userCountry: "",
    userElValue: 0,
    userElCo2: 0,
    bedroomNumber: 0,
    chartData: 0,
  };

  handleCountryChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      this.getData
    );
  };

  handleChange = (event) => {
    if (event.target.value === "apartment") {
      this.setState(
        {
          isApartment: true,
        },
        this.getData
      );
    } else if (event.target.value === "house") {
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
      scrollToTop();
      axios
        .post(
          `${EXT_API_URL}`,
          {
            type: "electricity",
            country: this.state.userCountry,
            electricity_unit: "kwh",
            electricity_value: this.getUserElValue(),
          },
          {
            headers: { Authorization: `Bearer ${EXT_API_KEY}` },
          }
        )
        .then((response) => {
          const data = response.data;
          const userElCo2Data = data.data.attributes.carbon_kg;
          this.setState({ userElCo2: userElCo2Data });
          const newChartData = cloneDeep(chartData);
          newChartData.datasets[0].data.unshift(userElCo2Data);
          this.setState({
            chartData: newChartData,
          });
        })
        .catch((err) =>
          console.log(
            "Something went wrong while fetching the electricity consumption data: ",
            err
          )
        );
    }
  };

  saveElCo2 = () => {
    sessionStorage.setItem("userElCo2", this.state.userElCo2);
  };

  render() {
    return (
      <div className="el-container">
        {/* //! input section (left side) starts here */}

        <ElectricityInput
          apartmentIcon={apartmentIcon}
          houseIcon={houseIcon}
          userCountry={this.userCountry}
          handleCountryChange={this.handleCountryChange}
          handleChange={this.handleChange}
          handleBedroomsChange={this.handleBedroomsChange}
        />

        {/* //! output section (right side) starts here */}

        <ElectricityOutput
          userElValue={this.state.userElValue}
          userElCo2={this.state.userElCo2}
          chartData={this.state.chartData}
          saveElCo2={this.saveElCo2}
        />
      </div>
    );
  }
}
