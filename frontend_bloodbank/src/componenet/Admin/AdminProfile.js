import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import './dashboard.css';
function AdminProfile() {
  const [Adminlist, setAdminlist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getalladmin")
          .then(res=>{
            console.log();
            setAdminlist(res.data)

          })
   

  },[]);


  return (
    <React.Fragment>
      <Container>
        <div className="row" >
          <div className="col-sma-8 text-success">
            <h5 className="p-3 fw-bold text-black">
              Admin Profile Currently Logged In
            </h5>
          
            <table className="table table-bordered text-black" >
              <thead>
                <tr>
                  <th>Admin ID</th>
                  <th>Admin Name</th>
                  <th>User Id</th>
                </tr>
              </thead>
              <tbody>
                {Adminlist.map((Admin1) => (
                  <tr>
                    <td>{Admin1.admin_id}</td>
                    <td>{Admin1.admin_name}</td>
                    <td>{Admin1.user_id}</td>
                   
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

export default AdminProfile;