import React from "react";
import About from "./About";
import Contact from "./contact";
import Footer from "./footer";
import Services from "./services";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import img1 from "../images/img5cl.JPG";
import img2 from "../images/img2e.JPG";
import img3 from "../images/img3c.JPG";
import "../carousel.css";


const Home = () => {
    return(
        <div>
            <Navbar />
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={img1} class="d-block w-100 " alt="FIRSTSLIDE"/>
                    </div>
                    <div class="carousel-item">
                       <img src={img2} class="d-block w-100" alt="SECOND SLIDE" />
                    </div>
                    <div class="carousel-item">
                       <img src={img3} class="d-block w-100" alt="THIRDSLIDE" />
                    </div>
                </div>
                <div class="inner">
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
               </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
              </button>
              </div>
            </div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 nt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Cardiomyopathy</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">
                            Cardiomyopathy (kahr-dee-o-my-OP-uh-thee) is a disease of the heart muscle
                             that makes it harder for the heart to pump blood to the 
                             rest of the body. Cardiomyopathy can 
                             lead to heart failure. The main types of cardiomyopathy include dilated, hypertrophic and restrictive cardiomyopathy.
                            </p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/services" className="btn btn-outline-light  me-4 
                                rounded-pill px-4 py-2">OurServices</NavLink>
                                <NavLink to="/contact" className="btn btn-light me-4 rounded-pill
                                 px-4 py-2">Get Quote</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Services/>
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
