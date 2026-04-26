export const getColor = (key, value) => {
  if (key === "bugRate") return value > 0.3 ? "text-red-500" : "text-green-500";
  if (key === "leadTime") return value > 7 ? "text-red-500" : "text-green-500";
  return "text-blue-500";
};