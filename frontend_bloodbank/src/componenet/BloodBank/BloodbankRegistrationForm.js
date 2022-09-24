import { useState, useReducer, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const init = {
  bloodbank_name: "",
  username: "",
  password: "",
  licenceno: "",
  address: "",
  city: "",
  phonenumber: "",
  email: "",
  website: "",
  member_type: "bloodbank",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.field]: action.val };
    case "clear":
      return init;
    default:
  }
};
let BloodbankRegistrationForm = () => {
  const [reg, dispatch] = useReducer(reducer, init);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const sendData = (e) => {
    e.preventDefault();
    setFormErrors(validate(reg));
    setIsSubmit(true);
    console.log("hi");
    const reqData = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        bloodbank_name: reg.bloodbank_name,
        licence_no: reg.licenceno,
        address: reg.address,
        contact_number: reg.phonenumber,
        website: reg.website,
        email: reg.email,
        city: reg.city,
        login: {
          user_name: reg.username,
          password: reg.password,
          member_type: "bloodbank",
        },
      }),
    };
    fetch("http://localhost:8080/savebloodbank", reqData)
      .then((res) => res.text())
      .then((str) => setMsg("Successfully Registration complete"));
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(reg);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pass = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    if (!values.bloodbank_name) {
      errors.bloodbank_name = "*Please enter Bloodbank Name .!";
    }
    if (!values.licenceno) {
      errors.licenceno = "*Please enter your Licence no.!";
    }
    if (!values.username) {
      errors.username = "*Please enter Username!";
    }
    if (!values.phonenumber) {
      errors.phonenumber = "*Please enter your Phone Number.!";
    }
    if (!values.email) {
      errors.email = "*Please enter your Email Id.!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format.!";
    }
    if (!values.website) {
      errors.website = "*Please enter your Website.!";
    }
    if (!values.city) {
      errors.city = "*Please enter your Website.!";
    }
    if (!values.password) {
      errors.password = "*Please enter your Password.!";
    } else if (!pass.test(values.password)) {
      errors.password = "*Please enter secure and strong password.!";
    }
    return errors;
  };

  return (
    <div class="container-xxl p-0">
      <div class="row pb-5 pt-5">
        <div class="container">
          <div class="bg-image" id="bg-image-signup">
            <div class="row" id="container">
              <div class="col-sm-2"></div>
              <div class="col-sm-8 mt-3" id="signupForm">
                <div className="form">
                  <h3 className="label-control text-center m-3 text-success fw-bold">
                    Registration Form Of BloodBank
                  </h3>
                  <div className="mb-3">
                    <input
                      name="bloodbank_name"
                      type="text "
                      className="form-control"
                      placeholder="Enter Blood Bank Name ex. Appolo Blood Bank"
                      value={reg.bloodbank_name}
                      onChange={(e) => {
                        dispatch({
                          type: "update",
                          field: "bloodbank_name",
                          val: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <p className="text-danger">{formErrors.bloodbank_name}</p>
                  <div className="mb-3">
                    <input
                      name="username"
                      type="text "
                      className="form-control"
                      placeholder="Enter User Name ex.appolo_1254"
                      value={reg.username}
                      onChange={(e) => {
                        dispatch({
                          type: "update",
                          field: "username",
                          val: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                  <p className="text-danger">{formErrors.username}</p>

                  <div className="mb-3">
                    <input
                      name="licenceno"
                      type="text"
                      className="form-control"
                      placeholder="Enter Licence No ex. 32541"
                      value={reg.licenceno}
                      onChange={(e) => {
                        dispatch({
                          type: "update",
                          field: "licenceno",
                          val: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                  <p className="text-danger">{formErrors.licenceno}</p>
                  <div className="mb-3">
                    <input
                      name="address"
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      value={reg.address}
                      onChange={(e) => {
                        dispatch({
                          type: "update",
                          field: "address",
                          val: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                  <p className="text-danger">{formErrors.address}</p>
                  <div className="mb-3">
                    <input
                      name="city"
                      type="text "
                      className="form-control"
                      placeholder="Enter City ex. Pune, Mumbai etc."
                      value={reg.city}
                      onChange={(e) => {
                        dispatch({
                          type: "update",
                          field: "city",
                          val: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                  <p className="text-danger">{formErrors.city}</p>
                  <div className="mb-3">
                    <input
                      name="phonenumber"
                      type="number"
                      className="form-control"
                      placeholder="Enter Phone Number"
                      value={reg.phonenumber}
                      onChange={(e) => {
                        dispatch({
                          type: "update",
                          field: "phonenumber",
                          val: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                  <p className="text-danger">{formErrors.phonenumber}</p>
                  <div className="mb-3">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter Email ex. bloodbank@gmail.com etc."
                      value={reg.email}
                      onChange={(e) => {
                        dispatch({
                          type: "update",
                          field: "email",
                          val: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                  <p className="text-danger">{formErrors.email}</p>
                  <div className="mb-3">
                    <input
                      name="website"
                      type="email"
                      className="form-control"
                      placeholder="Enter website ex. www.bloodbank.com etc."
                      value={reg.website}
                      onChange={(e) => {
                        dispatch({
                          type: "update",
                          field: "website",
                          val: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                  <p className="text-danger">{formErrors.website}</p>
                  <div className="mb-3">
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Enter Password "
                      value={reg.password}
                      onChange={(e) => {
                        dispatch({
                          type: "update",
                          field: "password",
                          val: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                  <p className="text-danger">{formErrors.password}</p>
                  <div className="mb-3 text-center mt-2">
                    <button
                      className="btn btn-md btn-block btn-success fw-bold"
                      style={{ marginRight: "10px" }}
                      type="submit"
                      onClick={(e) => {
                        sendData(e);
                      }}
                    >
                      Create a new account
                    </button>
                    <span></span> <span> </span>
                    <button
                      className="btn btn-md btn-block btn-danger fw-bold"
                      style={{ marginLeft: "10px" }}
                      type="reset"
                      onClick={() => {
                        dispatch({ type: "clear" });
                      }}
                    >
                      Clear
                    </button>
                  </div>
                  {msg}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BloodbankRegistrationForm;
