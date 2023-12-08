import React from "react";
import { useState } from "react";
import { Form, NavLink, useLocation, useNavigate } from "react-router-dom";
import img1 from "../images/img4l.JPG";
import { useAuth } from "../services/auth";
import Dashboard from "./dashboard/dashboard";
import GoogleButton from 'react-google-button';


const Login = () => {

 const auth = useAuth();
 const navigate  = useNavigate();
 const location = useLocation();

  const[logger, setLogger] = useState({
       emails :" ",
       passwords:" "
  });

  const handleChange = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setLogger({...logger,[name]:value})
  }
  const handleSubmit  = async(event)=>{
    event.preventDefault();
     const{emails,passwords} = logger;
     try{
      const res = await fetch('/login',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          emails,passwords
        })
      })

      if(res.status === 400 || !res){
        window.alert("Invalid Credentials");
      }else{
        window.alert("Login successfully")
        navigate(`/dashboard/${emails}`)
        window.location.reload()
       

      }
     }catch(error){
             console.log(error)
     }
  }
 
  const redirectpath = location.state?.path ||  '/'

  const handleLogin = () => {
    auth.login(logger.emails)
    navigate(redirectpath,{replace:true})
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
        <div className='main'>
        <div className='submain'>
          <div>
            <div className='imgs'>
              <div className='container-image'>
                <img   alt='profile'/>

              </div>
            </div>
            <form onSubmit={handleSubmit}  >
             <div > 
              <h1>Login page</h1>
              <div>
                   <label className='email'>Email</label>
                   <input type="text" placeholder="email" className='name' name="emails"
                   value={logger.emails} onChange={handleChange}/>              
              </div>
              <div className='second-name'>
                   <label className='email'>Password</label>
                   <input type="password" placeholder="password" className='name' name="passwords" 
                   value={logger.passwords} onChange={handleChange}/>              
              </div>
              <div className='login'>
              <button type="submit" className="btn btn-outline-primary ms-auto px-4 rounded-pill"  >
                  <i className="fa fa-sign-in me-2"></i>LOGIN</button>
              </div>
              </div>
              </form>
              <div>
                <p className='link'>
                  <NavLink to="/help">Forgot password ?</NavLink> or <NavLink to="/signup">Signup</NavLink>
                </p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    );
}

export default Login;