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
import React from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function Graph() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Achieved",
        //data: labels.map(() => 150)//
        data: [30,40,50,60,70,80,90,100,120],
        backgroundColor: "rgba(255, 0, 0, 0.7)",
      },
      {
        label: "Target",
        data: labels.map(() => 150),
        backgroundColor: "rgba(0, 255, 0, 0.5)",
      },
    ],
  };

  return (
    <>
      Annual Progress
      <Bar options={options} data={data} />
    </>
  );
}
