import React from "react";

const ProjectCard = ({ name, client, status, deadline, budget }) => {
  // Status color styling
  const statusColors = {
    "In Progress": "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-gray-100 text-gray-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-all duration-300 border border-gray-100">
      
      {/* Project Name */}
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {name}
      </h3>

      {/* Client */}
      <p className="text-sm text-gray-500 mb-3">
        Client: {client}
      </p>

      {/* Status Badge */}
      <span
        className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${statusColors[status]}`}
      >
        {status}
      </span>

      {/* Divider */}
      <div className="my-4 border-t border-gray-100"></div>

      {/* Footer Info */}
      <div className="flex justify-between text-sm text-gray-600">
        <div>
          <p className="font-medium">Deadline</p>
          <p>{deadline}</p>
        </div>
        <div>
          <p className="font-medium">Budget</p>
          <p>{budget}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
