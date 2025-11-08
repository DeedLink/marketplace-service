import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";
import marketplaceRoutes from "./routes/marketplaceRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/marketplace", marketplaceRoutes);

const PORT = process.env.PORT || 5008;

app.listen(PORT, async () => {
  console.log(`✅ MarketPlace service running on port ${PORT}`);
});