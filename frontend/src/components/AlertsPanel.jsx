import React from "react";

export default function AlertsPanel({ metrics }) {
  const alerts = [];

  if (metrics.bugRate > 0.3)
    alerts.push("🚨 High bug rate detected");

  if (metrics.leadTime > 7)
    alerts.push("⏳ Slow delivery");

  if (metrics.prThroughput < 10)
    alerts.push("📉 Low productivity");

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      <h2 className="font-semibold text-lg mb-2">🚨 Alerts</h2>

      {alerts.length === 0 ? (
        <p className="text-green-600">✅ No critical issues</p>
      ) : (
        alerts.map((a, i) => (
          <div key={i} className="bg-red-100 p-2 rounded mb-2">
            {a}
          </div>
        ))
      )}
    </div>
  );
}