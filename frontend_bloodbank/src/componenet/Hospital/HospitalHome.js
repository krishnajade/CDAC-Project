import React,{useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './home.css'

const HospitalHome = () => {
   const Hospital_name = sessionStorage["hospital_name"]
   const Hospital_id=sessionStorage["hospital_id"]
   const navigate =useNavigate();
  {/*
  useEffect(() => {
     loadUser()
  },[])

  const loadUser = async () =>{
    const res = await axios.get(`http://localhost:8080/hospital/${id}`);
    setAdmin(res.data)
  }
*/}

 const profile=()=>{
  navigate("/hospitalprofile");
  window.location.reload(false);
 }
 const logoutUser=()=>{
 sessionStorage.clear();
 navigate("/signIn");
 window.location.reload(false)

 }
  return (
    
<div class="container rounded bg-white mt-5 mb-5 ">

              <h1 className="label-control text-center m-3 text-success fw-bold">Hospital : {Hospital_name}</h1>
              <div class="row">
                  <div class="center  border-right">
                      <div class="d-flex flex-column align-items-center text-center p-3 py-2">
                          <img class="mt-1" width="5px" src="https://st.depositphotos.com/2204608/3026/v/950/depositphotos_30267159-stock-illustration-bright-and-colorful-vector-hospital.jpg" alt="" style={{
        width: 300,
        height: 350,
        borderRadius: 140 / 2,
        backgroundColor: '#FF6F00',
        transform: [
          { scaleX: 2 }
        ]
    }} />
    <br/>
    <span class="font-weight-bold"></span><span> </span></div>
                   </div>
                   <div class="center  border-right">
                   <div className='d-grid gap-4' > 
                    <tr>
    <Link to={''}><button onClick={profile} className="btn btn-danager col-4 ms-3 rounded-pill mt-2 "  style={{ 
        textDecoration:null,
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#EFEDF7',
        transform: [
          { scaleX: 2 }
        ]
      }}>Profile</button></Link> 
 {/*
       <Link to={`/BloodBankList`}><button className="btn btn-danager col-4 ms-3  rounded-pill  mt-2 " style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#FFE5FF',
        transform: [
          { scaleX: 2 } 
        ]
    }} >Show BloodBank</button></Link>
   
                         <Link to={`/RequestBloodForm`}><button className="btn btn-danager col-4  ms-3 rounded-pill mt-2 mb-2" style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#FF6F00',
        transform: [
          { scaleX: 2 }
        ]
    }} >request to Blood</button></Link>    */}
     <Link to={`/PatientList`}><button className="btn btn-danager col-4 rounded-pill mt-2" style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#FCE9E9	',
        textDecoration:'none',
        transform: [
          { scaleX: 2 }
        ]
    }} >Patient List</button></Link> 
       
       
        
   <Link to={`/RequestStatus`}><button className="btn btn-danager col-4 ms-3 rounded-pill mt-2" style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#FFF5E5',
        transform: [
          { scaleX: 2 }
        ]
    }} >request Status</button></Link> 
                      </tr>
                      <tr> 

      <Link to={`/PatientRegistation`}><button className="btn btn-danager col-4  ms-3 rounded-pill mt-2 mb-2" style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#FFF4E5',
        transform: [
          { scaleX: 2 }
        ]
    }} >Patient Registration</button></Link>
     <Link to={``}><button className="btn btn-danager col-4  rounded-pill " style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#F9F9EB',
        transform: [
          { scaleX: 2 }
        ]
    }} >Change Password</button></Link>
   
    <Link to={``}><button className="btn btn-danager col-4  ms-3 rounded-pill mt-2 mb-2"  onClick={logoutUser} style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#FFF4E5',
        textDecoration:'none',
        transform: [
          { scaleX: 2 }
        ]
    }} >Logout</button></Link> 
                      </tr>
                      </div>
                      </div>
                  </div>
              </div>

  )
}

export default HospitalHome