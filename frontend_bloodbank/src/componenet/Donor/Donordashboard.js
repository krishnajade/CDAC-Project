import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import './dashboard.css';
function Donardashboard() {
  const [Donarlist, setDonarlist] = useState([]);

  useEffect(() => {
    const getDonarlist = async () => {
      const res = await fetch("http://localhost:8080/getallDonor");
      const getdata = await res.json();
      setDonarlist(getdata);
      // console.log(getdata);
    };

    getDonarlist();
  },[]);


  return (
    <React.Fragment>
      <Container>
        <div className="row" >
           
          <div className="col-sm-8 text-success">
            <h5 className="p-3 fw-bold text-black">
              Donar Details
            </h5>
          
            <table className="table table-bordered text-white" >
              <thead>
                <tr>
                  <th>Donar ID</th>
                  <th>Donar Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Blood group</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {Donarlist.map((donar1) => (
                    <tr>
                    <td>{donar1.donar_id}</td>
                    <td>{donar1.address}</td>
                    <td>{donar1.bdate}</td>
                    <td>{donar1.city}</td>
                    <td>{donar1.email}</td>
                    
                    <td><button href="" className="btn btn-success"> View </button> </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>      
      </Container>
    </React.Fragment>
  );
}

export default Donardashboard;