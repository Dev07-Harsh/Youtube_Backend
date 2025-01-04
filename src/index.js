import dotenv from "dotenv"
dotenv.config({
    path : './env'
})

import connectDB from "./db/index.js";


connectDB()









/*
import express from "express"
const app=express()


(async()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("Error", (error)=>{
            console.log("Error: ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port: ${process.env.PORT}`);
        })

    }catch(error){
        console.error("Error: ",error)
        throw err
    }

})*/