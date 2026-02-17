import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const ChartComponent = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Earnings",
        data: [500, 1000, 750, 1200, 900],
        backgroundColor: "#4F46E5",
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="mb-4 font-bold">Monthly Earnings</h4>
      <Bar data={data} />
    </div>
  );
};

export default ChartComponent;
