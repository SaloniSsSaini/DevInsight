function avg(arr) {
  if (!arr.length) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function daysBetween(d1, d2) {
  return (new Date(d2) - new Date(d1)) / (1000 * 60 * 60 * 24);
}

function calculateMetrics(data, developerId) {
  const issues = data.issues.filter(i => i.developer_id === developerId);
  const prs = data.prs.filter(p => p.developer_id === developerId);
  const bugs = data.bugs.filter(b => b.developer_id === developerId);
  const deployments = data.deployments.filter(
    d => d.environment === "production" && d.status === "success"
  );

  const leadTimes = prs
    .filter(p => p.open_date && p.deploy_date)
    .map(p => daysBetween(p.open_date, p.deploy_date));

  const cycleTimes = issues
    .filter(i => i.in_progress_date && i.done_date)
    .map(i => daysBetween(i.in_progress_date, i.done_date));

  return {
    leadTime: Number(avg(leadTimes).toFixed(2)),
    cycleTime: Number(avg(cycleTimes).toFixed(2)),
    bugRate: Number((bugs.length / (issues.length || 1)).toFixed(2)),
    deploymentFreq: deployments.length,
    prThroughput: prs.filter(p => p.status === "merged").length
  };
}

module.exports = calculateMetrics;