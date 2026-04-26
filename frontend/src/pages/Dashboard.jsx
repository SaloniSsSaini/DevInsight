import React from "react";
import { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import DeveloperSelector from "../components/DeveloperSelector";
import MetricsGrid from "../components/MetricsGrid";
import InsightsPanel from "../components/InsightsPanel";
import ActionsPanel from "../components/ActionsPanel";
import ParticlesBackground from "../components/ParticlesBackground";
import AnimatedChart from "../components/AnimatedChart";
import MetricCard from "../components/MetricCard";


export default function Dashboard() {
  const [devId, setDevId] = useState("dev1");
  const [data, setData] = useState(null);
  const [timeRange, setTimeRange] = useState("7");

  useEffect(() => {
    fetchData(devId).then((res) => {
      setData(res);

      // 🔔 ALERT TOAST
      if (res.metrics.bugRate > 0.3) {
        toast.error("🚨 High Bug Rate!");
      }
    });
  }, [devId, timeRange]);

  if (!data)
    return <div className="text-white p-10">Loading...</div>;

  const metrics = data.metrics;

  // 🧠 PERFORMANCE SCORE
  const score = Math.max(
    0,
    Math.round(100 - metrics.leadTime * 5 - metrics.bugRate * 50)
  );

  return (
    <div className="relative min-h-screen bg-black text-white p-8">

      {/* 🌌 BACKGROUND */}
      <ParticlesBackground />

      {/* 🔔 TOASTER */}
      <Toaster position="top-right" />

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">🚀 DevInsight</h1>
          <p className="text-gray-400">Advanced Developer Intelligence</p>
        </div>

        <div className="flex gap-3">
          {/* TIME FILTER */}
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-gray-800 p-2 rounded"
          >
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
          </select>

          {/* DEV SELECT */}
          <select
            value={devId}
            onChange={(e) => setDevId(e.target.value)}
            className="bg-gray-800 p-2 rounded"
          >
            <option value="dev1">Developer 1</option>
            <option value="dev2">Developer 2</option>
          </select>
        </div>
      </div>

      {/* 🧠 PERFORMANCE SCORE */}
      <div className="mb-8">
        <h2 className="text-lg text-gray-400">Performance Score</h2>
        <div className="text-4xl font-bold text-green-400">
          {score} / 100
        </div>
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
        {Object.entries(metrics).map(([key, value]) => (
          <MetricCard key={key} title={key} value={value} />
        ))}
      </div>

      {/* 📊 CHART */}
      <AnimatedChart />

      {/* 🏆 LEADERBOARD */}
      <div className="mt-10 bg-white/10 p-6 rounded-xl">
        <h2 className="text-xl mb-3">🏆 Leaderboard</h2>
        <p>🥇 dev1</p>
        <p>🥈 dev2</p>
        <p>🥉 dev3</p>
      </div>

    </div>
  );
}