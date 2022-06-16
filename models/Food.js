const mongoose = require("mongoose")

const FoodsSchema = new mongoose.Schema({
    request: {type:String},
    quantity: {type:Number},
})

module.exports = mongoose.model("Foods", FoodsSchema)