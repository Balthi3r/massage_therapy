import user from "../models/user";
import bcrypt from "bcrypt"

//register new user
export const registerUser =async(req,res)=>{
        const salt= await bcrypt.genSalt(10);
        const hash= await  bcrypt.hash(password, salt);


        const newUser= new User({
            username,
            firstname,
            lastname,
            password:hash,
        })
    try{
        await newUser.save()
        res.status(200).send("New Created user")
    }catch(err){
       res.status(500).json
    }
}
//login
export const loginUser =async(req,res)=>{
        const {username,password}=req.body
      try{
        const user= await UserModel.findOne({username:username})
        if(user){
            const validity= await bcrypt.compare(password,user.password)

            validity? res.status(200).json(user):res.status(400).json(incorrectpassword)
        }
        else{
            res.status(404).json("user does not exist")
        }
      }catch(error){
        res.status(500).json()
    }
}
