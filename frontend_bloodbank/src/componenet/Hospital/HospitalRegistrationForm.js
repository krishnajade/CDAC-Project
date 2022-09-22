import { useState,useReducer,useEffect } from "react";
import "./style.css";
import login from "../Login/LoginForm"
//import Axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {  Hospital_name:"",
  Hospital_username:"",
  Licenceno:"",
  phoneNumber:"",
  email:"",
  website:"",
  Address:"",
  State:"",
  City:"" ,
  password:""
};


const reducer =(state,action)=>
{
    switch(action.type)
    {
        case 'update' :
            return {...state,[action.field]:action.val};
        case 'clear':
            return initialValues;
    }
}
function HospitalRegistrationForm() {
  

   const[formValues,dispatch]=useReducer(reducer,initialValues);
  const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [msg,setMsg]=useState("");


  const handleSubmit=(e)=>
    {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        console.log("hi");
        const reqData={
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body: JSON.stringify({
          
            
             hospital_name:formValues.Hospital_name,
            licence_no:formValues.Licenceno,
            address:formValues.Address,
            website:formValues.website,
            email:formValues.email,
            state:formValues.State,
            city:formValues.City,
            phoneNumber:formValues.phoneNumber,
            login:{
              user_name:formValues.Hospital_username,
              password:formValues.password,
              member_type:"hospital"
            } 
          })

      }

      
      fetch("http://localhost:8080/savehospital",reqData)
      .then(res=>res.text())
      .then(str=>setMsg("Successfully Registration complete"))
      alert("successfully Registration Complete");
     // navigate("/signIn");
      window.location.reload("/signIn");
       
 
    
  {/*
    const res = "http://localhost:8080/savehospital" 
    Axios.post(res,{
      hospital_name:formValues.Hospital_name,
      licence_no:formValues.Licenceno,
      address:formValues.Address,
      website:formValues.website,
      email:formValues.email,
      state:formValues.State,
      city:formValues.City,
      phoneNumber:formValues.phoneNumber,
      login:{
        user_name:formValues.Hospital_username,
        password:formValues.password,
        user_type:"hospital"
      } 
    })
    .then((response)=>{
      alert("Signed in successfully")
    })
    .then((res) => {
      if (res.status == 200) {
        navigate({login});

  } */}

  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pass =/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/ ;
    if (!values.Hospital_name) {
      errors.Hospital_name = "*Please enter Hospital Name .!";
    }
    if (!values.Licenceno) {
      errors.Licenceno = "*Please enter your Licence no.!";
    }
    if (!values.Hospital_username) {
      errors.Hospital_username = "*Please enter Username!";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "*Please enter your Phone Number.!";
    }
    if (!values.email) {
      errors.email = "*Please enter your Email Id.!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format.!";
    }
    if (!values.website) {
      errors.website = "*Please enter your Website.!";
    }
    if (!values.Address) {
      errors.Address = "*Please enter your Addess.!";
    }
    if (values.City==="one") {
      errors.City = "*Please enter your city.!";
    }
    if(!values.password){
      errors.password="*Please enter your Password.!"
    }else if (!pass.test(values.password)) {
      errors.password = "*Please enter secure and strong password.!";
 
    }
    return errors;
  };

  return (
    <div>
    <div className="container" id="hos-reg">
     { /* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre> 
      )} */}

      <div >
        <h1  className="label-control text-center m-3 text-success fw-bold"> Hospital Registation </h1>
        <hr/>
        
        
          
        <div className="row g-3">
          <div className="col-6">
            <label style={{textAlign:'left'}} >Hospital Name:</label>
            <input
              type="text"
              className="form-control"
              name="Hospital_name"
              placeholder="Enter Hospital Name"
              value={formValues.Hospital_name}
              onChange={(e)=>{dispatch({type:'update',field:'Hospital_name',val:e.target.value})}} required
            />
            <p className="text-danger">{formErrors.Hospital_name}</p> 
          </div>
          {/*<p className="text-danger">{formErrors.Hospital_name}</p> */}
          <div className="col-6">
            <label> Username:</label>
            <input
              type="text"
              className="form-control"
              name="Hospital_username"
              placeholder="Enter Hospital Name"
              value={formValues.Hospital_username}
              onChange={(e)=>{dispatch({type:'update',field:'Hospital_username',val:e.target.value})}} required
            />
             <p className="text-danger">{formErrors.Hospital_username}</p> 
          </div>
         {/* <p className="text-danger">{formErrors.Hospital_username}</p> */}
         </div>
         <br/>

         <div className="row g-3">
          <div className="col-6">
            <label> Licenceno:</label>
            <input
              type="text"
              className="form-control"
              name="Licenceno"
              placeholder="Enter  Licenceno"
              value={formValues.Licenceno}
              onChange={(e)=>{dispatch({type:'update',field:'Licenceno',val:e.target.value})}} 
            />
            <p className="text-danger">{formErrors.Licenceno}</p>
          </div>
          

          
          <div className="col-6">
            <label id="lb"> Phone Number:</label>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              placeholder="Enter  phoneNumber"
              value={formValues.phoneNumber}
              onChange={(e)=>{dispatch({type:'update',field:'phoneNumber',val:e.target.value})}} required
            />
            <p className="text-danger">{formErrors.phoneNumber}</p>
          </div>
         

          
          <div className="row g-3">
          <div className="col-6">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder=" Enter Email Id"
              value={formValues.email}
              onChange={(e)=>{dispatch({type:'update',field:'email',val:e.target.value})}} required
            />
              <p className="text-danger">{formErrors.email}</p>
          </div>
        

          <div className="col-6">
            <label>website :</label>
            <input
              type="text"
             
              className="form-control"
              name="website"
              placeholder=" Enter website "
              value={formValues.website}
              onChange={(e)=>{dispatch({type:'update',field:'website',val:e.target.value})}} required
            />
             <p className="text-danger">{formErrors.website}</p>
          </div>
         
        </div>
          </div>

<br/>
          <div className="field col-12">
            <label>Address :</label>
            <textarea
              
              
              className="form-control"
              name="Address"
              placeholder=" Enter Address"
              value={formValues.Address}
              onChange={(e)=>{dispatch({type:'update',field:'Address',val:e.target.value})}} required
            />
          </div>
          <p className="text-danger">{formErrors.Address}</p>

     {/*  <div className="field">
            <label>city :</label>
            <input
              type="text"
              className="form-control"
              name="City"
              placeholder=" Enter  City"
              value={formValues.City}
              onChange={handleChange}
            />
    </div>  */}
<br/>
<div className="row g-3">
      
{/*<div className="col-6">
         <label className="dropdown__label">State:</label>
         <select   className="form-control"  name="State" value={formValues.State} 
          onChange={(e)=>{dispatch({type:'update',field:'State',val:e.target.value})}} required>
      <option name="State" value="one"  >Choose  </option>
      <option name="State"  value="Maharashtra">Maharashtra</option>
      <option name="State"  value="Gao">Gao</option>
      <option name="State"  value="Gujrat">Gujrat</option>
      <option name="State"  value="other">other</option> 
    </select>
  </div>*/}
  



     <div className="col-6">
         <label className="dropdown__label">City :</label>
         <select   className="form-control"  name="City" value={formValues.City} 
          onChange={(e)=>{dispatch({type:'update',field:'City',val:e.target.value})}} required>
      <option name="City" value="one"  >Choose  </option>
      <option name="City"  value="Pune">Pune</option>
      <option name="City"  value="Mumbai">Mumbai</option>
      <option name="City"  value="Nagpur">Nagpur</option>
      <option name="City"  value="Panji">Panji</option>
      <option name="City"  value="Gandhinagar">Gandhinagar</option>
      <option name="City"  value="other">other</option> 
    </select>
    </div>
    <div className="field col-6">
            <label>Password :</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={(e)=>{dispatch({type:'update',field:'password',val:e.target.value})}} required
            />
          </div>
          <p className="text-danger">{formErrors.password}</p>
          <hr/>
      </div>
  </div>
        
  <br/>
  

         
         
         {/* <p className="text-danger">{formErrors.City}</p> */}

          
      </div>
      <button  className="btn btn-md btn-block text-center btn-success fw-bold"   onClick={(e)=>{handleSubmit(e)}}>Create New Account</button>
      <div></div>
    </div>

  );
}

export default HospitalRegistrationForm;