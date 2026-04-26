import React from "react";
import { motion } from "framer-motion";

export default function MetricCard({ title, value }) {
  const isBugHigh = title === "bugRate" && value > 0.3;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`p-6 rounded-xl shadow-xl bg-white/10 backdrop-blur-lg ${
        isBugHigh ? "border border-red-500 animate-pulse" : ""
      }`}
    >
      <h3 className="text-gray-400 text-sm">{title}</h3>

      <p className="text-2xl font-bold">{value}</p>

      {isBugHigh && (
        <span className="text-red-400 text-sm">⚠ High Bug Rate</span>
      )}
    </motion.div>
  );
}