const express = require('express');
const app = express();
const port = 5000;
const expressLayouts = require('express-ejs-layouts');
const sassMiddleware = require('node-sass-middleware')
const mongoose = require('mongoose');
const db = require('./configs/mongoose')
const Habit = require('./models/habit')

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./assets"))
app.use(expressLayouts);

app.set('layout extractStyles',true)
app.set('layout extractScripts',true)
app.set('view engine', 'ejs');
app.set("views" , "./views");



app.use('/', require('./routes'))

app.listen(5000, (err)=>{
    if(err){
        console.log("error in running server",err)
    }
    console.log("server running successfully on port", port)
})



