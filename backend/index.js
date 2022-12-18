import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./backend/routes/auth"
import usersRoute from "./backend/routes/users"
import bodyParser from "body-parser"

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
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));


app.use(cookieParser());
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/massages", massagesRoute)

