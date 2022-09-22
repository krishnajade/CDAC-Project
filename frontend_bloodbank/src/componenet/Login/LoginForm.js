import { useState, useEffect } from "react";
import "./LoginForm.css";
import axios from "axios";
import { toast } from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function LoginForm() {
  const initialValues = { username: "", user_type: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate()
  const [msg,setMsg]=useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlClear = ()=>{
     setFormValues({ initialValues })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    const body={
      user_name:formValues.username,
      password:formValues.password
    }
    const url=`http://localhost:8080/checkLogin`;

    axios.post(url,body).then((response)=>{
      const result = response.data
        console.log(result)
        if (result.length!=0){
          toast.success('Welcome')

        if(result.login.member_type=="bloodbank")
        {
          sessionStorage['user_id']=result.login.user_id
          sessionStorage['bloodbank_id']=result.bloodBank_id
          sessionStorage['licence_no']=result.licence_no
          sessionStorage['bloodbank_name']=result.bloodbank_name
          sessionStorage['address']=result.address
          sessionStorage['city']=result.city
          sessionStorage['contact_number']=result.contact_number
          sessionStorage['email']=result.email
          sessionStorage['website']=result.website
          navigate("/bloodbankhome");
        }
        if(result.login.member_type=="hospital")
        {
          sessionStorage['hospital_id']=result.hospital_id
          sessionStorage['licence_no']=result.licence_no
          sessionStorage['hospital_name']=result.hospital_name
          sessionStorage['address']=result.address
          sessionStorage['city']=result.city
          sessionStorage['phonenumber']=result.contact_number
          sessionStorage['email']=result.email
          sessionStorage['website']=result.website
          navigate("/hospitalhome");
        }
        if (result.login.member_type == "donor") {
          sessionStorage["donor_id"] = result.donor_id;
          sessionStorage["donor_name"] = result.donor_name;
          sessionStorage["address"] = result.address;
          sessionStorage["city"] = result.city;
          sessionStorage["phonenumber"] = result.contact_number;
          sessionStorage["email"] = result.email;
          sessionStorage["age"]=result.age;
          sessionStorage["bloodgroup"]=result.blood_group;
          
          navigate("/donorhome");
        }
        if (result.login.member_type == "admin") {
          sessionStorage["admin_id"] = result.admin_id;
          sessionStorage["admin_name"] = result.admin_name;
          navigate("/adminhome");
        }
        } else
        {
          toast.error('Invalid user name or password');
        }
      }
      ).catch(err=>alert("Please Enter Correct inputs"))
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {}
   
    if (!values.username) {
      errors.username = "Username is required!";
    }
    
   
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container" id="login-form">
     

      <form onSubmit={handleSubmit}>
        <h1 className="label-control text-center m-3 text-success fw-bold" >Signin Form</h1>
        <hr/>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="mb-3">
          <span id="msg">{msg}</span>
            <label className="form-label">Username :</label>
            <input
             className="form-control"
              type="text"
              name="username"
              placeholder="ex. Appolo123 or appolo"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
         
         <div className="mb-3">
         <label className="dropdown__label">Select User Type :</label>
         <select  type="text" className="form-control"  name="user_type" value={formValues.user_type} onChange={handleChange}>
      <option name="user_type" value="one"  >Open this select menu </option>
      <option name="user_type"  value="bloodbank">Blood Bank</option>
      <option name="user_type"  value="hospital">Hospital</option>
      <option name="user_type"  value="donor">Donor</option>
      <option name="user_type"  value="admin">Admin</option>

    </select>

         </div>
          


          <div className="mb-3">
            <label  className="font-weight-bold" >Password :</label>
            <input
             className="form-control"
              type="password"
              name="password"
              placeholder="***********"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <hr/>
          <div >
          <button className="btn btn-md btn-block btn-success fw-bold" style={{ marginRight: "10px" }}>Submit</button>
          <button  className="btn btn-md btn-block btn-danger fw-bold"style={{ marginLeft: "10px" }}
                   type="reset"  onClick={handlClear}> Clear </button>
            </div>
            <Link to={"/"}> Create Account </Link>
        </div>
      </form>
    </div>
  );

}
export default LoginForm;