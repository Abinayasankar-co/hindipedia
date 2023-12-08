import React, { useEffect, useState } from "react";
import { NavLink, useFetcher } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard/dashboard";
import { useAuth } from "../services/auth";
import axios from "axios";

const Navbar = () => {

  const auth = useAuth()
  const [searchResult,setsearchResult] = useState([])
  const [key,setkey] = useState("")
  useEffect(()=>{
    const search = async()=>{
      try{
         if(!key.trim()){
          setsearchResult([])
          return
         }
       const res = await axios.get("https://localhost:3001/api/searchcourse/",{params:{key,limit:5}})
      console.log(res)
      }catch(err){
        console.log(err);
      }
    }
    search()
  },[key])
    return(
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">HindiPedia</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/services" >Services</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link active" to="/contact">About</NavLink>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          
            <li><NavLink  class="dropdown-item" className="nav-link active"to="/Prathmic">Prathmic</NavLink></li>
            <li><NavLink className="nav-link active"to="/Madhyama">Madhyama</NavLink></li>
            <li><NavLink className="nav-link active"to="/Rastrabhasha">Rastrabhasha</NavLink></li>
            <li><NavLink className="nav-link active"to="/Praveshika">Praveshika</NavLink></li>
            <li><NavLink className="nav-link active"to="/VisharadPoorvhad">VisharadPoorvhad</NavLink></li>
            <li><NavLink className="nav-link active"to="/VisharadUttradah">VisharadUttradah</NavLink></li>
            <li><NavLink className="nav-link active"to="/Praveen Poorvhad">Praveen Poorvhad</NavLink></li>
      </div>
      </li>
            
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        value={key} onChange={(e) => setkey(e.target.value)}/>
        {/*Since its not an array the object mapping causes error */}
        {/*Placing a div before it can remove thiserror */}
        {searchResult && searchResult.length > 0 && (
            <div>
            {searchResult.map(book =>(
              <div className="result-item" key={book._id}>
              <div className="book-info">
                <p className="name">{book.name}</p>
                <p>{book.author.name}</p>
              </div> 
            </div>
            ))}
            </div>
          )
        }
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <div className="d-flex">
      <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/"></NavLink>
      {
        !auth.logger && (<NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
      <i className="fa fa-sign-in me-2"></i>LOGIN</NavLink>)
      }
      {/*<NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
        <i className="fa fa-sign-in me-2"></i>LOGIN</NavLink>*/}
      <NavLink to="/signup" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
        <i className="fa fa-user-plus me-2"></i>Register
      </NavLink>
      {/*<NavLink to="/dashboard" className="btn btn-outline-primary ms-2 px-4 rounded-pill" ><i className="fa fa-user-plus me-2"></i>Dashboard</NavLink>*/}
      </div>
     </div>
    </nav>
    </div>
    );
    
}

export default Navbar;