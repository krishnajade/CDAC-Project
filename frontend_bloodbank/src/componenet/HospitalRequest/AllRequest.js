import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from "axios";


const AllRequest=()=>{

    const[request,setRequest]=useState([]);
    const[id,setId]=useState(0);

    useEffect(()=>{
        fetch(`http://localhost:8080/getAllRequest`)
        .then(resp=> resp.json())
        .then(data=>setRequest(data))
      },[]);

     



    return(

        <div className="container-fluids">
            <div id="bloodstock">
                <h2 id="headline"><b>All Hospital Request List</b></h2>
            <table className="table table-danger table-striped">
                <thead>
                     <tr>
                     <th scope="col">Sr No</th>
                     <th scope="col">Patient FirstName</th>
                     <th scope="col">Blood Group</th>
                     <th scope="col">Blood Component</th>
                     <th scope="col">Quntity</th>
                     <th scope="col">Status</th>
                     <th scope="col">Request Date</th>
                     
                     <th scope="col"></th>
                   </tr>
              </thead>
              <tbody>
              {
                request.map((v,index)=>
                  {
                      return (
                          <tr>
                              <th scope="row">{index+1}</th>
                              
                              <td>{v.patient.patient_fname}</td>
                              <td>{v.patient.bloodgrp}</td>
                              <td>{v.blood_component}</td>
                              <td>{v.quantity}</td>
                              <td>{v.request_status}</td>
                              <td>{v.request_date}</td>

                             
                            {/*  <td><button onSelect={()=>{setId(v.hospital_request_id)}} onClick={()=>updateStatus()} className="btn btn-success " style={{ marginRight: "10px" }}>Accept</button><span> </span>
                                <button onSelect={()=>{setId(v.hospital_request_id)}} onClick={()=>updateStatus()} className="btn btn-danger " style={{ marginLeft: "10px" }}>Reject</button></td>
                      */}
                            <td></td>
                                </tr>
                             
                        
                      )
                  } )
              }
              </tbody>
            </table>
            <div> <Link to="/hospitalhome"><button className="btn btn-primary">Goto Home</button></Link></div>
            </div>
        </div>
    )

}
export default AllRequest;
    ;