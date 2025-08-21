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
  const [sortOption, setSortOption] = useState("Newest");

  // Add ticket from TicketForm
  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  // Apply filters + search
  let filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || ticket.status === filterStatus;

    const matchesPriority =
      filterPriority === "All" || ticket.priority === filterPriority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Sorting logic
  filteredTickets = filteredTickets.sort((a, b) => {
    switch (sortOption) {
      case "Newest":
        return b.id - a.id;
      case "Oldest":
        return a.id - b.id;
      case "PriorityHighLow":
        const priorityOrderHL = { High: 3, Medium: 2, Low: 1 };
        return priorityOrderHL[b.priority] - priorityOrderHL[a.priority];
      case "PriorityLowHigh":
        const priorityOrderLH = { High: 3, Medium: 2, Low: 1 };
        return priorityOrderLH[a.priority] - priorityOrderLH[b.priority];
      case "Status":
        const statusOrder = { Open: 3, "In Progress": 2, Closed: 1 };
        return statusOrder[b.status] - statusOrder[a.status];
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">IT Ticketing System</h1>

      {/* Form to add new ticket */}
      <TicketForm onAddTicket={addTicket} />

      {/* Filters + Search + Sorting */}
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

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="PriorityHighLow">Priority: High → Low</option>
          <option value="PriorityLowHigh">Priority: Low → High</option>
          <option value="Status">Status: Open → Closed</option>
        </select>
      </div>

      {/* Ticket List */}
      <TicketList tickets={filteredTickets} />
    </div>
  );
}

export default App;
