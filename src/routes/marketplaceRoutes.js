import express from "express";
import {
  getAllMarketplaces,
  getMarketplaceById,
  createMarketplace,
  updateMarketplace,
  deleteMarketplace
} from "../controllers/marketplaceController.js";

const router = express.Router();

router.get("/", getAllMarketplaces);
router.get("/:id", getMarketplaceById);
router.post("/", createMarketplace);
router.put("/:id", updateMarketplace);
router.delete("/:id", deleteMarketplace);

export default router;
