import React from "react";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function TeamChart({ developers }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-2">📊 Team Comparison</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={developers}>
          <XAxis dataKey="developer_id" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="leadTime" />
          <Bar dataKey="bugRate" />
          <Bar dataKey="prThroughput" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}