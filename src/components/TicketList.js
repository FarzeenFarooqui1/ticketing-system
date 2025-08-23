import React from "react";
import TicketCard from "./TicketCard";

function TicketList({ tickets }) {
  if (!tickets || tickets.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No tickets found.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default TicketList;
