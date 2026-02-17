import OverviewCard from "../components/OverveiwCard.jsx";
import ChartComponent from "../components/ChartComponent.jsx";

const Overview = () => {
  const stats = [
    { title: "Total Projects", value: 12 },
    { title: "Earnings", value: "$4,500" },
    { title: "Tasks Due", value: 3 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <OverviewCard key={stat.title} {...stat} />
        ))}
      </div>
      <ChartComponent />
    </div>
  );
};

export default Overview;
