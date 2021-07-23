const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const login = new Schema({
    id:{type:String,required:false},
    username:{type:String,required:false},
    name:{type:String,required:true},
    email:{type:String,required:true}
    },{
        timestamps:true,
});


const login_db = mongoose.model('login_db',login);

module.exports=login_db;
