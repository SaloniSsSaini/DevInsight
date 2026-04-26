function generateInsights(metrics) {
  const insights = [];
  const actions = [];

  if (metrics.leadTime > 7) {
    insights.push("⏳ High lead time indicates slow delivery");
    actions.push("Reduce PR size and improve code review speed");
  }

  if (metrics.bugRate > 0.3) {
    insights.push("🚨 High bug rate detected");
    actions.push("Increase automated testing and QA coverage");
  }

  if (metrics.prThroughput < 10) {
    insights.push("📉 Low PR throughput");
    actions.push("Increase development activity and collaboration");
  }

  if (metrics.deploymentFreq < 5) {
    insights.push("🚀 Low deployment frequency");
    actions.push("Adopt CI/CD for faster releases");
  }

  return { insights, actions };
}

module.exports = generateInsights;