import { useState, useReducer, useEffect } from "react";
import background from "../../asset/light_background.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../BloodBank/RegistrationForm.css";

const init = {
  donor_name: "",
  username: "",
  password: "",
  aadharno: "",
  address: "",
  city: "",
  phonenumber: "",
  email: "",
  gender: "",
  bloodgroup: "",
  member_type: "donor",
};
const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "update":
      return { ...state, [action.field]: action.val };
    case "clear":
      return init;
  }
};
let DonorRegistrationForm = () => {
  const [reg, dispatch] = useReducer(reducer, init);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [msg, setMsg] = useState("");

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
        donor_name: reg.donor_name,
        age: reg.age,
        aadharno: reg.aadharno,
        address: reg.address,
        contact_number: reg.phonenumber,
        gender: reg.gender,
        email: reg.email,
        city: reg.city,
        blood_group: reg.bloodgroup,
        login: {
          user_name: reg.username,
          password: reg.password,
          member_type: "donor",
        },
      }),
    };
    fetch("http://localhost:8080/saveDonor", reqData)
      .then((res) => res.text())
      .then((str) => setMsg(" Registration Successfully completed"));
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

    const pass =
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    //At least one upper case English letter
    // At least one lower case English letter
    // At least one digit
    // At least one special character
    // Minimum eight in length

    if (!values.donor_name) {
      errors.donor_name = "*Please enter your Name .!";
    }
    if (!values.age) {
      errors.age = "*Please enter your Age .!";
    }

    if (!values.aadharno) {
      errors.aadharno = "*Please enter your aadhar no.!";
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
    if (!values.gender) {
      errors.gender = "*Please choose your gender.!";
    }
    if (!values.city) {
      errors.city = "*Please enter your City.!";
    }
    if (!values.password) {
      errors.password = "*Please enter your Password.!";
    } else if (!pass.test(values.password)) {
      errors.password =
        "Password should have min. 8 characters length having at least a upper case letter,a digit & a special character";
    }
    return errors;
  };

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div className="container-xxl p-0">
        <div className="row pb-5 pt-5">
          <div className="container">
            <div className="bg-image" id="bg-image-signup">
              <div className="row" id="container">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 mt-3" id="signupForm">
                  <div className="form">
                    <h1 className="label-control text-center m-3 text-danger fw-bold">
                      Registration Form Of Donor
                    </h1>

                    <div className="row">
                      <div className="col-md-5">
                        <h6>
                          <label for="donorname">Name</label>
                        </h6>
                        <input
                          name="donor_name"
                          type="text "
                          className="form-control"
                          placeholder="Enter First Name"
                          value={reg.donor_name}
                          onChange={(e) => {
                            dispatch({
                              type: "update",
                              field: "donor_name",
                              val: e.target.value,
                            });
                          }}
                          required
                        />
                        <p className="text-danger">{formErrors.donor_name}</p>
                      </div>

                      <div className="col-md-5">
                        <h6>
                          <label for="age"> Age</label>
                        </h6>
                        <input
                          name="age"
                          type="text "
                          className="form-control"
                          placeholder="Enter Your age"
                          value={reg.age}
                          onChange={(e) => {
                            dispatch({
                              type: "update",
                              field: "age",
                              val: e.target.value,
                            });
                          }}
                          required
                        />
                        <p className="text-danger">{formErrors.age}</p>
                      </div>
                    </div>
                    <br></br>

                    <div className="row">
                      <div className="col-md-5">
                        <h6>
                          <label for="aadharno"> Aadharno</label>
                        </h6>
                        <input
                          name="aadharno"
                          type="text "
                          className="form-control"
                          placeholder="Enter Your aadharno"
                          value={reg.aadharno}
                          onChange={(e) => {
                            dispatch({
                              type: "update",
                              field: "aadharno",
                              val: e.target.value,
                            });
                          }}
                          required
                        />
                        <p className="text-danger">{formErrors.aadharno}</p>
                      </div>

                      <div className="col-md-5">
                        <h6>
                          <label for="address">Address</label>
                        </h6>
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
                        <p className="text-danger">{formErrors.address}</p>
                      </div>
                    </div>
                    <br></br>

                    <div className="row">
                      <div className="col-md-5">
                        <h6>
                          <label for="city">City</label>
                        </h6>
                        <input
                          name="city"
                          type="text "
                          className="form-control"
                          placeholder="Enter City"
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
                        <p className="text-danger">{formErrors.city}</p>
                      </div>

                      <div className="col-md-5">
                        <h6>
                          <label for="contact_number">Contact number</label>
                        </h6>
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
                        <p className="text-danger">{formErrors.phonenumber}</p>
                      </div>
                    </div>
                    <br></br>

                    <div className="row">
                      <div className="col-md-5">
                        <h6>
                          <label for="email">Email</label>
                        </h6>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
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
                        <p className="text-danger">{formErrors.email}</p>
                      </div>

                      <div className="col-md-1">
                        <h6>
                          <label for="gender">Gender</label>
                        </h6>
                        <select
                          name="gender"
                          value={reg.gender}
                          onChange={(e) => {
                            dispatch({
                              type: "update",
                              field: "gender",
                              val: e.target.value,
                            });
                          }}
                        >
                          <option>Choose</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                        <p className="text-danger">{formErrors.gender}</p>
                      </div>

                      <div className="col-md-">
                        <h6>
                          <label for="bloodgroup">Blood Group</label>
                        </h6>
                        <select
                          name="bloodgroup"
                          value={reg.bloodgroup}
                          onChange={(e) => {
                            dispatch({
                              type: "update",
                              field: "bloodgroup",
                              val: e.target.value,
                            });
                          }}
                        >
                          <option>Select blood Group</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>
                      </div>
                    </div>
                    <br></br>

                    <div className="row">
                      <div className="col-md-5">
                        <h6>
                          <label for="donorname"> Username</label>
                        </h6>
                        <input
                          name="username"
                          type="text "
                          className="form-control"
                          placeholder="Enter User Name"
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
                        <p className="text-danger">{formErrors.username}</p>
                      </div>
                      <div className="col-md-5">
                        <h6>
                          <label for="donorname">Password</label>
                        </h6>
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
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
                        <p className="text-danger">{formErrors.password}</p>
                      </div>
                    </div>

                    <br></br>
                    <div className="mb-3 mr-1 text-center mt-2">
                      <button
                        className="btn btn-outline-primary fw-bold"
                        type="submit"
                        onClick={(e) => {
                          sendData(e);
                        }}
                      >
                        Create a new account
                      </button>

                      <button
                        className="btn btn-outline-danger fw-bold "
                        type="reset"
                        onClick={() => {
                          dispatch({ type: "clear" });
                        }}
                      >
                        Clear
                      </button>
                    </div>

                    <div className="anchorclass">
                      <a href="/signIn" class="link-danger">
                        <h5>Sign in</h5>
                      </a>
                    </div>

                    {msg}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DonorRegistrationForm;
