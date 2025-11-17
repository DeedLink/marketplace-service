import mongoose from "mongoose";

const marketplaceSchema = new mongoose.Schema({
  marketPlaceId: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String },
  status: { 
    type: String, 
    enum: ["open_to_sale", "pending_sale", "sale_completed", "cancelled"], 
    default: "open_to_sale" 
  },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  deedId: { type: String, required: true },
  tokenId: { type: String, required: true },
  share: { type: Number, required: true },
  description: { type: String },
  listingTypeOnChain: { type: String, enum: ["NFT", "FRACTIONAL"], required: false },
});

export default mongoose.model("Marketplace", marketplaceSchema);
