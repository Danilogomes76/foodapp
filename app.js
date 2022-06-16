const express = require("express")
const app = express()
const PORT = 3000
const mongoose = require("mongoose")

const linkrouters = require("./routers/linkrouters")

mongoose.connect("mongodb://localhost/foods")

let db = mongoose.connection

db.on("erro", ()=>{console.log("There was an error")})
db.once("open", ()=>{console.log("bank loaded");})

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use("/style", express.static(__dirname + "/style"))
app.use("/images", express.static(__dirname + "/images"))
app.use("/script", express.static(__dirname + "/script"))

app.use("/", linkrouters)

app.listen(PORT,()=>{
    console.log(`Server running in port: ${PORT}`)
})