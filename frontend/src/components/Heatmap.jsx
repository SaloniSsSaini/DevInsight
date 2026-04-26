import React from "react";

export default function Heatmap({ developers }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-2">🔥 Team Heatmap</h2>

      <div className="grid grid-cols-4 gap-3">
        {developers.map((d, i) => (
          <div
            key={i}
            className={`p-4 rounded text-center text-white ${
              d.score > 70
                ? "bg-green-500"
                : d.score > 50
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            {d.developer_id}
            <br />
            {d.score}
          </div>
        ))}
      </div>
    </div>
  );
}