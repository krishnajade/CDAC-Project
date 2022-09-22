import React from "react";
import "./Home.css";
import { Banner } from "./Banner";
import home from '../../asset/HomePage.png';
import { Projects } from "./HeroImage";


const Home=()=>{


    return(
        <div className="container">
            <section>
          <Banner/>
          </section>
          <section id="sk" className="align-align-items-center">
         <img src={home} height={450}
          width={800} className="center" />
          </section>
          <Projects/>
        </div>
    )
}
export default Home;