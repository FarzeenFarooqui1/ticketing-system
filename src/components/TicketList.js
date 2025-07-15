import React from 'react';
import TicketCard from './TicketCard';

const TicketList = ({ tickets, toggleStatus }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Submitted Tickets</h2>
      {tickets.length === 0 ? (
        <p className="text-gray-500 italic">No tickets submitted yet.</p>
      ) : (
        tickets.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} index={index} toggleStatus={toggleStatus} />
        ))
      )}
    </div>
  );
};

export default TicketList;
