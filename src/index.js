import dotenv from "dotenv"
dotenv.config({
    path : './env'
})

import connectDB from "./db/index.js";


connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Error:",error);
        throw error
    })
    
    app.listen(process.env.PORT || 8000,()=>{
        console.log("Server is running on port 8000");
     })

})

.catch((err) => {
    console.log("Mongo db connection failed !",err);
})








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