
const fs = require('fs'); 

var productos = JSON.parse(fs.readFileSync(__dirname + "/../database/productosBD.json"));


const productosController = {
    
    create : function (req, res, next){
        res.render('productosCrear')
    },
  
    store : function(req, res, next){
        
        productos.push(req.body);
       
        productosJSON = JSON.stringify(productos);
       
        fs.writeFileSync(__dirname + "/../database/productosBD.json", productosJSON);
        
        res.send("Se registro el producto " + req.body.nombre);
    },
    
    edit: function(req,res,next){
       
        var idProductos = req.params.id;
       
        var productoFound;
        
        for (var i=0; i<productos.length; i++){
            
            if (productos[i].id == idProductos){
                productoFound = productos[i];
                break;
            }
        
        }if (productoFound) {
            res.render("productosEditar", {productoFound});
     
        }else{
            res.send("Producto inexistente")
        }
    },
 
    update:function(req,res,next){
       
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
            
            res.send("Producto eliminado :-(");
            
        }else{
            res.send("Producto inexistente")
        }
    }
}

module.exports = productosController