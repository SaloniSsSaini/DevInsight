import React, { useEffect, useMemo, useState } from "react";
import { fetchManager } from "../services/api";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

import ParticlesBackground from "../components/ParticlesBackground";
import TeamChart from "../components/TeamChart";
import ScoreChart from "../components/ScoreChart";
import Heatmap from "../components/Heatmap";

export default function ManagerDashboard() {
  const [managerId, setManagerId] = useState("mgr1");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchManager(managerId)
      .then((res) => {
        setData(res);

        if (res?.teamMetrics?.bugRate > 0.3) {
          toast.error("🚨 Team bug rate is high!");
        }
      })
      .catch((err) => console.error("Manager API Error:", err));
  }, [managerId]);

  // ✅ SAFE DATA (ALWAYS BEFORE HOOKS)
  const teamMetrics = data?.teamMetrics || {};
  const developers = data?.developers || [];
  const insights = data?.insights || [];
  const actions = data?.actions || [];

  // ✅ HOOK 1
  const teamScore = useMemo(() => {
    if (!developers.length) return 0;
    const avg =
      developers.reduce((s, d) => s + (d.score || 0), 0) /
      developers.length;
    return Math.round(avg);
  }, [developers]);

  // ✅ HOOK 2
  const sortedDevs = useMemo(() => {
    return [...developers].sort((a, b) => (b.score || 0) - (a.score || 0));
  }, [developers]);

  const top = sortedDevs.slice(0, 3);
  const bottom = sortedDevs.slice(-3).reverse();

  // ✅ NOW SAFE RETURN
  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        Loading Manager Dashboard...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-8 text-white">

      <ParticlesBackground />
      <Toaster position="top-right" />

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">👨‍💼 Manager Dashboard</h1>
          <p className="text-gray-400">
            Team Productivity & Performance Overview
          </p>
        </div>

        <select
          value={managerId}
          onChange={(e) => setManagerId(e.target.value)}
          className="bg-gray-800 p-2 rounded"
        >
          <option value="mgr1">Manager 1</option>
          <option value="mgr2">Manager 2</option>
        </select>
      </div>

      {/* TEAM SCORE */}
      <div className="mb-8">
        <h2 className="text-gray-400">Team Score</h2>
        <div className="text-4xl text-green-400 font-bold">
          {teamScore} / 100
        </div>
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
        {Object.entries(teamMetrics).map(([key, value]) => (
          <div key={key} className="bg-white/10 p-4 rounded-xl">
            <p className="text-sm text-gray-400">{key}</p>
            <p className="text-xl">{value}</p>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <TeamChart developers={developers} />
      <ScoreChart developers={developers} />
      <Heatmap developers={developers} />

      {/* TOP / BOTTOM */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white/10 p-6 rounded-xl">
          <h2>🏆 Top Performers</h2>
          {top.map((d, i) => (
            <p key={i}>{d.developer_id} — {d.score}</p>
          ))}
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          <h2>⚠ Needs Attention</h2>
          {bottom.map((d, i) => (
            <p key={i}>{d.developer_id} — {d.score}</p>
          ))}
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="mt-8 bg-white/10 p-6 rounded-xl">
        <h2>🧠 Insights</h2>
        {insights.length === 0 ? (
          <p className="text-green-400">✔ Team looks healthy</p>
        ) : (
          insights.map((i, idx) => <p key={idx}>{i}</p>)
        )}
      </div>

      {/* ACTIONS */}
      <div className="mt-6 bg-white/10 p-6 rounded-xl">
        <h2>🚀 Actions</h2>
        {actions.length === 0 ? (
          <p>👍 Maintain performance</p>
        ) : (
          actions.map((a, idx) => <p key={idx}>{a}</p>)
        )}
      </div>

    </div>
  );
}