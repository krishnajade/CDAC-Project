import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bloodbankstock.css';
import { Link } from "react-router-dom";


const BloodRequest=()=>{


    return(

        <div className="container-fluids">
            <div id="bloodstock">
                <h2 id="headline"><b>Blood Request List</b></h2>
            <table className="table table-danger table-striped">
                <thead>
                     <tr>
                     <th scope="col">#</th>
                     <th scope="col">Hospital Name</th>
                     <th scope="col">Blood Group</th>
                     <th scope="col">Blood Component</th>
                     <th scope="col">Quantity</th>
                     <th scope="col"></th>
                   </tr>
              </thead>
              <tbody>
                   <tr>
                     <th scope="row">1</th>
                     <td>..</td>
                     <td>..</td>
                     <td>...</td>
                     <td> ..</td>
                     <td><button onClick={""} className="btn btn-success" style={{ marginRight: "10px" }}>Accept</button>
                     <button onClick={""} className="btn btn-danger" style={{ marginLeft: "10px" }}>Reject</button></td>
                   </tr>
              </tbody>
            </table>

            <div> <Link to="/bloodbankhome"><button className="btn btn-primary">Goto Home</button></Link></div>
            </div>

           
  
        </div>
    )

}
export default BloodRequest;