import { useState, useEffect } from "react";
import "../Hospital/style.css";
import { AiFillHome} from "react-icons/ai";
import { Link  } from "react-router-dom";

function PatientForm() {
    const initialValues = {  patient_fname:"",
    patient_lname:"",
    Aadharnumber:"",
    phoneNumber:"",
    age:"",
    Gender:"",
    bloodgrp:"",
    City:"" ,
   registration_date:"",
   hospital_id:""

  };
  
  

   
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const[hospital_id]=sessionStorage["hospital_id"]
 
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
  
      console.log("submited");
        const reqData={
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({
            
              patient_fname:formValues.patient_fname,
              patient_lname:formValues.patient_lname,
              aadharnumber:formValues.Aadharnumber,
              phoneNumber:formValues.phoneNumber,
              age:formValues.age,
              gender:formValues.Gender,
              bloodgrp:formValues.bloodgrp,
              city:formValues.City,
              registration_date:formValues.registration_date,
              hospital: {
                hospital_id:hospital_id
             },

              
            })
  
        }
       
        fetch("http://localhost:8080/savePatient",reqData)
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
      if (!values.patient_lname) {
        errors.patient_lname = "*Please enter Patient last Name.!";
      }
      
      
      if (!values.phoneNumber) {
        errors.phoneNumber = "*Please enter PatientPhone Number.!";
      }
      if (!values.Aadharnumber) {
        errors.Aadharnumber = "*Please enter Patient Aadharnumber.!";
      }
      
      if (!values.age) {
        errors.age= "*Please enter Patient age.!";
      }
      if (values.City=="") {
        errors.City = "*Please select Patient city.!";
      }
      if (values.Gender=="") {
        errors.Gender = "*Please select Patient Gender.!";
      }
      if (values.bloodgrp=="") {
        errors.bloodgrp = "*Please select Patient BloodGroup.!";
      }
      if (values.registration_date=="") {
        errors.registration_date = "*Please select date.!";
      }
     
      return errors;
    };
  
    return (
      <div className="container" id="hos-reg">
       { /* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre> 
        )} */}
        
        <form onSubmit={handleSubmit} >
          <h1  className="label-control text-center m-3 text-success fw-bold"> Patient Registation </h1>
          <div   style={{marginLeft:"800px"}}> <Link class="btn btn btn-outline-primary " to={`/hospitalhome`}>
                    <AiFillHome/><span> home      </span>
                  </Link></div>
          <hr/>
          
          
            
          <div className="row g-3">
            <div className="col-6">
              <label >Patient First Name:</label>
              <input
                type="text"
                className="form-control"
                name="patient_fname"
                placeholder="Enter patient last name"
                value={formValues.patient_fname}
                onChange={handleChange}
              />
              <p className="text-danger">{formErrors.patient_fname}</p> 
            </div>
            {/*<p className="text-danger">{formErrors.Hospital_name}</p> */}
            <div className="col-6">
              <label> Patient Last Name</label>
              <input
                type="text"
                className="form-control"
                name="patient_lname"
                placeholder="Enter patient last name"
                value={formValues.patient_lname}
                onChange={handleChange}
              />
               <p className="text-danger">{formErrors.patient_lname}</p> 
            </div>
           {/* <p className="text-danger">{formErrors.Hospital_username}</p> */}
           </div>
           <br/>
  
           <div className="row g-3">
            <div className="col-6">
              <label> Aadharnumber: </label>
              <input
                type="text"
                className="form-control"
                name="Aadharnumber"
                placeholder="Enter Aadharnumber number"
                value={formValues.Aadharnumber}
                onChange={handleChange}
              />
               <p className="text-danger">{formErrors.Aadharnumber}</p> 
            </div>
            
  
            
            <div className="col-6">
              <label> Phone Number:</label>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                placeholder="Enter  phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
              />
              <p className="text-danger">{formErrors.phoneNumber}</p>
            </div>
           
  
            
            </div>
  
  <br/>
          
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
  <div className="row g-11"  display='flex'
        alignItems='center'
        justifyContent= 'center'>
  <div className="col-2">
            <label htmlFor="inputState3" className="htmlform-label" >
              Gender:
            </label>
            <select
              id="inputState3"
              name="Gender" 
              className="form-control" 
              onChange={handleChange}
              value={formValues.Gender}
            >
              <option name="Gender" value="">Choose  </option>
              <option name="Gender" value="Male">Male</option>
              <option name="Gender" value="Female">Female</option>
            </select>
            <p className="text-danger">{formErrors.Gender}</p> 
          </div>
         
  
  
  
       <div className="col-2">
           <label htmlFor="inputState3" className="htmlform-label">City :</label>
           <select  htmlFor="inputState3"  className="form-control" 
             name="City"  onChange={handleChange} value={formValues.City}  >
        <option name="City"  >Choose  </option>
        <option name="City"  value="Pune">Pune</option>
        <option name="City"  value="Mumbai">Mumbai</option>
        <option name="City"  value="Nagpur">Nagpur</option>
        <option name="City"  value="Panji">Panji</option>
        <option name="City"  value="Gandhinagar">Gandhinagar</option>
        <option name="City"  value="other">other</option> 
      </select>
      <p className="text-danger">{formErrors.City}</p> 
      </div>

      <div className="col-2">
            <label htmlFor="inputState3" className="htmlform-label">
              Blood group
            </label>
            <select
            name="bloodgrp"
              htmlFor="inputState3"  className="form-control" 
              onChange={handleChange}
              value={formValues.bloodgrp}
              
            >
              <option name="bloodgrp" value="kkkk">Choose</option>
              <option value="A-">A-</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <p className="text-danger">{formErrors.bloodgrp}</p> 
          </div>

          <div className="col-3">
              <label> Age:</label>
              <input
                type="Number"
                className="form-control"
                name="age"
                placeholder="Enter  Age"
                value={formValues.age}
                onChange={handleChange}
              />
              <p className="text-danger">{formErrors.age}</p>
            </div>

          <div className="col-3">
              <label> Registation Date</label>
              <input
                type="Date"
                className="form-control"
                name="registration_date"
                placeholder="Enter  Age"
                value={formValues.registration_date}
                onChange={handleChange}
              />
              <p className="text-danger">{formErrors.registration_date}</p>
    </div>  
    </div>
          
    <br/>
    
  
           
           
          
            <button  className="btn btn-md btn-block btn-outline-success ">Submit</button>
           
          
        </form>
        
      
      </div>
    );
}

export default PatientForm;