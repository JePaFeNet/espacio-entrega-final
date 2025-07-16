import * as Service from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
  const products = await Service.getAllProducts();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Service.getProductById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
