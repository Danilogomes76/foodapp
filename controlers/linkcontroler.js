const Food = require("../models/Food")


const addrequest = async (req, res)=>{
    
    let pedido = new Food(req.body)
    
    try{
        let doc = await pedido.save()
        res.redirect("/")
    }catch(error){
        res.send(`Houve um erro: ${error}`)
    }
    
   
}

const allrequest = async (req, res)=>{
    try {
        let foods = await Food.find({})
        res.render('carrinho', {foods})
    } catch (error) {
        res.send(`Houve um erro: ${error}`)
    }
}

const deletefood = async (req, res)=>{
    let id = req.params.id
    if(!id){
        id = req.body.id
    }

    try {
        await Food.findByIdAndDelete(id)
        res.send(id)
    } catch (error) {
        res.send(`Houve um erro: ${error}`)
    }
}



module.exports = {addrequest, allrequest, deletefood}