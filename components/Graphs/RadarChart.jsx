import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = () => {
  const data = {
    labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: "#964DF7",
        borderColor: "#964DF7",
        borderWidth: 1,
      },
      {
        label: "# of Votes",
        data: [7, 5, 6, 1, 13, 9],
        backgroundColor: "#19d895",
        borderColor: "#F8F8F8",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Radar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default RadarChart;
