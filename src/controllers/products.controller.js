import * as Service from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
  const products = await Service.getAllProducts();
  res.json(products);
};
