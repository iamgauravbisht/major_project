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
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
  scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: 100,
      beginAtZero: true,
      stepsize: 20,
    },
  },
};

const data = {
  labels: ["Apppe", "Baadf", "Orasdfasfsa", "Gasdfsafr", "Wsfdsfsaa"],
  datasets: [
    {
      label: "Algorithm Efficiency",
      data: [50, 40, 30, 20, 10], // Likings for each fruit
      backgroundColor: [
        "rgba(255, 99, 132)", // Apple
        "rgba(54, 162, 235)", // Banana
        "rgba(255, 206, 86)", // Orange
        "rgba(75, 192, 192)", // Grapes
        "rgba(153, 102, 255)", // Watermelon
      ],
      borderColor: [
        "rgba(255, 99, 120,)", // Apple
        "rgba(54, 162, 235,)", // Banana
        "rgba(255, 206, 86,)", // Orange
        "rgba(75, 192, 192,)", // Grapes
        "rgba(153, 102, 255,)", // Watermelon
      ],
      borderWidth: 1,
    },
  ],
};

export default function BarChart() {
  return (
    <div className="bg-[#59D5E0] max-w-[300px] h-[300px] p-2 rounded-lg flex-1 w-full">
      <Bar options={options} data={data} height={"300px"} />
    </div>
  );
}
