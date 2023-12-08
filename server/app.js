// Import all dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');
const methodOverride = require('method-override')

//Middleware Dependencies
const clist = require('./Coursesmiddleware/Course.js');
const Enroll = require('./Coursesmiddleware/Enroll.js');
const search = require('./controllers/serach.js')
const course = require('./controllers/course.js')

//Database 
const printUsername = require('./database/database.js');
const createReservationDocument = require('./database/transaction.js')

const app = express();
//configure ENV file & Require connection file
dotenv.config({path:'./config.env'});
require('./dev/conn');
const port = process.env.PORT;

// Require Modal
const Users = require('./models/userSchema.js');
const test = require('./models/userSchema.js');
const Message = require('./models/messageschema.js');

//These Method is used to sent data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieparser());
app.use(express.static("../demoweb/src"));

const errorformatter = e => {
    e.indexOf(':')+1
}

//Registration
app.post('/signup',async(req,res)=>{
    try{
        const emails  = req.body.emails;
        const passwords = req.body.passwords;

        const  createUser = new test({
            emails : emails,
            passwords: passwords
        });
        
        const created = await createUser.save();
        console.log(created);
        res.sendStatus(200);
        
    }catch(error){
         res.send(error);
    }
})



//Login 
app.post('/login',async(req,res)=>{
    try{
        const emails = req.body.emails;
        const passwords = req.body.passwords;
        const user = await test.findOne({emails:emails});
        if(user){
            const isMatch = await bcryptjs.compare(passwords, user.passwords);
            if(isMatch){
                const token = await user.generateToken();
                res.cookie("jwt",token,{
                    expires : new Date(Date.now() + 86400000),
                    httpOnly:true
                })
                res.send("LoggedIN");

                //const {passwords, isAdmin,...otherDetails} = user;
                //res.status(200).json({...otherDetails});
            }
            else{
                res.send('Invalid Credential');
            }
        }else{
            res.send('Invalid credential');
        }
        }
    catch(error){
             res.sendStatus(error);
    }
})


//Error
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 400
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success :false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    });
})
{/*app.get('/video',(req,res)=>{
    const range = req.headers.range;
    if(!range){
        res.status(400).send("Requires Range Header");
    }

    const videoPath = "bigbuck.mp4";
    const videoSize = fs.statSync("bigbuck.mp4").size;
    

    //Parse Range
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g,""));
    const end = Math.min(start+CHUNK_SIZE,videoSize-1);

    const contentLength = end-start + 1;
    const headers = {
        "Content-Range" : `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges" : "bytes",
        "Content-Length" : contentLength,
        "Content-Type":"video/mp4"
   };
   res.writeHead(206,headers);
   const videoStream = fs.createReadStream(videoPath,{start,end});
   videoStream.pipe(res);

})
*/}

//update
app.put('/update',async(req,res)=>{
try{
   const emails = req.body.emails;
   const passwords = req.body.passwords;

   const acc = await test.findOne({emails:emails});
   if(acc){
    const update = await test.updateOne({passwords:passwords});   
    console.log("Updated")
    console.log(update);
    res.status(200).send("Updated");
   }
}catch(err){
    console.log(err);
}
})

//Message
app.post('/contact',async(req,res,next)=>{
    try{
        const emails  = req.body.emails;
        const message = req.body.message;

        const  sentMsg = new Message({
            emails : emails,
            message: message
        });
        
        const created = await sentMsg.save();
        console.log(created);
        res.status(200).send("sent");
    }catch(error){
         res.status(400).send(error);
    }
})
//Error handling
app.get('/hello',(req,res,next)=>{
    const failed = true;
    {/*const err = new Error();
    err.status = 404;
err.message = "Sorry not found";*/}
    if(failed) return next(createError(401),"You are not authenticated");
    try{
        const msg = "Welcome to error handling";
    }catch(err){
        next(err);
    }
})
//Cousrelist
app.use('/clist',clist,course);
app.use('/enroll',Enroll);


//Aggregate
app.post("/aggregate",async(req,res)=>{
    const emails = req.body.emails;
    try{
   await printUsername(client,{emails:emails})
    }
    finally{
        console.log("Error");
    }
})


//Transaction
app.get('/transaction',(req,res)=>{
    console.log(createReservationDocument("Sankar",[
        new Date("2021-4-16"),new Date("2023-4-16")
    ],{registered:"Hindi", pricePerCourse:"20000"}))
})

//Search
app.use('/api',search);

//logout
app.get('/logout',(req,res)=>{
    res.clearCookie("jwt",{path:'/'})
    res.status(200).send("User Logged Out")
    console.log("Logged out")
})

//Authentication
const authenticate = require('./middleware/authenticate.js');
const { default: mongoose } = require('mongoose');
const { cp } = require('fs');
const { createError } = require('./error.js');
app.get('/auth',authenticate,(req,res)=>{
    
})

app.listen(port,() =>{
    console.log("Server is listening")
})


