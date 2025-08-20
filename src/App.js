import React, { useState, useEffect } from 'react';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';

function App() {
   const [tickets, setTickets] = useState([
    {
      id: 1,
      title: "Fix printer issue",
      description: "Printer in HR is not working.",
      status: "Open",
      priority: "High",
    },
    {
      id: 2,
      title: "Update antivirus",
      description: "Need to update antivirus software.",
      status: "In Progress",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Replace keyboard",
      description: "Keyboard in Finance is broken.",
      status: "Closed",
      priority: "Low",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");

  // Add ticket from TicketForm
  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  // Apply filters + search
  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || ticket.status === filterStatus;

    const matchesPriority =
      filterPriority === "All" || ticket.priority === filterPriority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">IT Ticketing System</h1>

      {/* Form to add new ticket */}
      <TicketForm onAddTicket={addTicket} />

      {/* Filters + Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
        <input
          type="text"
          placeholder="Search tickets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-lg w-full md:w-1/3"
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="All">All Statuses</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>

        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Ticket List */}
      <TicketList tickets={filteredTickets} />
    </div>
  );
}

export default App;
