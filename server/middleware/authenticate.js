//Middleware
//It will  be checked before the reponses

const Users = require('../models/userSchema.js');
const jwt = require('jsonwebtoken');

const authenticate = async (req,res,next) =>{
     try{
        //Get the Cookies
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).send("No Token");
        }else{
            const  verifyToken = jwt.verify(token,process.env.SECRET_KEY);
            const  rootUser = await Users.findOne({_id : verifyToken._id,"tokens.token":token});

            if(!rootUser){
                res.status(401).send("User not found");
            }else{
                res.status(200).send("Authorized user");
            }

            next()
            
        }
     }catch(error){
           console.log(error)
     }
}

module.exports = authenticate;