import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./backend/routes/auth"
import massagesRoute from "./backend/routes/massages"
import usersRoute from "./backend/routes/users"
import cookieParser from "cookie-parser"

const app= express()
dotenv.config

const connect= async() =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connecting to mongo")
    }catch(error){
        throw error;
    }
};

//middleware
app.use(cookieParser());
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/massages", massagesRoute)

app.listen(5500,()=>{
    connect()
    console.log("connected0")
})