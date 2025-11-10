import express from "express";
import {
  getAllMarketplaces,
  getMarketplaceById,
  createMarketplace,
  updateMarketplace,
  deleteMarketplace,
  getMarketplaceByDeedId,
  getMarketplaceByTokenId
} from "../controllers/marketplaceController.js";

const router = express.Router();

router.get("/", getAllMarketplaces);
router.get("/:id", getMarketplaceById);
router.post("/", createMarketplace);
router.put("/:id", updateMarketplace);
router.delete("/:id", deleteMarketplace);

router.get("/deed/:deedId", getMarketplaceByDeedId);
router.get("/token/:tokenId", getMarketplaceByTokenId);

export default router;
