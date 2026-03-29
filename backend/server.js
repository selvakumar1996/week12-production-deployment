const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Enable CORS
app.use(cors());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend 🚀" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});