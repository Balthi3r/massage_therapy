import massage from "../models/massages"

export const createMassage = async (req,res,next)=>{
        const newMassages= new massages (req.body)
    try{
        const savedMassage= await newMassages.save()
        res.status(200).json(savedmassage)

    }catch(err){
        next(err);
    }
}

export const deleteMassage = async (req,res)=>{
    try{
        await Massages.findByIDAndDelete(req.params.id);
         res.status(200).json("massage is no longer being done")
}catch(err){
    next(err);
}
}

export const getAllMassages = async (req,res)=>{
    try{
        await Massages.find(req.params.id);
         res.status(200).json(massage)
}catch(err){
    next(err);
}
}
export const getMassage = async (req,res)=>{
    try{
        await Massages.findByID(req.params.id);
         res.status(200).json(massage)
}catch(err){
    next(err);
}
}

export const updateMassage = async (req,res)=>{
    try{
        const updatedMassage=await Massage.findByIDAndUpdate(req.params.id,
          {$set: req.body},
          {new:true},);
         res.status(200).json(updatemassage)
     }catch(err){
    next(err);
     }
}
