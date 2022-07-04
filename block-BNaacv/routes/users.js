var express=require('express');
var router=express.Router();

//..................Routes

router.get('/',(req,res)=>{
    res.render('users.ejs')
});

router.get('/new',(req,res)=>{
    res.render('userForm.ejs');
});

router.get('/:id',(req,res)=>{
    res.render('singleUser.ejs');
});



module.exports=router;




