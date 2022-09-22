import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import F1 from "../../asset/BloodTypes.jpg";
import F2 from "../../asset/F2.jpg";
import F3 from "../../asset/F3.png";
import F4 from "../../asset/F4.JPEG";
import F5 from "../../asset/F5.jpg";
import F6 from "../../asset/F6.jpg";
import F7 from "../../asset/F7.png";

const Multimedia=()=>{ 

    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000" >
            <img src={F1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000" >
            <img src={F2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000" >
            <img src={F3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000" >
            <img src={F4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000" >
            <img src={F5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000" >
            <img src={F6} className="d-block w-100" alt="..." />
          </div>
         <div className="carousel-item" data-bs-interval="3000" >
            <img src={F7} className="d-block w-100" alt="..." />
          </div>
        {/*<div className="carousel-item" data-bs-interval="3000" >
            <img src={F8} className="d-block w-100" alt="..." />
          </div>*/}
        </div>
      </div>
    )

}
export default Multimedia;