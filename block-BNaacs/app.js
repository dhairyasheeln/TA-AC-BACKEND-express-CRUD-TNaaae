var express=require('express');
var path=require('path');
var app=express();

function logger(req,res,next){
    console.log(req.method,req.url);
    next();
}

app.use(logger);

//Set View Engine

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use((req,res,next)=>{
    res.locals={message:"We are here to guide you through the course"};
    next();
})

app.get('/',(req,res)=>{
    var skills=['HTML','CSS','React','Node'];
    var details={
        location:"Dharamshala",
        description:"Full stack Institute"
    }
    res.render('index',{name:"AltCampus",skills:skills,details:details});
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.listen(3000,()=>console.log('Server listening on port 3000'));