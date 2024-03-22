import express from "express";
import { SignUp } from "../controllers/Auth.js";
const auth = express.Router();
auth.post("/signup", SignUp);
export default auth;
