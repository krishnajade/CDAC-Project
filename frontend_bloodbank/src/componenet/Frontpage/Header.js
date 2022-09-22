
import { useState,useEffect } from "react";
import { Navbar,Container,Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../asset/logo4.png';
import navIcon2 from '../../asset/login.png';
import navIcon3 from '../../asset/signup.jpg';
// import adminIcon from '../../Assets/image/admin.png';

export const Header=()=>{
   // const [activeLink,setActiveLink]=useState('home');
    const[scrolled,setScrolled]=useState(false);

    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return ()=>window.removeEventListener("scroll",onScroll)
    },[])

    // useEffect(()=>{
    //     const menuTarget=document.getElementById("menuChevron");
    //     const menuContainer=document.getElementById("menuContainer");

    //     menuTarget.addEventListener('mouseenter',()=>{
    //         menuContainer.style.transform ='translateX(0px)';
    //     });

    //     menuContainer.addEventListener('mouseleave',()=>{
    //         menuContainer.style.transform ='translateX(700px)'
    //     });
    // },[]);
    // const onUpdateActiveLink=(value)=>{
    //     setActiveLink(value);
    // }
    return(<div id="header">
        <Navbar expand="lg" className={scrolled?"scolled":"" }>
        <div className="container-fluid">
          <Navbar.Brand href="#home" >
          
          <Link to={`/`}><img src={logo} alt="" width={"160px"} height={"200px"}/></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <h1 id="webname">E-RaktDan</h1>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    {/* <Link to={``}><img src={adminIcon} alt="" className="menuChevron" id="menuChevron"/></Link>
                    <Link to={`/joinUs`}><img src={navIcon1} alt=""/></Link> 
                     <Link to={`/signUp`}><img src={navIcon3} alt=""/></Link>*/}
                    <Link to={`/signIn`}><img src={navIcon2} width="70px" height="70pxc" alt=""/></Link>
                </div>
               
            </span>&nbsp;&nbsp;&nbsp;
          </Navbar.Collapse>
          </div>
      </Navbar>
      </div>
    )
}