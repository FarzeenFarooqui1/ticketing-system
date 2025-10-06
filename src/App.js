import React, { useState } from "react";
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';

function App() {
 const [tickets, setTickets] = useState([]);

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
      return new Date(b.createdAt) - new Date(a.createdAt);
    case "Oldest":
      return new Date(a.createdAt) - new Date(b.createdAt);
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
      <h1 className="text-2xl font-bold mb-6 text-center" data-testid="app-title" > IT Ticketing System</h1>

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
          <option value="All" data-testid="ticket-all" >All Statuses</option>
          <option value="Open"data-testid="ticket-option">Open</option>
          <option value="In Progress"data-testid="ticket-in-progress">In Progress</option>
          <option value="Closed" data-testid="ticket-all">Closed</option>
        </select>

        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="All" data-testid="ticket-all_priorities">All Priorities</option>
          <option value="High"data-testid="ticket-high">High</option>
          <option value="Medium"data-testid="ticket-medium">Medium</option>
          <option value="Low"data-testid="ticket-low">Low</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="Newest" data-testid="ticket-newest">Newest</option>
          <option value="Oldest" data-testid="ticket-oldest">Oldest</option>
          <option value="PriorityHighLow" data-testid="ticket-High → Low">Priority: High → Low</option>
          <option value="PriorityLowHigh" data-testid="ticket-Low → High">Priority: Low → High</option>
          <option value="Status" data-testid="ticket-Open → Closed">Status: Open → Closed</option>
        </select>
      </div>

      {/* Ticket List */}
      <TicketList tickets={filteredTickets} />
    </div>
  );
}

export default App;
