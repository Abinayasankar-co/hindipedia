import React from "react";
import { NavLink } from "react-router-dom";


const About = () =>{
    return(
        <div>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="D:\demo website\u.jfif" 
                              alt="About" className="w-75 mt-5" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">Symptoms</h3>
                            <h1 className="display-6 mb-2">Causes<b>and</b>Symptoms</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">
                            <li>
                             <ul>Breathlessness with activity or even at rest</ul>
                             <ul> Swelling of the  legs, ankles and feet</ul>
                             <ul>Bloating of the abdomen due to fluid buildup</ul>
                             <ul>Cough while lying down</ul>
                             <ul>Difficulty lying flat to sleep</ul>
                             <ul>Fatigue</ul>
                             <ul>Heartbeats that feel rapid, pounding or fluttering</ul>
                             <ul>Chest discomfort or pressure</ul>
                             <ul>Dizziness, lightheadedness and fainting</ul>
                             </li>
                            </p>
                            <NavLink to="/content" className="btn btn-primary 
                            rounded-pill px-4 py-2">Get Started</NavLink>
                            <NavLink  to="/signup"className="btn btn-outline-primary 
                            rounded-pill px-4 py-2 ms-2">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;