import express from "express";
import morgan from "morgan";
import router from "./router/product";
import auth from "./router/auth";
import connectDB from "./config/db";
import dotenv from "dotenv";
import cors from "cors";
import categoryRouter from "./router/category";

dotenv.config();
const app = express();
app.use(morgan("dev"));
connectDB(process.env.DB_URL);
app.use(cors());

app.use(express.json());
app.use("/api", router);
app.use("/api", auth);
app.use("/api", categoryRouter);

export const viteNodeApp = app;
