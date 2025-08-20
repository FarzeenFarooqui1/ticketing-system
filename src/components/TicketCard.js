import React from "react";

function TicketCard({ ticket }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-md transition">
      <h2 className="font-semibold text-lg">{ticket.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>

      <div className="flex justify-between text-sm">
        <span
          className={`px-2 py-1 rounded-full text-white ${
            ticket.status === "Open"
              ? "bg-green-500"
              : ticket.status === "In Progress"
              ? "bg-yellow-500"
              : "bg-gray-500"
          }`}
        >
          {ticket.status}
        </span>
        <span
          className={`px-2 py-1 rounded-full text-white ${
            ticket.priority === "High"
              ? "bg-red-500"
              : ticket.priority === "Medium"
              ? "bg-blue-500"
              : "bg-gray-400"
          }`}
        >
          {ticket.priority}
        </span>
      </div>
    </div>
  );
}

export default TicketCard;
