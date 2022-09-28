import React from "react";
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
 
export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};
 
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const values=[30,70,25,10,100,20,10,100,20,10,100,20,23]
export const data = {
  labels,
  datasets: [
    {
      label: "Achieved",
      data: labels.map((itm, indx) => values[indx]),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 200, 132, 0.5)",
    },
    {
      label: "Target",
      data: labels.map(() => 100),
      borderColor: "rgb(90, 200, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.4)",
    },
  ],
};
 
export default function App() {
  return <Bar options={options} data={data} />;
}
