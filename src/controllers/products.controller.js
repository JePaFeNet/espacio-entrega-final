import * as Service from "../services/products.service.js";

export const getAllProducts = (req, res) => {
  const products = Service.getAllProducts();
  res.json(products);
};
