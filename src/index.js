 import mongoose from "mongoose";
 import { DB_NAME } from "./constant.js";



import dotenv from "dotenv";

import connectDB from "./db/index.js";
dotenv.config({
    path: '.env'
})

connectDB()

.then(() => {
    app.listen(process.env.PORT || 5000, ()=> {
        console.log(`app is listen on port : ${process.env.PORT || 5000}`);
    })
})
.catch((error) => {
    console.log("Error connecting to MongoDB:", error);  // Log the error for debugging purposes
})






















// import express from "express";
//   const app = express();
// (async () => {
//     try {
//           await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, )
//           app.on("error", (error) => {            console.error("Error connecting to MongoDB:", error);
//           });
//           console.log("Connected to MongoDB successfully");

//        app.listen(process.env.PORT, () => {
//         console.log (`app is listen on port ${process.env.PORT}`);
//        })

//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);  
//         throw error; // Rethrow the error to be handled by the caller 
//     }
// }) ();