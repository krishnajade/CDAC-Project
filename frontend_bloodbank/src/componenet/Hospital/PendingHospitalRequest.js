import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from "axios";


const PendingHospitalRequest=()=>{

    const[request,setRequest]=useState([]);
    const[id,setId]=useState(0);

    useEffect(()=>{
        fetch(`http://localhost:8080/Hospitalrequestbystatus?hospital_id=${sessionStorage["hospital_id"]}&request_status=pending`)
        .then(resp=> resp.json())
        .then(data=>setRequest(data))
      },[]);

      {/*
      const updateStatus=()=>{
        console.log(id);
        fetch(`http://localhost:8080/updateHospitalRequest?hospital_request_id=${id}&request_status=accepted`,{method:"PUT"}).then((resp)=>{resp.json()}).then(()=>{})
        window.location.reload(false)
      }
    */}



    return(

        <div className="container-fluids">
            <div id="bloodstock">
                <h2 id="headline"><b>Pending Hospital Request List</b></h2>
            <table className="table table-danger table-striped">
                <thead>
                     <tr>
                     <th scope="col">Sr No</th>
                     <th scope="col">Patient FirstName</th>
                     <th scope="col">Patient LastName</th>
                     <th scope="col">Blood Group</th>
                     <th scope="col">Contact Number</th>
                     <th scope="col">Quntity</th>
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
                              <td>{v.patient.patient_lname}</td>
                              <td>{v.patient.bloodgrp}</td>
                              <td>{v.blood_component}</td>
                              <td>{v.quantity}</td>
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
            <div> <Link to="/bloodbankhome"><button className="btn btn-primary">Goto Home</button></Link></div>
            </div>
        </div>
    )

}
export default PendingHospitalRequest;