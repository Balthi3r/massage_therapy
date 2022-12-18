import user from "../models/user"
import bcrypt from "bcrypt"

//delete
export const deleteUser = async (req,res)=>{
    const id= req.params.id;
    const{currentUserID,currentAdminStatus}=req.body;
    if (currentUserID===id || currentAdminStatus){
        try{
            await user.findByIDAndDelete(id);
            res.status(200).json("Success! User deleted.");
        }catch(error){
            res.status(500).json(error);
        }} else {
            res.status(403).json("You cant delete this profile");
    }
};
//update
export const updateUser = async (req,res)=>{
    const id= req.params.id;
    const{currentUserID,currentAdminStatus,password}=req.body;
    if (currentUserID===id || currentAdminStatus){
    try{
        if(password){
            const salt=await bcrypt.genSalt(10);
            req.body.password=await bcrypt.hash(password,salt);
        }
        const user= await user.findByIDAndUpdate(id,req.body,
          {new:true});
         res.status(200).json(user);
     }catch(error){
    res.status(500).json(error);
     }}else{
        res.status(403).json("access denied");
     }
    }
