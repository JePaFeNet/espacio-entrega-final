import { Router } from "express";
const router = Router();

import {
  getAllProducts,
  getProductById,
} from "../controllers/products.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

router.get("/products", getAllProducts);
router.get("/products/:id", auth, getProductById);

export default router;
