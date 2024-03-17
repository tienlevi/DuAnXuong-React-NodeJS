import express from "express";
import morgan from "morgan";
import router from "./router/product";
import auth from "./router/auth";
import connectDB from "./config/db";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(morgan("dev"));
connectDB(process.env.DB_URL);

app.use(express.json());
app.use("/api", router);
app.use("/api", auth);

export const viteNodeApp = app;
