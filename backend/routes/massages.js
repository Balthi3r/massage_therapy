import  express from "express";
import { deleteMassage, getAllMassages, getMassage } from "../controllers/massage";
import massages from "../models/massages"

const router =express.router();

//create
router.post("/",createMassage);
//update
router.put("/:id",updateMassage);
//delete
router.delete("/:id",deleteMassage);
//get 
router.delete("/:id",getMassage);
//get all
router.get("/",getAllMassages);


export default router;