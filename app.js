const express = require("express");
const app = express();
const connectDB = require("./db/connect.js")
const productsRouter = require("./routes/products.js")
require("dotenv").config();

app.get("/", (req, res) => {
    res.send("Hi, I'm Live");
});

// Middleware to set the router
app.use("/api/products", productsRouter)

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
};

start();
