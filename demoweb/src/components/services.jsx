
import React from "react";
import img1 from "../images/img1.jpg.jpg";
import img2 from "../images/img2e.JPG";
import img3 from "../images/img3c.JPG";
import '../card.css';

const Services = () => {
    return(
        <div>
            <section id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center ">Our services</h3>
                            <h1 className="display-6 text-center mb-4">Our<b>
                                TopMostAwesome</b>Services</h1>
                                <hr className="w-25 mx-auto" />
                        </div>
                        <section class="container1">
                        <div class="card" width="18rem;">
                            <div class="inner">
                            <img src={img1} alt="A image" class="card-img-top"  />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">A Content</h5>
                                <p class ="card-text">The content defines the page</p>
                            </div>
                            <a href="/prathmic" class="btn btn-primary" width="100px" height="100px">Visit Page</a>
                       </div>
                       <div class="card" width="18rem;">
                        <div class="inner">
                            <img  src={img2} alt="A image" class="card-img-top"/>
                        </div>
                           <div class="card-body">
                             <h5 class="card-title">Aesthetic</h5>
                             <p class="card-text">The content defines the aesthetic 
                                look of the page</p>
                           </div>
                           <a href="#" class="btn btn-primary" width="100px" height="100px">Visit Page</a>
                       </div>
                       <div class="card" width="18rem;">
                        <div class="inner">
                          <img src={img3} alt="A image 3" class="card-img-top"/>
                          </div>
                          <div class="card-body" >
                            <h5 class="card-title">A Creation</h5>
                            <p class="card-text">The Top quality creation requires practice</p>
                          </div>
                          <a href="#" class="btn btn-primary" width="100px" height="100px">Visit Page</a>
                       </div>
                    </section>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;