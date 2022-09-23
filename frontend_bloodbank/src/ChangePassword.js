import { useState, useEffect } from "react";
import "../Login/LoginForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ChangePassword() {
  const initialValues = { cpassword: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlClear = () => {
    setFormValues({ initialValues });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    axios
      .put(
        `http://localhost:8080/updatPassword?user_id=${sessionStorage["user_id"]}&password=${formValues.password}`
      )
      .then((res) => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
          window.location = "/hospitalhome";
        }
      });
  };

  useEffect(() => {}, [formErrors]);
  const validate = (values) => {
    const errors = {};

    if (!values.cpassword) {
      errors.cpassword = "Password is required";
    } else if (values.cpassword.length < 4) {
      errors.cpassword = "Password must be more than 4 characters";
    } else if (values.cpassword.length > 10) {
      errors.cpassword = "Password cannot exceed more than 10 characters";
    }
    if (values.password !== values.cpassword) {
      errors.password = "Password not match";
    }
    return errors;
  };

  return (
    <div className="container" id="login-form">
      <form onSubmit={handleSubmit}>
        <h1 className="label-control text-center m-3 text-success fw-bold">
          Change Password
        </h1>
        <hr />

        <div className="ui form">
          <div className="mb-3">
            <label className="form-label">Username :</label>
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="Username"
              value={sessionStorage["user_name"]}
            />
          </div>
          <p>{formErrors.username}</p>

          <div className="mb-3">
            <label className="form-label">New Password :</label>
            <input
              className="form-control"
              type="Password"
              name="cpassword"
              placeholder="*************"
              value={formValues.cpassword}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.cpassword}</p>

          <div className="mb-3">
            <label className="font-weight-bold"> confirm new Password :</label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="**************"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.password}</p>
        </div>
        <hr />
        <div>
          <button className="btn btn-md btn-block btn-success fw-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default ChangePassword;
