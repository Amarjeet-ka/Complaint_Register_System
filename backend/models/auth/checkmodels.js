const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CheckUserSchema = new Schema({
    email:{
        type:String,
        requied:true,
    },
    password:{
        type:String,
        requied:true
    }
})

const CheckUser = mongoose('validate',CheckUserSchema);

module.exports = CheckUser;