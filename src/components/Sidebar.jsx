import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Overview", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">Freelance Dashboard</h1>
      <nav className="flex flex-col space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `p-2 rounded hover:bg-gray-200 ${isActive ? "bg-gray-300" : ""}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
