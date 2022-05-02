let CarrinhoController = {
    removeItem: function(){},
    getItem: function(){},
    addItem: function(req, res){
       let {item} = req.params
       res.send(`Item "${item}" Adicionado com sucesso.`)
    }
 }
 
 module.exports = CarrinhoController