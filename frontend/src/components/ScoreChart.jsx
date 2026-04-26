import React from "react";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function ScoreChart({ developers }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-2">🏆 Performance Ranking</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={developers}>
          <XAxis dataKey="developer_id" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}