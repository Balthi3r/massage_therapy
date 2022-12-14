import  express from "express";
import massages from "../models/massages"

const router =express.router();

//create
router.post("/",async (req,res)=>{
    const newMassages= new massages (req.body)
    try{
        const savedMassages= await newMassages.save()
        res.status(200).json(savedmassage)

    }catch(err){
        res.status(500).json(err)
    }
})
//update
router.put("/:id",async (req,res)=>{
    const updateMassages= new massages (req.body)
    try{
        const updateMassages= await Massages.findByIDAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json(updatemassage)

    }catch(err){
        res.status(500).json(err)
    }
})

//delete


export default router