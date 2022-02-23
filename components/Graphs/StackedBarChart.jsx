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
const StackedBarChart = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
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
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Dataset 2",
        data: [7, 5, 6, 1, 13, 9],
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Dataset 3",
        data: [17, 19, 23, 21, 13, 12],
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default StackedBarChart;
