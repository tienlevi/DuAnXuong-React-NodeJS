import express from "express";
import { SignUp } from "../controllers/Auth";
const auth = express.Router();
auth.post("/signup", SignUp);
export default auth;
