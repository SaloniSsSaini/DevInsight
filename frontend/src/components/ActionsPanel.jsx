import React from "react";
export default function ActionsPanel({ actions }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold text-lg mb-2">🚀 Suggested Actions</h2>

      {actions.length === 0 ? (
        <p className="text-blue-600">👍 Keep up the good work!</p>
      ) : (
        actions.map((a, idx) => (
          <div key={idx} className="p-2 bg-blue-100 rounded mb-2">
            {a}
          </div>
        ))
      )}
    </div>
  );
}