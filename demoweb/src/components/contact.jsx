import React, { useReducer } from "react";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";

const Contact = () =>{

  // const history = useNavigate();

    
    const [msg,setMsg] = useState({
        emails:" ",
        message:" ",
    });


    // Handle Inputs
    const handleInput = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setMsg({...msg,[name]:value});
    }

    //Handle Submit
    const handleSubmit = async(event) =>{
    
       event.preventdefault();
        const {emails,message} = msg;
        try{
            const res = await fetch('/contact',{
              method:"POST",
              headers :{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({
                  emails,message
              })
            })
            if(res.status === 400 || !res){
              window.alert("Message Not sent. Try Again")
            }else{
              window.alert("Message sent successfully");
              setMsg({
                emails:" ",
                message:" ",
              })
              
            }
        }catch(error){
            console.log(error);
        }
  }
    return(
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                             <h1 className="display-6 text-center mb-4">
                             Have Some<b>Questions</b>
                             </h1>
                             <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src=".." alt="contact"  className="w-75"/>
                        </div>
                        <div className="col-md-6">
                         <form >
                            <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emails"
                                   value={msg.emails} onChange={handleInput}/>
                                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3 form-check">
                                 <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                 <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div class="mb-3">
                                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" 
                                     value={msg.message} onChange={handleInput}></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" onSubmit={handleSubmit}>Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                         </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;