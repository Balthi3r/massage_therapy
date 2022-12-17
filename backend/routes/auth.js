import  express from "express";
import {login, register } from "../controllers/auth";

const router =express.router();

router.get("/register", register)
router.get("/login", login)


export default router