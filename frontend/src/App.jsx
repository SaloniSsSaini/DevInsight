import React from "react";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import ManagerDashboard from "./pages/ManagerDashboard";

export default function App() {
  const [view, setView] = useState("dev");

  return (
    <div>
      <div className="p-4 flex gap-4">
        <button
          onClick={() => setView("dev")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Developer View
        </button>

        <button
          onClick={() => setView("mgr")}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Manager View
        </button>
      </div>

      {view === "dev" ? <Dashboard /> : <ManagerDashboard />}
    </div>
  );
}