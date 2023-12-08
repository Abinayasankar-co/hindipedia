import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Signup = () =>{
      
    const navigate = useNavigate();
    const[user, setUser] = useState({
        emails:"",
        passwords:""
    });

    const handleInput =(event)=>{
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user,[name]:value});
    }
   //Handle submit
    const handleSubmit = async(event) =>{
          Event.preventdefault();
          const {emails,passwords} = user;
          try{
              const res = await fetch('/signup',{
                method:"POST",
                headers :{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    emails,passwords
                })
              })
              if(res.status === 400 || !res){
                window.alert("Already used details")
              }else{
                window.alert("Registered Successfully");
                navigate('/login');
              }
          }catch(error){
              console.log(error);
          }
    }


    return(
        <div>
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                      <div className="back-menu">
                      <NavLink to="/" className="btn bg-light me-4 rounded-pill
                                 px-4 py-2">Back</NavLink>
                      </div>
                </nav>
              </div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Signup</h3>
                             <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src=".." alt="contact"  className="w-75"/>
                        </div>
                        <div className="col-md-6">
                         <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">emails</label>
                                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                  name="emails" value={user.emails} onChange={handleInput}/>
                                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                 <label for="exampleInputPassword1" class="form-label">passwords</label>
                                 <input type="password" class="form-control" id="exampleInputPassword1"
                                 name="passwords" value={user.passwords} onChange={handleInput}/>
                            </div>
                            <div class="mb-3 form-check">
                                 <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                 <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit<i className="fa fa-paper-plane ms-2"></i></button>
                         </form>
                        </div>
                    </div>
                </div>
            </section>
        
        </div>
    );
}

export default Signup;