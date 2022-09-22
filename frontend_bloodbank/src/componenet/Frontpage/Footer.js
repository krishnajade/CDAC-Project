import { Container,Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from '../../asset/logo.jpg';
import fb from '../../asset/Facebooklogo.png';
import li from '../../asset/Linkedinlogo.png';
import is from '../../asset/Instalogo.png';
import'./Footer.css';
// import navIcon1 from '../../Assets/image/b.png';
// import navIcon2 from '../../Assets/image/c.png';
// import navIcon3 from '../../Assets/image/d.png';

export const Footer=()=>{
    return (
        <footer className="footer">
            <div className="container-fluid" id="footer">
                <Row className="align-items-center">
                    <Col>
                  {/*  <Link to={`/`}><img src={logo} alt="logo" width={"100px"} height={"100px"} id='img-logo-footer'/></Link>*/}
                    </Col>
                    <Col>
                        <h5>Contact Us Here</h5>
                        <a href="#"><img src={fb} width={"50px"} height={"50px"}/></a><span> </span>
                        <a href="#"><img src={is} width={"50px"} height={"50px"} style={{ marginRight: "10px" ,marginLeft:"10px" }}/></a><span> </span>
                        <a href="#"><img src={li} width={"50px"} height={"50px"}/></a>
                    </Col>
                    <Col className="text-center text-sm-end">
                        <div>
                        <p>&copy; All Rights Reserved - 2022</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}