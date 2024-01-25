const mongoose = require("mongoose")


const connectDB = (uri)=>{
    console.log("Database connected")
    return mongoose.connect(`${uri}myapidb`);
}

module.exports = connectDB;