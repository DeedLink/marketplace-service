import Marketplace from "../models/marketplaceModel.js";

export const getAllMarketplaces = async (req, res) => {
  const data = await Marketplace.find();
  res.json(data);
};

export const getMarketplaceById = async (req, res) => {
  const data = await Marketplace.findById(req.params.id);
  res.json(data);
};

export const createMarketplace = async (req, res) => {
  const data = await Marketplace.create(req.body);
  res.status(201).json(data);
};

export const updateMarketplace = async (req, res) => {
  const data = await Marketplace.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(data);
};

export const deleteMarketplace = async (req, res) => {
  await Marketplace.findByIdAndDelete(req.params.id);
  res.json({ message: "Marketplace entry deleted" });
};

export const getMarketplaceByDeedId = async (req, res) => {
  const { deedId } = req.params;
  const data = await Marketplace.find({ deedId });
  res.json(data);
};

export const getMarketplaceByTokenId = async (req, res) => {
  const { tokenId } = req.params;
  const data = await Marketplace.find({ tokenId });
  res.json(data);
};

