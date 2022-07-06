var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema=new Schema({
    name:{type:String,required:true},
    age:{type:Number,default:18},
    address:{type:String},
    mobile:{type:Number}
});

var User=mongoose.model('User',userSchema);

module.exports=User;