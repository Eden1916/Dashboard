import { useState } from "react";
import NotificationDropdown from "./NotificationDropdown";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-white p-4 shadow">
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <div className="relative">
        <button
          className="bg-gray-100 p-2 rounded"
          onClick={() => setOpen(!open)}
        >
          🔔
        </button>
        {open && <NotificationDropdown />}
      </div>
    </header>
  );
};

export default Header;
