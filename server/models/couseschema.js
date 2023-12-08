const { Timestamp } = require('mongodb');
const mongoose = require('mongoose')

const courseschema = mongoose.Schema({
   coursename : {
    type:String,
    required:true,
    unique:true
   },
   courseduration:{
    type:String,
    required:true
   },
   intake:{
      type:[String]
   },
   instructorname:{
    type:String,
    required:true
   },
   instructorcontact:{
    type:String,
    required:true
   },
   noofvideos:{
    type:Number,
    required:true
   },
   intakeno:[
      {
         number : Number ,
         unavailableDates:{type:[Date]}
      }
   ]

},{timestamps:true});



const courselist = new mongoose.model("COURSELIST",courseschema);
module.exports = courselist;
