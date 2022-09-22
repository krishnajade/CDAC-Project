import { useEffect, useState,useReducer } from "react";
import {useParams , Link } from "react-router-dom";

const init={
    bloodbank_id:"",
    patient_fname:"",
    bloodcomponent:"",
    quntity:"",
    patient_lname:""
  }
let RequestToBlood= () => {

    const [pt, setpt] = useState([]);
    const [bloodbank,setBloodbank]=useState([]);
    const[id,setId]=useState();
    const {patient_id} =useParams();
    const [fname , setfname]=useState();
    const current = new Date();
    
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    //getting patient details
   
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
    const[formValues,dispatch]=useReducer(reducer,init);
    useEffect( ()=> {
        console.log("calling server API")
        fetch("http://localhost:8080/getpatientbyPatientid/"+patient_id)
        .then( resp =>  resp.json() )
        .then( data =>  setpt(data) )
    },[]);
     //getting Hospital details
    useEffect(()=>{
        fetch(`http://localhost:8080/getallbloodbank`)
        .then(resp=> resp.json())
        .then(data=>setBloodbank(data))
      },[]);

      useEffect(()=>{
        fetch(`http://localhost:8080/getallbloodbank`)
        .then(resp=> resp.json())
        .then(data=>setBloodbank(data))
      },[]);

      const sendData=(e)=>{
        e.preventDefault();
        console.log("hi");
        const reqData={
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body: JSON.stringify({
            hospital_id:sessionStorage["hospital_id"],
            hospital_name:sessionStorage["hospital_name"],
            hospital_phone_number:sessionStorage["phoneNumber"],
            blood_bank_id:id,
            
            request_date:current,
            blood_component:formValues.bloodcomponent,
            quantity:formValues.quntity,
            request_status:"pending",
            patient: {
              patient_id:patient_id
           }
          
          })

      }
      console.log(reqData);
      fetch('http://localhost:8080/saveRequest',reqData)
      .then((res) => {
        if (res.status == 200) {
          window.location='/hospitalhome'
        }
      });
    }


    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      
      if (!values.patient_fname) {
        errors.patient_fname = "*Please enter Patient First Name .!";
      }
      if (!values.quntity) {
        errors.quntity = "*Please enter Patient last Name.!";
      }
      if (values.bloodcomponent=="") {
        errors.bloodcomponent = "*Please select date.!";
      }
    }
  
           
    return (
        <div>
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
                    <h3 className="label-control text-center m-3 text-success fw-bold">
                      Hospital Request
                    </h3>
                   {
                    pt.map((v)=>{
                        return (
                           
                            <div >
                                <div className="row g-3">
                 <div className="col-6">
                    <h5 > Patient FirstName: </h5>
                    <h6>{v.patient_fname}</h6>
                    </div>
                    <div className="col-6">
                      <h5 className="form-label">Patient LirstName:</h5>
                      <h6 value={formValues.patient_lname} 
                       onChange={(e)=>{dispatch({type:'update',field:'patient_lname',val:e.target.value})}}>{v.patient_lname}</h6>
                    </div>
                    </div>
                    <br/>
                    <div className="row g-3">
                    <div className="col-6">
                      <h5 className="form-label"> Patient Age:</h5>
                      
                      <h6>{v.age}</h6>
                    </div>
                    <div className="col-6">
                      <h5 className="form-label">Blood Group:</h5>
                      <h6  style={{TextAlign:"left"}}>{v.bloodgrp}</h6>
                      
                    </div>
                    </div>
                    
                    </div>
     
                        )
                    })                    
                }
                <hr/>

                <div className="row g-3">
                <div className="col-2 " style={ {marginLeft:"250px" }}>
                    
              <h5 style={{TextAlign:"left"}}>Quntity:</h5>
              <input
                type="number"
                className="form-control"
                name="Blood"
                placeholder="select Number of requred unit "
                value={formValues.quntity}
                onChange={(e)=>{dispatch({type:'update',field:'quntity',val:e.target.value})}} 
                
              />
               <p className="text-danger">{formErrors.quntity}</p> 
              </div>
              <div className="col-2" style={ {marginLeft:"100px" }}>
              <h5>Component :</h5>
                       <select className="form-control " name="bloodcomponent" value={formValues.bloodcomponent} 
                       onChange={(e)=>{dispatch({type:'update',field:'bloodcomponent',val:e.target.value})}} required>
                        <option name="bloodcomponent" value="">Select Blood Component</option>
                        <option name="bloodcomponent" value="Whole Blood">Whole Blood</option>
                        <option name="bloodcomponent" value="Plasma">Plasma</option>
                        <option name="bloodcomponent" value="Platelets">Platelets</option>
                        <option  name="bloodcomponent" value="Red Blood Cell">Red Blood Cell</option>
                      </select>
                      <p className="text-danger">{formErrors.bloodcomponent}</p> 
              </div>
              </div>
              <br/>
                                <hr/>

              {/*
                  blood bank         */}
              <div className="mb-3">
                      <table className="table table-white table-striped table-hover">
                        <thead>
                          <tr  class="clickableRow">
                            <th>Bloodbank Name</th>
                            <th> Contact number</th>
                            <th>City</th>
                            <th>Address</th>
                            <th>Select Blood Bank</th>
                          </tr>
                        </thead>
                    <tbody>
                {

                   bloodbank.map((v)=>
                  {
                      return (
                          <tr>
                              <td>{v.bloodbank_name}</td>
                              <td>{v.contact_number}</td>
                              <td>{v.city}</td>
                              <td>{v.address}</td>
                              <td>
                                <input class="form-check-input" type="radio" style={{borderRadius:140/2 , width:20, height:20}} name="bloodbank_id" className="btn btn-primary" onClick={()=>{setId(v.bloodBank_id)}}></input></td>
                          </tr>
                      )
                  } )
                  
                }
              </tbody>
              </table>
                    </div>

                
                    <div className="mb-3 text-center mt-2">
                    <Link class="btn btn btn-outline-primary " to={`/PatientList`}>
                    Back to Link
                  </Link>
                   <span></span>      <span>       </span>
                      <button  className="btn btn-md btn btn-outline-success " style={{ marginRight: "10px" }}
                       type="submit" onClick={(e)=>{sendData(e)}}>
                        Request to Blood
                      </button><span></span> <span> </span>
                      </div>  
            </div>           
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

    )
}

export default RequestToBlood;