import React,{useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import home from '../../asset/patientlogo.png';


const PatientProfile = () => {
  const { patient_id } =useParams()
  const [pt, setpt] = useState([]);

  useEffect(() => {
     loadUser()
  },[])

  const loadUser = async () =>{
    const res = await axios.get(`http://localhost:8080/getpatientbyPatientid/${patient_id}`);
    setpt(res.data)
  }

  return (
    <div class="col-7 offset-3">
    <div class="container emp-profile">
        <form method="post">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src={home}
                          style={{
                            width: 200,
                            height: 200,
                            transform: [
                                { scaleX: 2 }
                            ]
                        }} />
                        {/* <div class="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file" />
                        </div> */}
                    </div>
                </div>
                <div class="col-md-6 mt-5">
                    <div class="profile-head">
                       <h2>Patient Profile</h2>
                        <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="col-md-2">
                <Link class="btn btn btn-outline-primary " to={`/hospitalhome`}>
                    Back to Home
                  </Link>
                  <hr/>
                </div>
            </div>
            {
                    pt.map((v)=>{
                        return (

            <div class="row">
            <div className='offset-4'>
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="col-mb-2">Patient FirstName</label>
                                </div>
                                <div class="col-md-6">
                                    <h6>{v.patient_fname}</h6>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Patient LastName</label>
                                </div>
                                <div class="col-md-6">
                                    <h6>{v.patient_lname}</h6>
                                  
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Blood Group</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{v.bloodgrp}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Adhar Number</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{v.aadharnumber}</p>
                                  
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>City</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{v.city}</p>
                                    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Age</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{v.age}</p>
                                    
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Gender</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{v.gender}</p>
                                   
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Registation Date</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{v.registration_date}</p>
                                    
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            )
          })                    
      }


        </form>
        </div>
      
        </div>

    )
}

export default PatientProfile;