const express = require("express")
const router = express()
const linkcontroler = require("../controlers/linkcontroler")
const multer = require("multer")
const upload = multer({dest: false})

router.get("/", (req,res)=>{res.render('index')})

router.post("/", upload.single('request'), linkcontroler.addrequest)

router.get("/carrinho",linkcontroler.allrequest)

router.get("/sobre",(req, res)=>{
    res.render('sobre')
})

router.delete("/:id", linkcontroler.deletefood)

module.exports = router