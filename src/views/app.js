const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection= require('express-myconnection');

const app = express();

//importing routes
const peliculaRoutes = require('./routes/pelicula');



//Settings
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(_dirname,'views'));

// middlewares
app.use(morgan('dev'));
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'contraseña',
    port:3306,
    database: 'crudnodejsmysql'
}, 'single'));

app.use(express.urlencoded({extended: false}));

// routes
app.use('/', peliculaRoutes);

// static files

app.use(express.static(path.join(_dirname, 'public')));


app.listen(3000,  () => {
    console.log('Server on port 3000');
});