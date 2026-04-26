export const getTrend = (current, prev) => {
  if (!prev) return "→";
  if (current > prev) return "⬆";
  if (current < prev) return "⬇";
  return "→";
};