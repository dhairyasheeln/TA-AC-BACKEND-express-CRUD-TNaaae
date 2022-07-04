var express=require('express');
var path=require('path');

//......................................Mount express on app variable
var app=express();


//.......................................Set view engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'/views'));


//.......................................Middlewares
app.use('/students',require('./routes/students'));


//.......................................Listening on port 3434
app.listen(3434,()=>console.log('Server listening on port 3434'));