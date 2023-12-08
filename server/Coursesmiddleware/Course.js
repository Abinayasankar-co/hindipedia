const express = require('express');
const router = express();
const courselist = require('../models/couseschema.js');

router.post('/',async(req,res)=>{
  try{
    res.send("Hello welcome to the couses")
    const coursename = req.body.coursename
    const courseduration = req.body.courseduration
    const intake = req.body.intake
    const instructorname = req.body.instructorname
    const instructorcontact = req.body.instructorcontact
    const noofvideos = req.body.noofvideos
    
    const createcourselist = new courselist({
       coursename:coursename,
       courseduration:courseduration,
       intake:intake,
       instructorname:instructorname,
       instructorcontact:instructorcontact,
       noofvideos:noofvideos
    });
    const cousecreated = await createcourselist.save();
    console.log(cousecreated);
  }catch(err){
    res.send("OOPS! Error occured")
  }
})

module.exports = router;