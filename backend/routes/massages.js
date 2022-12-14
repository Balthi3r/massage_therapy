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
});
//update
router.put("/:id",async (req,res)=>{
    const updateMassages= new massages (req.body)
    try{
       await Massages.findByIDAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json(updatemassage)

    }catch(err){
        res.status(500).json(err)
    }
});

//delete
router.delete("/:id",async (req,res)=>{
    try{
       await Massages.findByIDAndDelete(req.params.id);
        res.status(200).json("massage is no longer being done")
    }catch(err){
        res.status(500).json(err)
    }
});

//get 
router.delete("/:id",async (req,res)=>{
    try{
       await Massages.findByID(req.params.id);
        res.status(200).json(massage)
    }catch(err){
        res.status(500).json(err)
    }
});

//get all
 
router.get("/",async (req,res)=>{
    try{
       await Massages.find(req.params.id);
        res.status(200).json(massage)
    }catch(err){
        res.status(500).json(err)
    }
});

export default router;