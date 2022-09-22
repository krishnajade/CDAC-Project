import React, { useState,useReducer, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { useNavigate,Link } from "react-router-dom";
import { FaHospitalAlt } from 'react-icons/fa';
import { AiFillHome} from "react-icons/ai";
import axios from "axios";
const init={
 hospital_id:sessionStorage["hospital_id"],
  hospital_name:sessionStorage["hospital_name"],
  licence_no:sessionStorage["licence_no"],
  phoneNumber:sessionStorage["phonenumber"],
  email:sessionStorage["email"],
  website:sessionStorage["website"],
  address:sessionStorage["address"],
  State:sessionStorage["State"],
  city:sessionStorage["city"],
}
const reducer =(state,action)=>
{
    switch(action.type)
    {
        case 'update' :
            return {...state,[action.field]:action.val};
        case 'clear':
            return init;
    }
}
const HospitalProfile=()=>{
    const[reg,dispatch]=useReducer(reducer,init);
    const[msg,setMsg]=useState("");
    const navigate = useNavigate();
   const hospital_id=sessionStorage["hospital_id"];
   

   {/* window.onload = function () {
      window.location.reload();
    };*/}
    const homepage = () => {
      navigate("/hospitalhome");
    };
    const mainpage =()=>{
      navigate("/")
    }
   
   
   {/*
    const sendData=(e)=>
    {
        e.preventDefault();
        console.log("hi");
        const reqData={
         
          method:"put",
          headers:{
              "content-type":"application/json"
          },
          body: JSON.stringify({
        
            
            hospital_name:reg.Hospital_name,
            licence_no:reg.Licenceno,
            address:reg.Address,
            website:reg.website,
            email:reg.email,
            state:reg.State,
            city:reg.City,
            phoneNumber:reg.phoneNumber,
          })

      }
      fetch("http://localhost:8080/updateHospital",reqData)
      .then(res=>res.text())
    .then(str=>setMsg("Successfully Updation complete"))
      
    } */}
   
    
    const sendData=( hospital_id,e)=>
    {   
      
        e.preventDefault();
        console.log("hi");
       axios.put(`http://localhost:8080/updateHospital?hospital_id=${hospital_id}`,{ 
        hospital_name:reg.hospital_name,
       licence_no:reg.licence_no,
             
        address:reg.Address,
        website:reg.website,
        email:reg.email,
        city:reg.City,
        phoneNumber:reg.phoneNumbe
      })
      .then((response)=>{
        const result = response.data
        if(result.length!=0)
        {
          sessionStorage['hospital_name']=result.hospital_name
          sessionStorage['licence_no']=result.licence_no
          sessionStorage['address']=result.address
          sessionStorage['city']=result.city
          sessionStorage['phonenumber']=result.phoneNumber
          sessionStorage['email']=result.email
          sessionStorage['website']=result.website
        }
      }).catch(err=>console.log(err))
      window.location.reload(false)
    }
    const deleteHospital = async => {
    
      var result = window.confirm("Confirm To delete ?");
           if (result == true) {
             sessionStorage.clear();
              axios.delete(`\http://localhost:8080/deletHospital/${hospital_id}`  );
             mainpage()

           } else {
               HospitalProfile();
           }
   }; 
   
   

    return(
        <div class="container-xxl p-0" >
        <div class="row pb-5 pt-5">
          <div class="container">
            <div class="bg-image" id="bg-image-signup">
              <div class="row" id='container'>
              <div class="col-sm-2" >
               {/* <Multiimage></Multiimage> */}
              </div>
                <div class="col-sm-8 mt-3" id="signupForm">
  
                  <div className="form" >
                    <div class="col-md-12">
                    <h3 className="label-control text-center m-3 text-success fw-bold">
                      Profile Of Hospital
                    </h3>
                    <div  class="col-md-2" style={{marginLeft:"800px"}}> <Link class="btn btn btn-outline-primary " to={`/hospitalhome`}>
                    <AiFillHome/><span> home      </span>
                  </Link></div>
                  </div>
                  <hr/>
                    <div className="mb-3" >
                      <label style={{marginRight:"700px"}} >hospital Name :</label>
                    <input name="hospital_name" type="text " className="form-control" placeholder="Enter Hospital Name" 
                    value={reg.hospital_name} onChange={(e)=>{dispatch({type:'update',field:'hospital_name',val:e.target.value})}} required />
                    </div>
                    
                    <div className="mb-3">
                    <label style={{marginRight:"700px"}} >hospital licence No:</label>
                    <input name="licenceno" type="text" className="form-control" placeholder="Enter Licence No"
                    value={reg.licence_no} onChange={(e)=>{dispatch({type:'update',field:'licence_no',val:e.target.value})}} required />
                    </div>
                    <div className="mb-3">
                    <label style={{marginRight:"700px"}} >hospital Address:</label>
                    <input name="address" type="text" className="form-control" placeholder="Enter Address" 
                     value={reg.address} onChange={(e)=>{dispatch({type:'update',field:'address',val:e.target.value})}} required />
                    </div>
                    <div className="mb-3">
                    <label style={{marginRight:"700px"}} >hospital City: :</label>
                    <input name="city" type="text " className="form-control" placeholder="Enter City"
                     value={reg.city} onChange={(e)=>{dispatch({type:'update',field:'city',val:e.target.value})}}  required />
                    </div>
                    <div className="mb-3">
                    <label style={{marginRight:"700px"}} >hospital phoneNumbe:</label>
                    <input name="phoneNumber" type="text" className="form-control" placeholder="Enter Phone Number" 
                     value={reg.phoneNumber} onChange={(e)=>{dispatch({type:'update',field:'phoneNumber',val:e.target.value})}} required />
                    </div>
                    <div className="mb-3">
                    <label style={{marginRight:"700px"}}>hospital email:</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter Email" 
                     value={reg.email} onChange={(e)=>{dispatch({type:'update',field:'email',val:e.target.value})}} required />
                    </div>
                    <div className="mb-3">
                    <label style={{marginRight:"700px"}} >hospital website:</label>
                    <input name="website" type="text" className="form-control" placeholder="Enter website" 
                     value={reg.website} onChange={(e)=>{dispatch({type:'update',field:'website',val:e.target.value})}} required />
                    </div>
                    <div className="mb-3 text-center mt-2">
                      <button  className="btn btn-outline-success " 
                       onClick={(e)=>{sendData(reg.hospital_id,e)}}>
                       
                        Update
                      </button><span></span> <span> </span>
                      <button  className="btn btn btn-outline-danger " 
                       type="reset"  onClick={deleteHospital}>
                        Delete
                      </button>
                    </div>
                    {/*<button  className="btn btn btn-outline-primary " 
                       type="reset"  onClick={homepage}>
                       Home<tr/>
    </button> */}
                    {msg}
                  </div>
                </div>
                
              </div>
              
            </div>
           
          </div>
         
        
        </div>
        
  
      </div>
    )

}
export default HospitalProfile;