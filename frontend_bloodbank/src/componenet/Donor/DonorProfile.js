import React, { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../BloodBank/RegistrationForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const init = {
  user_id: sessionStorage["user_id"],
  id: sessionStorage["donor_id"],
  donor_name: sessionStorage["donor_name"],
  age: sessionStorage["age"],
  address: sessionStorage["address"],
  city: sessionStorage["city"],
  phonenumber: sessionStorage["contact_number"],
  email: sessionStorage["email"],
  bloodgroup: sessionStorage["bloodgroup"],
  aadharno: sessionStorage["aadharno"],
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
const DonorProfile = () => {
  const [reg, dispatch] = useReducer(reducer, init);
  const [msg] = useState("");
  const navigate = useNavigate();

  const donorhome = () => {
    navigate("/donorhome");
  };
  const deletedonor = (id, e) => {
    e.preventDefault();
    if (window.confirm("confirm delete")) {
      axios
        .delete(`http://localhost:8080/deleteDonor?user_id=${id}`)
        .then((res) => console.log("Deleted..."))
        .catch((err) => console.log(err));
      alert("Account Deleted");
      navigate("/");
    } else {
      window.alert("Account not deleted");
    }
  };
  const sendData = (id, e) => {
    e.preventDefault();
    console.log("hi");
    axios
      .put(`http://localhost:8080/updateDonor?donor_id=${id}`, {
        donor_name: reg.donor_name,
        age: reg.age,
        address: reg.address,
        contact_number: reg.phonenumber,
        aadharno: reg.aadharno,
        bloodgroup: reg.bloodgroup,
        email: reg.email,
        city: reg.city,
      })
      .then((response) => {
        const result = response.data;
        if (result.length !== 0) {
          sessionStorage["donor_name"] = result.donor_name;
          sessionStorage["address"] = result.address;
          sessionStorage["city"] = result.city;
          sessionStorage["contact_number"] = result.contact_number;
          sessionStorage["email"] = result.email;
          sessionStorage["age"] = result.age;
          sessionStorage["bloodgroup"] = result.bloodgroup;
          sessionStorage["aadharno"] = result.aadharno;
        }
      })
      .catch((err) => console.log(err));
    window.location.reload(false);
    alert("successfully updated Account");
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
                    Profile Of donor
                  </h3>

                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      name="donor_name"
                      type="text "
                      className="form-control"
                      placeholder="Enter Blood Bank Name"
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
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Address</label>
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

                  <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                      name="age"
                      type="text"
                      className="form-control"
                      placeholder="Enter age"
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
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Aadharno</label>
                    <input
                      name="aadharno"
                      type="text"
                      className="form-control"
                      placeholder="Enter aadharno"
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
                  </div>

                  <div className="mb-3">
                    <label className="form-label">City</label>
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
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact Number</label>
                    <input
                      name="phonenumber"
                      type="text"
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

                  <div className="mb-3">
                    <label className="form-label">Bloodgroup</label>
                    <br></br>
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

                  <div className="mb-3">
                    <label className="form-label">Email</label>
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
                  </div>

                  <div className="mb-3 text-center mt-2">
                    <button
                      className="btn btn-md btn-block btn-primary fw-bold"
                      style={{ marginRight: "10px" }}
                      type="submit"
                      onClick={donorhome}
                    >
                      Goto Home
                    </button>
                    <span></span> <span> </span>
                    <button
                      className="btn btn-md btn-block btn-success fw-bold"
                      style={{ marginRight: "10px", marginLeft: "10px" }}
                      type="submit"
                      onClick={(e) => {
                        sendData(reg.id, e);
                      }}
                    >
                      Update donor
                    </button>
                    <span></span> <span> </span>
                    <button
                      className="btn btn-md btn-block btn-danger fw-bold "
                      style={{ marginLeft: "10px" }}
                      onClick={(e) => {
                        deletedonor(reg.id, e);
                      }}
                    >
                      Delete donor
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
export default DonorProfile;
