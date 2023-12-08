const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const userroll = mongoose.Schema({
    "stuname":{
        type:String,
        required:true,
    },
    "crenroll":{
        type:String,
        required:true
    },
    "Date":{
        type:String,
        required:true
    },
    "Dateofexam":{
        type:String,
        required:true
    }
},{timestamps:true});

const cenroll = new mongoose.model('COURSEENROLL',userroll);
module.exports = cenroll;

