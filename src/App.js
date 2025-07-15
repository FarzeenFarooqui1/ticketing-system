import React, { useState, useEffect } from 'react';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';

function App() {
  const [tickets, setTickets] = useState(() => {
    const stored = localStorage.getItem('tickets');
    return stored ? JSON.parse(stored) : [];
  });

  const addTicket = (ticket) => {
    const newTickets = [...tickets, ticket];
    setTickets(newTickets);
    localStorage.setItem('tickets', JSON.stringify(newTickets));
  };

  const toggleStatus = (index) => {
    const updated = [...tickets];
    updated[index].status = updated[index].status === 'Open' ? 'Closed' : 'Open';
    setTickets(updated);
    localStorage.setItem('tickets', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        IT Ticketing System
      </h1>

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <TicketForm onSubmit={addTicket} />
        <TicketList tickets={tickets} toggleStatus={toggleStatus} />
      </div>
    </div>
  );
}

export default App;
