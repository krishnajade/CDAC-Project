import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bloodbankstock.css';
import { Link } from "react-router-dom";


const RejectedDonorRequest=()=>{

    const[request,setRequest]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8080/donorrequestbystatus?bloodbank_id=${sessionStorage["bloodbank_id"]}&status=rejected`)
        .then(resp=> resp.json())
        .then(data=>setRequest(data))
      },[]);


    return(

        <div className="container-fluids">
            <div id="bloodstock">
                <h2 id="headline"><b>Rejected Donor Request List</b></h2>
            <table className="table table-danger table-striped">
                <thead>
                     <tr>
                     <th scope="col">#</th>
                     <th scope="col">Donor Name</th>
                     <th scope="col">Blood Group</th>
                     <th scope="col">Contact Number</th>
                     <th scope="col"></th>
                   </tr>
              </thead>
              <tbody>
              {
              
                request.map((v,i)=>
                  {
                      return (
                          <tr>
                              <th scope="row">{i+1}</th>
                              <td>{v.donor_name}</td>
                              <td>{v.bloodgroup}</td>
                              <td>{v.contact_number}</td>
                              <td><b>{v.status}</b></td>
                          </tr>
                      )
                  } )
              }
              </tbody>
            </table>
            <div> <Link to="/bloodbankhome"><button className="btn btn-primary">Goto Home</button></Link></div>
            </div>
        </div>
    )

}
export default RejectedDonorRequest;