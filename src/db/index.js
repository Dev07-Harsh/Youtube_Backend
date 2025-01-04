import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async ()=>{
    try{
       const ConnectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`MongoDB Connected!! DB HOST: ${ConnectionInstance.connection.host}`);
        // app.on("Error", (error)=>{
        //     console.log("Error: ",error);
        //     throw error
        // })
        // app.listen(process.env.PORT,()=>{
        //     console.log(`Server is running on port: ${process.env.PORT}`);
        // })

    }catch(error){
        console.log("Mongo Db connection error");
        process.exit(1)
    }
}

export default connectDB