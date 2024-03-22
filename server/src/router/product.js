import express from "express";
import {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  editProduct,
} from "../controllers/ProductController";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:slug", getProductById);
router.post("/products", addProduct);
router.put("/products/:id", editProduct);
router.delete("/products/:id", deleteProduct);
export default router;
