import React from "react";
export default function InsightsPanel({ insights }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      <h2 className="font-semibold text-lg mb-2">🧠 Insights</h2>

      {insights.length === 0 ? (
        <p className="text-green-600">✅ All metrics look healthy!</p>
      ) : (
        insights.map((i, idx) => (
          <div key={idx} className="p-2 bg-red-100 rounded mb-2">
            {i}
          </div>
        ))
      )}
    </div>
  );
}