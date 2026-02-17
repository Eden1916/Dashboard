import activities from "../data/Activities.js";

const NotificationDropdown = () => {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded p-2 z-10">
      <h3 className="font-bold mb-2">Recent Activities</h3>
      <ul className="space-y-1">
        {activities.slice(0, 3).map((act, i) => (
          <li key={i} className="text-sm border-b py-1">
            {act}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationDropdown;
