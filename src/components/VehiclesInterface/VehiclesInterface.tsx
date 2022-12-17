import React, { Component } from "react";
import "./VehiclesInterface.scss";
import { EXT_API_KEY, EXT_API_URL } from "../../utils/api";
import axios from "axios";
import VehiclesInput from "./VehiclesInput";
import VehiclesOutput from "./VehiclesOutput";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

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
    userDistanceUnits: "",
    userVehicleSize: "",
    userVehiclePower: "",
    userVehicleCo2: 0,
    totalVehicleCo2: 0,
    chartData: 0
  };

  // @ts-ignore
  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      this.getData
    );
  };

  // @ts-ignore
  handleSizeChange = event => {
    if (event.target.value === "micro") {
      this.setState({ userVehicleSize: "micro" }, this.getData);
    } else if (event.target.value === "compact") {
      this.setState({ userVehicleSize: "compact" }, this.getData);
    } else if (event.target.value === "fullsize") {
      this.setState({ userVehicleSize: "fullsize" }, this.getData);
    } else if (event.target.value === "minivan") {
      this.setState({ userVehicleSize: "minivan" }, this.getData);
    } else if (event.target.value === "cuv") {
      this.setState({ userVehicleSize: "cuv" }, this.getData);
    } else if (event.target.value === "suv") {
      this.setState({ userVehicleSize: "suv" }, this.getData);
    } else if (event.target.value === "pickup") {
      this.setState({ userVehicleSize: "pickup" }, this.getData);
    } else if (event.target.value === "other") {
      this.setState({ userVehicleSize: "other" }, this.getData);
    }
  };

  getVehicleCo2 = () => {
    switch (this.state.userVehicleSize) {
      case "micro":
        return {
          type: "vehicle",
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: "ef495746-c349-48e6-835b-80240b1e2dbd"
        };
      case "compact":
        return {
          type: "vehicle",
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: "2ae1d26c-3fdf-4004-84e2-09eafd2b1e4f"
        };
      case "fullsize":
        return {
          type: "vehicle",
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: "00c24c0c-ac9f-4f4f-a8ea-aa9e1be2fb72"
        };
      case "minivan":
        return {
          type: "vehicle",
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: "46c7c58b-e68d-4ef2-bf19-6c4306b47259"
        };
      case "cuv":
        return {
          type: "vehicle",
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: "1628cb32-6446-4ace-8714-a99012d851e5"
        };
      case "suv":
        return {
          type: "vehicle",
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: "12971be3-2daa-42c2-a245-a78fe06a647e"
        };
      case "pickup":
        return {
          type: "vehicle",
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: "b88810e0-b625-4949-b5de-8f838b396020"
        };
      case "other":
        return {
          type: "vehicle",
          distance_unit: this.state.userDistanceUnits,
          distance_value: this.state.userDistance,
          vehicle_model_id: "25d80cfb-027f-4be4-8d64-2d2a3a488edc"
        };
      default:
        console.log("No vehicles found");
    }
  };

  getCo2 = () => {
    switch (this.state.userVehiclePower) {
      case "petrol":
        this.setState({ totalVehicleCo2: this.state.userVehicleCo2 });
        break;
      case "hybrid":
        this.setState({ totalVehicleCo2: this.state.userVehicleCo2 * 0.6 });
        break;
      case "electric":
        this.setState({ totalVehicleCo2: this.state.userVehicleCo2 * 0.35 });
        break;
      default:
        console.log("No vehicles found");
    }
  };

  newChartData = () => {
    const chartData = {
      labels: [
        this.state.userVehiclePower === "petrol"
          ? "⛽ Your ride on a petrol vehicle"
          : "⛽ Petrol or diesel vehicle",
        this.state.userVehiclePower === "hybrid"
          ? "⛽⚡ Your ride on a hybrid vehicle"
          : "⛽⚡ Hybrid vehicle",
        this.state.userVehiclePower === "electric"
          ? "⚡ Your ride on an electric vehicle"
          : "⚡ Electric vehicle",
        "🚆 Equivalent trip on train"
      ],

      datasets: [
        {
          label: "Vehicle CO2 emissions (kg)",
          data: [
            this.state.userVehicleCo2,
            this.state.userVehicleCo2 * 0.6,
            this.state.userVehicleCo2 * 0.35,
            this.state.userDistanceUnits === "km"
              ? this.state.userDistance * 0.041
              : this.state.userDistance * 0.066
          ],
          backgroundColor: [
            this.state.userVehiclePower === "petrol"
              ? "rgba(0, 100, 255, 0.6)"
              : "rgba(0, 255, 255, 0.2)",
            this.state.userVehiclePower === "hybrid"
              ? "rgba(0, 100, 255, 0.6)"
              : "rgba(0, 255, 255, 0.2)",
            this.state.userVehiclePower === "electric"
              ? "rgba(0, 100, 255, 0.6)"
              : "rgba(0, 255, 255, 0.2)",
            "rgba(0, 255, 0, 0.6)"
          ],
          borderColor: ["rgba(0,0,0,.5)"],
          borderWidth: 0.8
        }
      ]
    };

    return chartData;
  };

  vehiclesChart = () => {
    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "top",
          labels: {
            font: {
              family: "Titillium Web"
            }
          }
        },
        title: {
          display: false,
          font: {
            family: "Titillium Web",
            size: 16
          },
          text: "kg of CO2 emitted by vehicles depending on their power source"
        }
      }
    };

    // @ts-ignore
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
          headers: { Authorization: `Bearer ${EXT_API_KEY}` }
        })
        .then(response => {
          const data = response.data;
          const userVeCo2Data = data.data.attributes.carbon_kg;
          this.setState({ userVehicleCo2: userVeCo2Data });
          this.setState({ chartData: this.newChartData() });
          // @ts-ignore
          this.vehiclesChart(this.state.chartData);
          this.getCo2();
        })
        .catch(err =>
          console.log(
            "Something went wrong while fetching the vehicles CO2 emissions data: ",
            err
          )
        );
    }
  };

  saveVeCo2 = () => {
    // @ts-ignore
    sessionStorage.setItem("userVeCo2", this.state.userVehicleCo2);
  };

  render() {
    return (
      <div className="ve-container">
        {/* //! input section (left side) starts here */}
        <VehiclesInput
          handleChange={this.handleChange}
          handleSizeChange={this.handleSizeChange}
        />

        {/* //! output section (right side) starts here */}

        <VehiclesOutput
          chartData={this.state.chartData}
          vehiclesChart={this.vehiclesChart}
          saveVeCo2={this.saveVeCo2}
          totalVehicleCo2={this.state.totalVehicleCo2}
          userDistance={this.state.userDistance}
          userDistanceUnits={this.state.userDistanceUnits}
        />
      </div>
    );
  }
}
