const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// user schema or Document structure

const msgSchema = new mongoose.Schema({
    emails : {
        type : String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    }
})                                                                                                   

// create Model
const Message = new mongoose.model("MESSAGE",msgSchema);
module.exports = Message;


