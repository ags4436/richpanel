const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const message = new Schema({
    message:{type:String,required:true},
    },{
        timestamps:true,
});


const message_db = mongoose.model('message_db',message);

module.exports=message_db;
