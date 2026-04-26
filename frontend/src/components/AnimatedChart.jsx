import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function AnimatedChart() {
  const data = [
    { name: "Jan", leadTime: 5, cycleTime: 4, bugRate: 0.3 },
    { name: "Feb", leadTime: 4, cycleTime: 3, bugRate: 0.25 },
    { name: "Mar", leadTime: 3, cycleTime: 2, bugRate: 0.2 },
  ];

  return (
    <div className="bg-white/10 p-6 rounded-xl">
      <h2 className="text-xl mb-4">📊 Performance Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line dataKey="leadTime" stroke="#38bdf8" strokeWidth={3} />
          <Line dataKey="cycleTime" stroke="#f97316" strokeWidth={3} />
          <Line dataKey="bugRate" stroke="#ef4444" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}