var express=require('express');
var router=express.Router();


//.......................................Routes

router.get('/new',(req,res)=>{
    res.send('Student Form');
});

router.post('/',(req,res)=>{
    res.send('Saving student data');
});

router.get('/',(req,res)=>{
    res.render('students.ejs',{list:["ankit", "suraj", "prashant", "ravi"]});
});

router.get('/:id',(req,res)=>{
    res.render("studentDetail", {
        student: { name: "rahul", email: "rahul@altcampus.io" },
      });
});

module.exports=router;