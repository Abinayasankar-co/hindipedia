import React from "react";


const Carousels = () =>{
    return(
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="C:\Users\Abi\OneDrive\Pictures\Screenshots\Screenshot(5)" class="d-block w-100" alt="FIRSTSLIDE"/>
                    </div>
                    <div class="carousel-item">
                       <img src="C:\Users\Abi\OneDrive\Pictures\Screenshots\Screeshot(4)" class="d-block w-100" alt="SECOND SLIDE" />
                    </div>
                    <div class="carousel-item">
                       <img src="C:\Users\Abi\OneDrive\Pictures\Screenshots\image1" class="d-block w-100" alt="THIRDSLIDE" />
                    </div>
                </div>
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
    );
}

export default Carousels;