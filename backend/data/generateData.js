// backend/data/generateData.js

const XLSX = require("xlsx");

const developers = [
  { id: "dev1", team: "frontend", manager: "mgr1" },
  { id: "dev2", team: "backend", manager: "mgr1" },
  { id: "dev3", team: "frontend", manager: "mgr2" },
  { id: "dev4", team: "backend", manager: "mgr2" }
];

// 📅 3 MONTH RANGE
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end - start));
}

function format(d) {
  return d.toISOString().split("T")[0];
}

// 🎯 PERFORMANCE SCORE
function getScore(leadTime, bugRate, prCount) {
  let score = 100;
  if (leadTime > 7) score -= 20;
  if (bugRate > 0.3) score -= 30;
  if (prCount < 10) score -= 20;
  return score;
}

// 📊 DATA ARRAYS
const issues = [];
const prs = [];
const deployments = [];
const bugs = [];
const performance = [];

// 🔁 GENERATE 3 MONTH DATA
for (let i = 1; i <= 1200; i++) {
  const dev = developers[Math.floor(Math.random() * developers.length)];
  const start = randomDate(new Date(2024, 0, 1), new Date(2024, 2, 31));
  const end = new Date(start);
  end.setDate(start.getDate() + Math.floor(Math.random() * 5 + 1));

  issues.push({
    issue_id: i,
    developer_id: dev.id,
    team: dev.team,
    manager: dev.manager,
    in_progress_date: format(start),
    done_date: format(end)
  });
}

// 🔁 PRs
for (let i = 1; i <= 1200; i++) {
  const dev = developers[Math.floor(Math.random() * developers.length)];
  const open = randomDate(new Date(2024, 0, 1), new Date(2024, 2, 31));
  const deploy = new Date(open);
  deploy.setDate(open.getDate() + Math.floor(Math.random() * 7 + 1));

  prs.push({
    pr_id: i,
    developer_id: dev.id,
    team: dev.team,
    open_date: format(open),
    deploy_date: format(deploy),
    status: Math.random() > 0.2 ? "merged" : "open"
  });
}

// 🔁 Deployments
for (let i = 1; i <= 300; i++) {
  const date = randomDate(new Date(2024, 0, 1), new Date(2024, 2, 31));

  deployments.push({
    deployment_id: i,
    date: format(date),
    environment: Math.random() > 0.2 ? "production" : "staging",
    status: Math.random() > 0.1 ? "success" : "failed"
  });
}

// 🔁 Bugs
for (let i = 1; i <= 300; i++) {
  const dev = developers[Math.floor(Math.random() * developers.length)];

  bugs.push({
    bug_id: i,
    developer_id: dev.id,
    severity: ["low", "medium", "high"][Math.floor(Math.random() * 3)]
  });
}

// 🎯 PERFORMANCE CALCULATION (simple simulation)
developers.forEach(dev => {
  const leadTime = Math.random() * 10;
  const bugRate = Math.random();
  const prCount = Math.floor(Math.random() * 20);

  performance.push({
    developer_id: dev.id,
    team: dev.team,
    manager: dev.manager,
    leadTime,
    bugRate,
    prCount,
    score: getScore(leadTime, bugRate, prCount)
  });
});

// 🤖 AI STYLE INSIGHTS DATA
const ai_insights = performance.map(p => ({
  developer_id: p.developer_id,
  insight:
    p.score < 50
      ? "🚨 Low performance → needs immediate attention"
      : "✅ Good performance → maintain consistency"
}));

// 📦 CREATE EXCEL
const wb = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(issues), "issues");
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(prs), "pull_requests");
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(deployments), "deployments");
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(bugs), "bugs");
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(performance), "performance");
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(ai_insights), "ai_insights");

XLSX.writeFile(wb, "data/data.xlsx");

console.log("🚀 Advanced dataset generated with:");
console.log("✔ 3 months data");
console.log("✔ Teams & Managers");
console.log("✔ Performance scoring");
console.log("✔ AI-style insights");