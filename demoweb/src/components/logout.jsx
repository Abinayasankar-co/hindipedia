import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./home";
import Dashboard from "./dashboard/dashboard";

const Logout =() =>{
    
    const navigate = useNavigate();

     const logout = async () => {
         try{
            const res = await fetch('/logout',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "content-Type":"application/json"
                },
                credentials:"include"
            });
            if(res.status === 401 || !res){
                window.alert("Please Logout Later");
            }else{
                navigate("/");
            }
         }catch(error){
             console.log(error)
         }
     }

    
     useEffect(()=>{
        logout();
     },[]);

    

    return(
       <div>
              
       </div>
    );
}


export default Logout