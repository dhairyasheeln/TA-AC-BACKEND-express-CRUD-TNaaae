var express=require('express');
var mongoose=require('mongoose');
var path=require('path');

/*Connect to MangoDB database*/

mongoose.connect('mongodb://localhost/userDiary',(err)=>{
    console.log(err?err:'Connected to Database');
});

/*Initiating express app*/
var app=express();

/*MiddleWares*/

/*Setup view engine*/
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));

/*Setup public directory*/
app.use(express.static(path.join(__dirname,'public')));

/*Caputure Form Data*/
app.use(express.urlencoded({extended:false}));

/*Routing Middlewares*/
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));


/*Error Handling*/
app.use((req,res)=>{
    res.send('Page not found!');
});

app.use((err,req,res,next)=>{
    res.send(err);
})

/*Listen*/
app.listen(4000,()=>console.log('Server listening on port 4000'));