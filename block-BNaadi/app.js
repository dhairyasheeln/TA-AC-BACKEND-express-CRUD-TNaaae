var express=require('express');
var mongoose=require('mongoose');
var path=require('path');


/*Connect to database*/
mongoose.connect('mongodb://localhost/userDiaryAss3',(err)=>{
    console.log(err?err:'Connected to database');
});

/*Initiating express application*/
var app=express();

/*Setup View Engine*/
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));

/*Handle form data*/
app.use(express.urlencoded({extended:true}));

/*Middlewares*/

/*Routes*/
app.use('/users',require('./routes/users'));

/*Handlle Error*/
app.use((req,res)=>{
    res.sendDate('Page not found!');
});

app.use((err,req,res,next)=>{
    res.send(err);
});


/*Listening on port 5000*/
app.listen(5000,()=>console.log('Server listeining on port 5000'));