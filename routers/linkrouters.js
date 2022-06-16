const express = require("express")
const router = express()

router.get("/", (req,res)=>{
    res.render('index')
})

router.get("/carrinho",(req, res)=>{
    res.render('carrinho')
})

router.get("/sobre",(req, res)=>{
    res.render('sobre')
})

module.exports = router