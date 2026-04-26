
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function TrendChart() {
  const data = [
    { month: "Jan", leadTime: 5 },
    { month: "Feb", leadTime: 4 },
    { month: "Mar", leadTime: 3 }
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-2">📈 Lead Time Trend</h2>
      <LineChart width={400} height={200} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="leadTime" />
      </LineChart>
    </div>
  );
}import React from "react";
