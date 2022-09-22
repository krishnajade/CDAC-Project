import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";


const Home = () => {
  const [patient, setUser] = useState([]);
  const[hospital_id]=sessionStorage["hospital_id"];
  const [patient_lname, setplname]=useState();
  const [age , setage]=useState();

  const navigate = useNavigate();
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/getPatientById/'+hospital_id);
    setUser(result.data);
  };

  const deleteUser = async patient_id => {
   
    loadUsers();
    var result = window.confirm("Confirm To delete ?");
            if (result == true) {
              await axios.delete(`http://localhost:8080/deletPatient/${patient_id}`);
              loadUsers();

            } else {
                Home();
            }
  }; 

  const homepage = () => {
    navigate("/hospitalhome");
  };
 
  

  return (
    <div className="container">
      <div className="d-grid gap-3">
        <h1  className="label-control text-center m-3 text-success fw-bold">Patient List</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Patient First Name</th>
              <th scope="col">Patient Last Name</th>
              <th scope="col">bloodgrp</th>
              <th>Action

              </th>
            </tr>
          </thead>
          <tbody>
            {patient.map((ptr, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{ptr.patient_fname}</td>
                <td>{ptr.patient_lname}</td>
                <td>{ptr.bloodgrp}</td>
               
                <td>
                 
                  <Link class="btn btn btn-outline-primary " to={`/PatientProfile/${ptr.patient_id}`}>
                    View
                  </Link><span>   </span>
                  <Link class="btn btn-outline-success" to={`/RequestToBlood/${ptr.patient_id}`}  
                    
                  >
                  Request to Blood
                  </Link><span>   </span>
                  
                  <button
                    class="btn btn-outline-danger"
                    onClick={() => deleteUser(ptr.patient_id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button  className="btn  btn-outline-primary fw-bold" 
                       type="reset"  onClick={homepage}>
                       Home<tr/>
                      </button>
    </div>
  );
};

export default Home;