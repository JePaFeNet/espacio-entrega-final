import { Router } from "express";
const router = Router();

import { getAllProducts } from "../controllers/products.controller.js";

router.get("/products", getAllProducts);

export default router;
