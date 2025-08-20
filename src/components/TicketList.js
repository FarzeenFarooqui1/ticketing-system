import React from "react";
import TicketCard from "./TicketCard";

function TicketList({ tickets }) {
  if (tickets.length === 0) {
    return (
      <p className="text-center text-gray-500 col-span-full">
        No tickets found.
      </p>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default TicketList;
