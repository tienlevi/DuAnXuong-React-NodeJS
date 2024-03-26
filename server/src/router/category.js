import { Router } from "express";
import {
  addCategory,
  deleteCategory,
  editCategory,
  getCategory,
  getCategoryById,
} from "../controllers/Category";

const categoryRouter = Router();
categoryRouter.get("/categories", getCategory);
categoryRouter.get("/categories/:id", getCategoryById);
categoryRouter.delete("/categories/:id", deleteCategory);
categoryRouter.put("/categories/:id", editCategory);
categoryRouter.post("/categories", addCategory);
export default categoryRouter;
