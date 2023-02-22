
const fs = require('fs'); 

const productos = JSON.parse(fs.readFileSync(__dirname + "/../../database/productosBD.json"));


const productosController = {
    
    create : function (req, res){
        res.render('usuariosCrear')
    },
  
    store : function(req, res){
        
        productos.push(req.body);
       
        productosJSON = JSON.stringify(productos);
       
        fs.writeFileSync(__dirname + "/../database/productosBD.json", productosJSON);
        
        res.send("Se registro el usuario " + req.body.nombre);
    },
    
    edit: function(req,res){
       
        var idProductos = req.params.id;
       
        var productoFound;
        
        for (var i=0; i<productos.length; i++){
            
            if (productos[i].id == idProductos){
                productoFound = productos[i];
                break;
            }
        
        }if (productoFound) {
            res.render("usuariosEditar", {productoFound});
     
        }else{
            res.send("Usuario inexistente")
        }
    },
 
    update:function(req,res){
       
        var idProductos = req.params.id;
       
        var productoEditado = productos.map(function(prod){
            
            if(prod.id == idProductos){
                return req.body;
            }
            
            return prod;
        });
        
        productoEditadoJSON = JSON.stringify(productoEditado);
        
        fs.writeFileSync(__dirname + "/../database/productosBD.json", productoEditadoJSON);
        
        res.redirect("/productos/edit/" + req.params.id)
    },
    
    destroy : function(req, res, next){
        
        var idProductos = req.params.id;
    
        var productoFound;
      
        for (var i=0; i<productos.length; i++){
           
            if (productos[i].id == idProductos){
                productoFound = productos[i];
                break;
            }
       
        }if (productoFound) {
           
            var productoEliminado = productos.filter(function(producto){
                return producto.id != idProductos;
            });
           
            productoEliminadoJSON = JSON.stringify(productoEliminado);
           
            fs.writeFileSync(__dirname + "/../database/productosBD.json", productoEliminadoJSON);
            
            res.send("Usuario eliminado :-(");
            
        }else{
            res.send("Usuario inexistente")
        }
    }
}

module.exports = productosController