const express = require("express");
const cors = require("cors");
const metricsRoutes = require("./routes/metricsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DevInsight Backend Running 🚀");
});

app.use("/api", metricsRoutes);

// ✅ FIX HERE
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});