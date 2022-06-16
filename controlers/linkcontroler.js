const Food = require("../models/Food")


const addrequest = async (req, res,)=>{
    let pedido = new Food(req.body)

    try{
        let doc = await pedido.save()
        res.redirect("/")
    }catch(error){
        res.send(`Houve um erro: ${error}`)
    }
}



module.exports = {addrequest}