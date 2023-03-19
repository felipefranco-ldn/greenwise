import React, { Component } from "react";
import { EXT_API_KEY, EXT_API_URL } from "../../utils/api";
import "./FlightsInterface.scss";
import axios from "axios";
import FlightsInput from "./FlightsInput";
import FlightsOutput from "./FlightsOutput";
import scrollToTop from "../../utils/helpers/scrollToTop";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

export default class FlightsInterface extends Component {
  state = {
    userFlightDuration: "",
    userFlightClass: "",
    userFlightCo2: 0,
    totalFlightCo2: 0,
    chartData: 0,
  };

  handleChange = (event) => {
    if (event.target.value === "domestic") {
      this.setState({ userFlightDuration: "domestic" }, this.getData);
    } else if (event.target.value === "short") {
      this.setState({ userFlightDuration: "short" }, this.getData);
    } else if (event.target.value === "medium") {
      this.setState({ userFlightDuration: "medium" }, this.getData);
    } else if (event.target.value === "long") {
      this.setState({ userFlightDuration: "long" }, this.getData);
    } else if (event.target.value === "extraLong") {
      this.setState({ userFlightDuration: "extraLong" }, this.getData);
    } else if (event.target.value === "ultraLong") {
      this.setState({ userFlightDuration: "ultraLong" }, this.getData);
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

  getFlightCo2 = () => {
    switch (this.state.userFlightDuration) {
      case "domestic":
        return {
          type: "flight",
          passengers: 1,
          legs: [
            { departure_airport: "lhr", destination_airport: "txl" },
            { departure_airport: "txl", destination_airport: "lhr" },
          ],
        };
      case "short":
        return {
          type: "flight",
          passengers: 1,
          legs: [
            { departure_airport: "lhr", destination_airport: "kbp" },
            { departure_airport: "kbp", destination_airport: "lhr" },
          ],
        };
      case "medium":
        return {
          type: "flight",
          passengers: 1,
          legs: [
            { departure_airport: "lhr", destination_airport: "bos" },
            { departure_airport: "bos", destination_airport: "lhr" },
          ],
        };
      case "long":
        return {
          type: "flight",
          passengers: 1,
          legs: [
            { departure_airport: "lhr", destination_airport: "bkk" },
            { departure_airport: "bkk", destination_airport: "lhr" },
          ],
        };
      case "extraLong":
        return {
          type: "flight",
          passengers: 1,
          legs: [
            { departure_airport: "lhr", destination_airport: "per" },
            { departure_airport: "per", destination_airport: "lhr" },
          ],
        };
      case "ultraLong":
        return {
          type: "flight",
          passengers: 1,
          legs: [
            { departure_airport: "lhr", destination_airport: "per" },
            { departure_airport: "per", destination_airport: "akl" },
            { departure_airport: "akl", destination_airport: "per" },
            { departure_airport: "per", destination_airport: "lhr" },
          ],
        };
      default:
        console.log("No flights found");
    }
  };

  getCo2 = () => {
    switch (this.state.userFlightClass) {
      case "Economy":
        this.setState({ totalFlightCo2: this.state.userFlightCo2 });
        break;
      case "PremiumEconomy":
        this.setState({ totalFlightCo2: this.state.userFlightCo2 * 1.66 });
        break;
      case "Business":
        this.setState({ totalFlightCo2: this.state.userFlightCo2 * 3.48 });
        break;
      case "First":
        this.setState({ totalFlightCo2: this.state.userFlightCo2 * 5.45 });
        break;
      default:
        console.log("No flights found");
    }
  };

  chartData = () => {
    const chartData = {
      labels: [
        this.state.userFlightClass === "Economy"
          ? "✈️Your flight in Economy class"
          : "Economy Class",
        this.state.userFlightClass === "PremiumEconomy"
          ? "✈️ Your flight in Premium Economy"
          : "Premium Economy",
        this.state.userFlightClass === "Business"
          ? "✈️ Your flight in Business class"
          : "Business Class",
        this.state.userFlightClass === "First"
          ? "✈️ Your flight in First class"
          : "First Class",
        "🚆 Equivalent trip on train",
      ],

      datasets: [
        {
          label: "Flight CO2 emissions (kg)",
          data: [
            this.state.userFlightCo2,
            this.state.userFlightCo2 * 1.66,
            this.state.userFlightCo2 * 3.48,
            this.state.userFlightCo2 * 5.45,
            this.state.userFlightDistance * 0.021,
          ],
          backgroundColor: [
            this.state.userFlightClass === "Economy"
              ? "rgba(0, 100, 255, 0.6)"
              : "rgba(0, 255, 255, 0.2)",
            this.state.userFlightClass === "PremiumEconomy"
              ? "rgba(0, 100, 255, 0.6)"
              : "rgba(0, 255, 255, 0.2)",
            this.state.userFlightClass === "Business"
              ? "rgba(0, 100, 255, 0.6)"
              : "rgba(0, 255, 255, 0.2)",
            this.state.userFlightClass === "First"
              ? "rgba(0, 100, 255, 0.6)"
              : "rgba(0, 255, 255, 0.2)",
            "rgba(0, 255, 0, 0.6)",
          ],
          borderColor: ["rgba(0,0,0,.5)"],
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
          position: "top",
          labels: {
            font: {
              family: "Titillium Web",
            },
          },
        },
        title: {
          display: false,
          font: {
            family: "Titillium Web",
            size: 16,
          },
          text: "kg of CO2 emitted by selected flight duration and class",
        },
      },
    };

    return <Bar options={chartOptions} data={this.state.chartData} />;
  };

  getData = () => {
    if (this.state.userFlightDuration && this.state.userFlightClass) {
      scrollToTop();
      axios
        .post(`${EXT_API_URL}`, this.getFlightCo2(), {
          headers: { Authorization: `Bearer ${EXT_API_KEY}` },
        })
        .then((response) => {
          const data = response.data;
          const userFlCo2Data = data.data.attributes.carbon_kg;
          const userFlDistanceData = data.data.attributes.distance_value;
          this.setState({ userFlightCo2: userFlCo2Data });
          this.setState({ userFlightDistance: userFlDistanceData });
          this.setState({ chartData: this.chartData() });
          this.getCo2();
        })
        .catch((err) =>
          console.log(
            "Something went wrong while fetching the fligths CO2 emissions data: ",
            err
          )
        );
    }
  };

  saveFlCo2 = () => {
    sessionStorage.setItem("userFlCo2", this.state.userFlightCo2);
  };

  render() {
    return (
      <div className="fl-container">
        {/* //! input section (left side) starts here */}

        <FlightsInput
          handleChange={this.handleChange}
          handleClassChange={this.handleClassChange}
        />

        {/* //! output section (right side) starts here */}

        <FlightsOutput
          chartData={this.state.chartData}
          userFlightClass={this.state.userFlightClass}
          totalFlightCo2={this.state.totalFlightCo2}
          userFlightDistance={this.state.userFlightDistance}
          saveFlCo2={this.saveFlCo2}
          flightsChart={this.flightsChart}
        />
      </div>
    );
  }
}
