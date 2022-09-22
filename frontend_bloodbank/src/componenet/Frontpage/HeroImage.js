import { Container } from "react-bootstrap";
import { Row, Col,Nav,Tab} from "react-bootstrap";
import { ProjectCards } from './ProjectCards.js';
import projImg1 from '../../asset/p1.png'
import projImg2 from '../../asset/p5.png'
import projImg3 from '../../asset/p3.png'
import projImg4 from '../../asset/p4.png'
import projImg5 from '../../asset/p8.png'
import projImg6 from '../../asset/p6.png'
import './HeroImage.css'

export const Projects=()=>{
    const projects = [
        {
            title:"Donate Blood",
            description:"To Make SomeOne Life beautiful ",
            imgUrl:projImg1,
        },
        {
            title:"Donate Blood",
            description:"To Make SomeOne Life beautiful",
            imgUrl:projImg2,
        },
        {
            title:"Donate Blood",
            description:"To Make SomeOne Life beautiful",
            imgUrl:projImg3,  
        },
        {
            title:"Donate Blood",
            description:"To Make SomeOne Life beautiful",
            imgUrl:projImg4,
        },
        {
            title:"Donate Blood",
            description:"To MakeSomeOne Life beautiful",
            imgUrl:projImg5,
        },
        {title:"Donate Blood",
        description:"To Make SomeOne Life beautiful",
        imgUrl:projImg6,
            
        }, 
    ];
    
 

return (
    <section className="project" id="project">
        <Container>
            <br/>
            <Row>
                <Col>
                <p>
          Whole blood donation is the most common type of blood donation. During
          this
          <br />
          donation, you donate about a pint (about half a liter) of whole blood.
          <br />
                  The blood is then separated into its components — red cells, plasma
                 and sometimes platelets.
        </p>
        <br/>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                
               
               <Tab.Pane eventKey="first">
                   <Row>
                       {
                           projects.map((project,index)=>{
                               return(
                                   <ProjectCards 
                                   key={index}
                                   {...project}
                                   />
                               )
                           })
                       }
                   </Row>
               </Tab.Pane>
              
                </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
)
}