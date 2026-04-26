import React from "react";
export default function DeveloperSelector({ devId, setDevId }) {
  return (
    <select
      value={devId}
      onChange={(e) => setDevId(e.target.value)}
      className="p-2 border rounded mb-4"
    >
      <option value="dev1">Developer 1</option>
      <option value="dev2">Developer 2</option>
    </select>
  );
}