import * as mongoose from "mongoose"
import express from "express";
import { connectMongoose } from "./util/connectMongoose.js"
import "dotenv/config";

const app =express();

const PORT=process.env.PORT || 3000

if(await connectMongoose()) {
    app.listen(PORT,()=>{
        console.log(`verbunden an port ${PORT}`);
    })
}else{
    console.log("Verbindung zu mongodb nicht möglich");
}