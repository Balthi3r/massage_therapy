import  express from "express";
import { updateUser } from "../controllers/user";
import deleteUser from "../controllers/user";
import getUser from "../controllers/user"

const router =express.router();

//user /admin verification


//update
router.put("/:id",updateUser);
//delete
router.delete("/:id",deleteUser);
//get 
router.delete("/:id",getUser);
export default router