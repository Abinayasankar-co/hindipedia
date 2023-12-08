import React from "react";
import { useParams } from "react-router-dom";

const TeachDashboard = () =>{
    const {instructor} = useParams();
    return(
        <>
         <div>The Teacher Dashboard</div>
         <div classname="Toplayer">
            <div >{instructor}</div>
         </div>
        </>
    );
}

export default TeachDashboard;