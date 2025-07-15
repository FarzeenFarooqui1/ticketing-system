import React, { useState } from 'react';

const TicketForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ title: '', category: '', description: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, status: 'Open' });
    setForm({ title: '', category: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Submit a Ticket</h2>

      <label className="block mb-1 font-medium">Issue Title</label>
      <input
        id="title"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block mb-1 font-medium">Category</label>
      <select
        id="category"
        value={form.category}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">-- Select --</option>
        <option>Hardware</option>
        <option>Software</option>
        <option>Network</option>
        <option>Other</option>
      </select>

      <label className="block mb-1 font-medium">Description</label>
      <textarea
        id="description"
        value={form.description}
        onChange={handleChange}
        rows="4"
        required
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default TicketForm;
