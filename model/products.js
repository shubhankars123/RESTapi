
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"],
    },
    featured: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        default: 4.9,
        required: [true, "Rating must be provided"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    company: {
        type: String,
        enum: ["apple", "samsung", "dell", "mi", "redmi"]
    },
})

module.exports = mongoose.model("Product", productSchema)


