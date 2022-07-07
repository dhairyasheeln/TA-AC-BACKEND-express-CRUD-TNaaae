var express=require('express');
var router=express.Router();
var User=require('../models/user');

/*Routes*/

router.get('/',(req,res)=>{
        User.find({},(err,userList)=>{
        if(err) return next(err);
        console.log(userList);
        res.render('user.ejs',{userList:userList});
    });
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

router.get('/:id',(req,res)=>{
    var id=req.params.id;
    User.findById(id,(err,userByID)=>{
        if(err) return next(err);
        res.render('userDetail.ejs',{user:userByID});
        console.log(userByID);
    })
});

router.get('/:id/edit',(req,res)=>{
    var id=req.params.id;
    User.findById(id,(err,user)=>{
        if(err) return next(err);
        res.render('editUserForm.ejs',{user:user});
    })
});

router.post('/:id',(req,res)=>{
    console.log('post req on ID');
    var id=req.params.id;
    User.findByIdAndUpdate(req.params.id,req.body,(err,book)=>{
        if(err) return next(err);
        res.redirect('/users');
    });
});

/*Export*/
module.exports=router;