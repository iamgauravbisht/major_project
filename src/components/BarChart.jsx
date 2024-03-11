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
      display: false, // Hide dataset label
    },
    title: {
      display: true,
      text: "Algorithm Efficiency",
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

export default function BarChart({ data }) {
  return (
    <div className="bg-[#59D5E0] max-w-[300px] h-[300px] p-2 rounded-lg flex-1 w-full">
      <Bar options={options} data={data} height={"300px"} />
    </div>
  );
}
