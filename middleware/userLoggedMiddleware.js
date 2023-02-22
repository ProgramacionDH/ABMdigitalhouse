const User = require('../user');

function userLoggedMiddleware(req,res, next){
    res.locals.isLogged = false;
    
    let emailInCookie = req.cookies.userEmail;
  
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
 

    next();
    }
    
    module.exports = userLoggedMiddleware;