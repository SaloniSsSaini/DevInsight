const express = require("express");
const readExcel = require("../utils/excelReader");
const calculateMetrics = require("../services/metricsService");
const generateInsights = require("../services/insightService");

const router = express.Router();


// ==========================
// ✅ DEVELOPER API
// ==========================
router.get("/metrics/:developerId", (req, res) => {
  try {
    const { developerId } = req.params;

    const data = readExcel();

    if (!data) {
      return res.status(500).json({ error: "No data found" });
    }

    const metrics = calculateMetrics(data, developerId);

    // ✅ FIX HERE
    const { insights, actions } = generateInsights(metrics);

    res.json({
      developerId,
      metrics,
      insights,
      actions,
    });

  } catch (e) {
    console.error("❌ Metrics API Error:", e);
    res.status(500).json({ error: "Metrics API failed" });
  }
});


// ==========================
// ✅ MANAGER API
// ==========================
router.get("/manager/:managerId", (req, res) => {
  try {
    const { managerId } = req.params;

    const data = readExcel();

    if (!data || !data.issues || data.issues.length === 0) {
      return res.json({
        managerId,
        teamMetrics: {},
        developers: [],
        topPerformers: [],
        bottomPerformers: [],
        insights: ["No data available"],
        actions: [],
      });
    }

    const devs = [
      ...new Set(
        data.issues
          .filter(
            (i) =>
              (i.manager || i.Manager || "").toLowerCase() ===
              managerId.toLowerCase()
          )
          .map((i) => i.developer_id || i.developer || i.devId)
          .filter(Boolean)
      ),
    ];

    if (devs.length === 0) {
      return res.json({
        managerId,
        teamMetrics: {},
        developers: [],
        topPerformers: [],
        bottomPerformers: [],
        insights: ["No developers found"],
        actions: ["Check Excel manager column"],
      });
    }

    const devMetrics = devs.map((devId) => {
      const m = calculateMetrics(data, devId);
      return { developer_id: devId, ...m };
    });

    const avg = (arr, key) =>
      arr.length
        ? arr.reduce((s, x) => s + (x[key] || 0), 0) / arr.length
        : 0;

    const teamMetrics = {
      leadTime: Number(avg(devMetrics, "leadTime").toFixed(2)),
      cycleTime: Number(avg(devMetrics, "cycleTime").toFixed(2)),
      bugRate: Number(avg(devMetrics, "bugRate").toFixed(2)),
      deploymentFreq: Math.round(avg(devMetrics, "deploymentFreq")),
      prThroughput: Math.round(avg(devMetrics, "prThroughput")),
    };

    const score = (m) => {
      let s = 100;
      if (m.leadTime > 7) s -= 20;
      if (m.bugRate > 0.3) s -= 30;
      if (m.prThroughput < 10) s -= 20;
      return Math.max(0, s);
    };

    const ranked = devMetrics
      .map((d) => ({ ...d, score: score(d) }))
      .sort((a, b) => b.score - a.score);

    const topPerformers = ranked.slice(0, 2);
    const bottomPerformers = ranked.slice(-2);

    const insights = [];
    const actions = [];

    if (teamMetrics.bugRate > 0.3) {
      insights.push("🚨 Team bug rate is high");
      actions.push("Increase test coverage");
    }

    if (teamMetrics.leadTime > 7) {
      insights.push("⏳ Delivery is slow");
      actions.push("Improve PR review speed");
    }

    if (teamMetrics.prThroughput < 10) {
      insights.push("📉 Low throughput");
      actions.push("Encourage smaller PRs");
    }

    res.json({
      managerId,
      teamMetrics,
      developers: ranked,
      topPerformers,
      bottomPerformers,
      insights,
      actions,
    });

  } catch (e) {
    console.error("❌ Manager API Error:", e);
    res.status(500).json({ error: "Manager API failed" });
  }
});

module.exports = router;