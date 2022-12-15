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
        await Uers.findByIDAndDelete(req.params.id);
         res.status(200).json("user is no longer available")
}catch(err){
    next(err);
}
}

export const getAllUsers = async (req,res)=>{
    try{
        await Users.find(req.params.id);
         res.status(200).json(user)
}catch(err){
    next(err);
}
}
export const getUsers = async (req,res)=>{
    try{
        await users.findByID(req.params.id);
         res.status(200).json(user)
}catch(err){
    next(err);
}
}

export const updateUser = async (req,res)=>{
    try{
        const updatedUser=await user.findByIDAndUpdate(req.params.id,
          {$set: req.body},
          {new:true},);
         res.status(200).json(updatedUser)
     }catch(err){
    next(err);
     }
}
