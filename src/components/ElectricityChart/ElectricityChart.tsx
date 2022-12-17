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

// @ts-ignore
export default function ElectricityChart({ chartData }) {
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
        text: "kg of CO2 emitted by electricity usage of average home, per year"
      }
    }
  };

  // @ts-ignore
  return <Bar options={chartOptions} data={chartData} />;
}
