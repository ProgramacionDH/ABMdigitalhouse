const express = require("express");
const path = require("path");
const methodOverride = require('method-override');
const session = require('express-session');

const {sequelize} = require ('./database/models') 
sequelize.sync({alter:false}).then(()=> console.log ('ModeloSincronizados'));

const app = express();

app.use(express.json());
app.use(methodOverride ("_method"));


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views')); 

app.use(express.urlencoded({extended:true}));

app.use(session({
  secret: 'shhh, es un secreto',
  resave:false ,
  saveUninitialized: false,
}));


const apiRoutes = require('./routes/apiRouter')
app.use('/', apiRoutes)

const userRouter = require('./src/routes/userRouter');

app.use('/user', userRouter); 

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));

app.use(methodOverride ("_method")); 


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));
app.use((req, res, next) => {
    res.status(404).render("not-found")
  });


app.listen(3003, () => {
  console.log("servidor corriendo puerto 3002");
});


module.exports = app;