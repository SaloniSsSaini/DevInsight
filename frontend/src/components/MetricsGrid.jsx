import React from "react";
import MetricCard from "./MetricCard";
import { getColor } from "../utils/colorUtils";

export default function MetricsGrid({ metrics }) {
  return (
    <div className="grid grid-cols-5 gap-4 mb-6">
      {Object.entries(metrics).map(([k, v]) => (
        <MetricCard key={k} title={k} value={v} color={getColor(k, v)} />
      ))}
    </div>
  );
}