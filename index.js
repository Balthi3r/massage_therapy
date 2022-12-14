import express from "express"
import dotenv from "env"
import mongoose from "mongoose"
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

app.listen(3000,()=>{
    connect()
    console.log("connected0")
})