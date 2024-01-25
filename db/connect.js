const mongoose = require("mongoose")
// MONGO_URI = "mongodb+srv://shubhankarapi:duuvVsoVYSLsKdwx@shubhankarapi.m5jptrt.mongodb.net/"

const connectDB = (uri)=>{
    console.log("Database connected")
    return mongoose.connect(`${uri}myapidb`);
}

module.exports = connectDB;