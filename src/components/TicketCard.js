import React from 'react';

const TicketCard = ({ ticket, index, toggleStatus }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-blue-700">{ticket.title}</h3>
        <span
          className={`text-sm px-2 py-1 rounded ${
            ticket.status === 'Open'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {ticket.status}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-2 italic">Category: {ticket.category}</p>
      <p className="text-gray-700 mb-4">{ticket.description}</p>
      <button
        onClick={() => toggleStatus(index)}
        className={`text-sm px-3 py-1 rounded ${
          ticket.status === 'Open'
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-green-500 hover:bg-green-600 text-white'
        } transition`}
      >
        {ticket.status === 'Open' ? 'Close Ticket' : 'Reopen Ticket'}
      </button>
    </div>
  );
};

export default TicketCard;
