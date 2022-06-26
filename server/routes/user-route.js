import express from "express";
import { Signup } from "../controllers/user-signup.js";
import { Login } from "../controllers/user-login.js";
import { expressAdapter } from "../express-adapter.js";
import dotenv from "dotenv";
const userRouter = express.Router();

dotenv.config();

const signup = new Signup();
const login = new Login();
userRouter.post("/signup", expressAdapter(signup));
userRouter.post("/login", expressAdapter(login));

export default userRouter;
