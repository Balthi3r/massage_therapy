import user from "../models/user";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register =async(req,res,next)=>{
    try{
        const salt= bcrypt.genSaltSync(10);
        const hash= bcrypt.hashSync(req.body.password, salt);


        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })

        await newUser.save()
        res.status(200).send("New Created user")
    }catch(err){
        next(err)
    }
}
export const login =async(req,res,next)=>{
    try{
        const user=await User.findOne({username:req.body.username})
      
        if(!user)return next(createError(404, "user not found"))

        const isPasswordCorrect= await bcrypt.compare(req.body.password, user.pass)
       
        if(!isPasswordCorrect)return next(createError(404, "Wrong password/user name"))
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
}
