import React from "react";
import '../parthmic/partmic.css';
import { NavLink } from "react-router-dom";

const Course1 = () =>{
    return(
        <>
        <div className="hi">
           Personal Info
        </div>
        <div className="contentpage">
             <p>Hello</p>
        </div>
        <div className="checkinfo">
            
        </div>
        <div className="infocourse">
           <NavLink className="btn btn-outline-dark me-4  rounded-pill px-4 py-2" to="/create">Create course</NavLink>
           <NavLink className="btn btn-outline-dark me-4  rounded-pill px-4 py-2" to="/cousessection">Search for couses</NavLink>
        </div>
        </>
    );
}

export default Course1;