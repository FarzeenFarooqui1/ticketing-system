import React, { useState } from "react";

function TicketForm({ onAddTicket }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: Date.now(), // unique ID
      title,
      description,
      status,
      priority,
      createdAt: new Date().toISOString(), // timestamp
    };

    onAddTicket(newTicket);

    // reset form
    setTitle("");
    setDescription("");
    setStatus("Open");
    setPriority("Medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">Create New Ticket</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="p-2 border rounded-lg w-full mb-3"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="p-2 border rounded-lg w-full mb-3"
      />

      <div className="flex gap-3 mb-3">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 border rounded-lg w-1/2"
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 border rounded-lg w-1/2"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add Ticket
      </button>
    </form>
  );
}

export default TicketForm;
