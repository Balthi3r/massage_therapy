import user from "../models/user";
import bcrypt from "bcrypt"

// Register new user
export const registerUser = async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass
    const newUser = new user({
      firstname,
      lastname,
      password
    });

    try {
      await newUser.save();
      res.status(200).json(newUser)
    }catch (error){
    res.status(500).json(error)
  }
}

//login
export const loginUser =async(req,res)=>{
        const {username,password}=req.body
      try{
        const user= await user.findOne({username:username})
        if(user){
            const validity= await bcrypt.compare(password,user.password)

            validity? res.status(200).json(user):res.status(400).json('incorrect password')
        }
        else{
            res.status(404).json("user does not exist")
        }
      }catch(error){
        res.status(500).json(error)
    }
}
