const courselist = require('../models/couseschema');
const userroll = require('../models/userroll');


const createList = async(req,res,next)=>{

      const clistname = req.params.clistname;
      const newstu = new enroll(req.body)

      try{
        const savedstu = await new newstu.save()
        try{
           await  course.findByIdAndUpdate(clistname,{
            $push : { intake : savedstu.coursename}
           })
        }catch{err}{
            next(err)
        }
        res.status(200).json(savedstu);
      }catch(err){
            next(err)
      }
}

module.exports = createList;

const deletecourse = async(req,res,next)=>{
      const coursename = req.params.coursename;
      try{
           
      }catch{

      }
}