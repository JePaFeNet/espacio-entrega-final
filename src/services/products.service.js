import * as Model from "../models/products.model.js";

export const getAllProducts = async () => {
  return await Model.getAllProducts();
};

export const getProductById = async (id) => {
  return await Model.getProductById(id);
};

export const createProduct = async (newProduct) => {
  return await Model.createProduct(newProduct);
};

export const updateProduct = async (id, updatedProductData) => {
  return await Model.updateProduct(id, updatedProductData);
};

export const deleteProduct = async (id) => {
  return await Model.deleteProduct(id);
};
