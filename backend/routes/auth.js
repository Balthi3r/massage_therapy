import  express from "express";
import { register } from "../controllers/auth";

const router =express.router();

router.get("/register", register)
router.get("/login", login)


export default router