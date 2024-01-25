const connectDB = require("./db/connect")
require("dotenv").config()
const Product = require("./model/products")

const ProductJson = require("./products.json")

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        // await Product.deleteMany()
        await Product.create(ProductJson)
        console.log("Successfully created")
    } catch (error) {
        console.log(error)
    }
}
start()
