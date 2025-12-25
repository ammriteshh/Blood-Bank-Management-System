import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import donorRoutes from "./routes/donorRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import facilityRoutes from "./routes/facilityRoutes.js";


dotenv.config();
const app = express();

app.use(express.json());

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}));

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Blood Bank Management System API",
    version: "1.0.0",
    endpoints: {
      auth: "/api/auth",
      donor: "/api/donor",
      facility: "/api/facility",
      admin: "/api/admin",
      bloodLab: "/api/blood-lab",
      hospital: "/api/hospital",
    },
  });
});

// 🧩 Routes

app.use("/api/auth", authRoutes);


app.use("/api/donor", donorRoutes);

app.use("/api/facility", facilityRoutes);

app.use("/api/admin", adminRoutes);



import bloodLabRoutes from "./routes/bloodLabRoutes.js";
app.use("/api/blood-lab", bloodLabRoutes);


import hospitalRoutes from "./routes/hospitalRoutes.js";
app.use("/api/hospital", hospitalRoutes);


// 🗄️ DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

// Export app for Vercel serverless functions
export default app;

// Only start server if not in serverless environment (Vercel)
if (process.env.VERCEL !== "1") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
}
