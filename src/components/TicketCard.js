

import React from "react";

function TicketCard({ ticket }) {
  // Format the createdAt date nicely
  const formattedDate = new Date(ticket.createdAt).toLocaleString([], {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-1">{ticket.title}</h3>
      <p className="text-gray-600 mb-2">{ticket.description}</p>

      <div className="flex flex-wrap gap-3 text-sm mb-2">
        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
          Status: {ticket.status}
        </span>
        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
          Priority: {ticket.priority}
        </span>
      </div>

      <p className="text-xs text-gray-500">Created: {formattedDate}</p>
    </div>
  );
}

export default TicketCard;
