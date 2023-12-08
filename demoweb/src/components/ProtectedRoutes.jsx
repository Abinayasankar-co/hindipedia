/*import React from "react";
import {  Route,Routes, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({auth,component:Component,...rest}) =>{
    
    const Navigate = useNavigate();
    const location = useLocation();
  return(
    <div>
         <Routes>
            <Route {...rest} render={(props)=>{
                if(auth) return <Component {...props} />
                if(!auth) return <Navigate to={{path:'/' ,state:{from :props.location}}}/>

            } } />
        </Routes>
    </div>
  );
        }
export default ProtectedRoute;*/