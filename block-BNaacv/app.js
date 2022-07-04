var express=require('express');
var path=require('path');
var app=express();

//Set view engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'./views'));

//Middlewares
app.use('/users',require('./routes/users'));


app.listen(3636,()=>console.log('Server listening on port 3636'));