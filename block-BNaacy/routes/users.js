var express=require('express');
var router=express.Router();
var User=require('../models/user');

/*Routes*/

router.get('/',(req,res)=>{
    res.render('user.ejs');
});

router.get('/new',(req,res)=>{
    res.render('addUser.ejs');
});

router.post('/',(req,res)=>{
    console.log(req.body);
    User.create(req.body,(err,userCreated)=>{
        if(err) {
            res.redirect('/users/new')
            return next(err);
        }
        res.redirect('/');
    });

});

/*Export*/
module.exports=router;