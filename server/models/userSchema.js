const  mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

//user schema or Document structure

const userSchema = new mongoose.Schema({
            emails : {
                type : String,
                required:true,
                unique : true
                
            },
            passwords : {
                type :  String,
                required:true,
                unique : true
            },
            tokens : [
                {
                    token : {
                    type : Array,
                    required : true
                     }
                }
            ]
},{timestamps:true});

userSchema.pre('save',async function(next){
    if(this.isModified('passwords')){
        this.passwords = bcryptjs.hashSync(this.passwords,10);
    }
    next();
})
// Generate Tokens to Verify User


userSchema.methods.generateToken = async function(){
    try{
        let generateToken = jwt.sign({_id : this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : generateToken});
        await this.save();
        return generateToken;
    } catch (error){
          console.log(error)
    }
}
// create Model
const test = new mongoose.model("TEST",userSchema);
module.exports = test;


