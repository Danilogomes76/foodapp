const mongoose = require("mongoose")

const requestScheem = new mongoose.Schema({
    request: {type:String},
    quantity: {type:Number}
})

module.exports = mongoose.model("request", requestScheem)