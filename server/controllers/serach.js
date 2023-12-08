const router = require('express').Router()
const courselist = require("../models/couseschema");

router.get('/searchcourse',async(req,res)=>{
    try{
        const page = parseInt(req.query.page) -1||0;
        const limit = parseInt(req.query.limit)||5;
        const search = req.query.sort || "";
        let sort = req.query.sort || "rating";
        let genre = req.query.genre || "All";

    
        const genreOptions = [
            "Parthmic",
            "Madheyma",
            "Rastrabhasha"
        ];
        
        genre === "All"
         ?(genre = [...genreOptions])
         :(genere = req.query.genre.split(","));
        
        req.query.sort ? (sort = req.query.sort.split(",")):(sort =[sort])
      
        let sortBy = {};
        if(sort[1]){
            sortBy[sort[0]] = sort[1];
        }else{
            sortBy[sort[0]] = "asc";
        }

        const Courses = await courselist.find({coursename:{$regrex:search,$options:"i"}})
         .where("genre")
         .in([...genre])
         .sort(sortBy) 
         .skip(page*limit)
         .limit(limit);

        const total = await courselist.countDocuments({
            coursename:{$regrex:search,$options:"i"}
        });
        const response={
            error:false,
            total,
            page:page+1,
            limit,
            courselist
        };
        res.json(response)

    }catch(err){
        console.log(err);
    }
})

module.exports = router