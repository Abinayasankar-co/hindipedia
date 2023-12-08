const express  = require('express');
const router = express();
const cenroll = require('../models/userroll.js')

router.post('/senroll',async(req,res)=>{
    res.send("Welcome to Hindipedia Pls! enroll here");
    try{
    const stuname = req.body.stuname;
    const crenroll = req.body.crenroll;
    const Date = req.body.Date;
    const Dateofexam = req.body.Dateofexam;

    const enroll = new cenroll({
        stuname:stuname,
        crenroll:crenroll,
        Date:Date,
        Dateofexam:Dateofexam
    });

    const createenroll = await enroll.save();
    console.log(createenroll);
    res.status(200).send(`You have been enrolled in ${cenroll}`)
    
    
    }catch(err){
        res.status(400).send("Oops!Error Ocuured");
    }
});


module.exports= router;