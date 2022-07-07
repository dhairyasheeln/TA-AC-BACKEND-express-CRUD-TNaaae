var express=require('express');
var router=express.Router();
var User=require('../models/user');

/*Routes*/

router.get('/new',(req,res)=>{
    res.render('userForm.ejs');
});

router.post('/',(req,res,next)=>{
    User.create(req.body,(err,user)=>{
        if(err) return next(err);
        res.redirect('/users/'+user._id);
    });
});

router.get('/',(req,res)=>{
    User.find({},(err,users)=>{
        if(err) return next(err);
        res.render('users.ejs',{users,users});
    });
});

router.get('/:id',(req,res)=>{
    var id=req.params.id;
    console.log('By Id');
    User.findById(id,(err,user)=>{
        if(err) return next(err);
        res.render('userDetail.ejs',{user});
    })
})

router.get('/:id/edit',(req,res)=>{
    var id=req.params.id;
    User.findById(id,(err,user)=>{
        if(err) return next(err);
    res.render('userEditForm.ejs',{user:user});
    })
})

router.post('/:id',(req,res)=>{
    var id=req.params.id;
    User.findByIdAndUpdate(id,req.body,(err,userUpdated)=>{
        if(err) return next(err);
        res.redirect('/users/'+id);
    });
});

router.get('/:id/delete',(req,res)=>{
    var id=req.params.id;
    User.findByIdAndDelete(id,(err,deletedUser)=>{
        if(err) return next(err);
        res.redirect('/users');
    });
});

module.exports=router;