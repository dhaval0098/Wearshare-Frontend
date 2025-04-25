import React, { useState } from "react";

const Status = () => {
  const [status, setStatus] = useState("Pending");

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="p-4 max-w-sm mx-auto border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Task: Fix Bug #101</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Status:</label>
        <select
          value={status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <p className="text-sm">
        Current Status:{" "}
        <span
          className={`font-bold ${
            status === "Completed"
              ? "text-green-600"
              : status === "In Progress"
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          {status}
        </span>
      </p>
    </div>
  );
};

export default Status;
