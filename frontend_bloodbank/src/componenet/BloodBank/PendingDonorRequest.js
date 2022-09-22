import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bloodbankstock.css';
import { Link } from "react-router-dom";
import axios from "axios";


const PendingDonorRequest=()=>{
    const [id,setId]=useState();
    const [rid,setRid]=useState();
    const[request,setRequest]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8080/donorrequestbystatus?bloodbank_id=${sessionStorage["bloodbank_id"]}&status=pending`)
        .then(resp=> resp.json())
        .then(data=>setRequest(data))
      },[])

      const updateStatus=(req_id)=>{
        axios.put(`http://localhost:8080/updatedonorrequest?request_id=${req_id}&status=${rid}`,{
        }).then(()=>{}).

        window.location.reload(false);
      }
      
    return(

        <div className="container-fluids">
            <div id="bloodstock">
                <h2 id="headline"><b>Pending Donor Request List</b></h2>
            <table className="table table-danger table-striped">
                <thead>
                     <tr>
                     <th scope="col">#</th>
                     <th scope="col">Donor Name</th>
                     <th scope="col">Blood Group</th>
                     <th scope="col">Contact Number</th>
                     <th scope="col">Status</th>
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
                              <td><button onClick={()=>updateStatus(v.request_id)} onMouseOver={()=>{setRid("accepted")}} className="btn btn-success " style={{ marginRight: "10px" }}>Accept</button><span> </span>
                      <button onMouseOver={()=>{setRid("rejected")}} onClick={()=>{updateStatus(v.request_id)}} className="btn btn-danger " style={{ marginLeft: "10px" }}>Reject</button></td>
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
export default PendingDonorRequest;