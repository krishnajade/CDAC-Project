import React, { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegistrationForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const init = {
  user_id: sessionStorage["user_id"],
  id: sessionStorage["bloodbank_id"],
  bloodbank_name: sessionStorage["bloodbank_name"],
  licenceno: sessionStorage["licence_no"],
  address: sessionStorage["address"],
  city: sessionStorage["city"],
  phonenumber: sessionStorage["contact_number"],
  email: sessionStorage["email"],
  website: sessionStorage["website"],
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
const BloodBankProfile = () => {
  const [reg, dispatch] = useReducer(reducer, init);
  const [msg] = useState("");
  const navigate = useNavigate();

  const bloodbankhome = () => {
    navigate("/bloodbankhome");
  };
  const deleteBloodbank = (user_id, e) => {
    e.preventDefault();
    if (window.confirm("confirm delete")) {
      axios
        .delete(`http://localhost:8080/deleteBloodbank?user_id=${user_id}`)
        .then((res) => console.log("Deleted..."))
        .catch((err) => console.log(err));
      alert("Account Deleted");
      navigate("/");
    } else {
      window.alert("Account not delete");
    }
  };
  const sendData = (id, e) => {
    e.preventDefault();
    console.log("hi");
    axios
      .put(`http://localhost:8080/updateBloodbank?bloodbank_id=${id}`, {
        bloodbank_name: reg.bloodbank_name,
        licence_no: reg.licenceno,
        address: reg.address,
        contact_number: reg.phonenumber,
        website: reg.website,
        email: reg.email,
        city: reg.city,
      })
      .then((response) => {
        const result = response.data;
        if (result.length !== 0) {
          sessionStorage["licence_no"] = result.licence_no;
          sessionStorage["bloodbank_name"] = result.bloodbank_name;
          sessionStorage["address"] = result.address;
          sessionStorage["city"] = result.city;
          sessionStorage["contact_number"] = result.contact_number;
          sessionStorage["email"] = result.email;
          sessionStorage["website"] = result.website;
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
              <div class="col-sm-2">{/* <Multiimage></Multiimage> */}</div>
              <div class="col-sm-8 mt-3" id="signupForm">
                <div className="form">
                  <h3 className="label-control text-center m-3 text-success fw-bold">
                    Profile Of BloodBank
                  </h3>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      name="bloodbank_name"
                      type="text "
                      className="form-control"
                      placeholder="Enter Blood Bank Name"
                      value={reg.bloodbank_name}
                      onChange={(e) => {
                        dispatch({
                          type: "update",
                          field: "bloodbank_name",
                          val: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Licence No</label>
                    <input
                      name="licenceno"
                      type="text"
                      className="form-control"
                      placeholder="Enter Licence No"
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
                  <div className="mb-3">
                    <label className="form-label">website</label>
                    <input
                      name="website"
                      type="text"
                      className="form-control"
                      placeholder="Enter website"
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
                  <div className="mb-3 text-center mt-2">
                    <button
                      className="btn btn-md btn-block btn-primary fw-bold"
                      style={{ marginRight: "10px" }}
                      type="submit"
                      onClick={bloodbankhome}
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
                      Update BloodBank
                    </button>
                    <span></span> <span> </span>
                    <button
                      className="btn btn-md btn-block btn-danger fw-bold "
                      style={{ marginLeft: "10px" }}
                      onClick={(e) => {
                        deleteBloodbank(reg.user_id, e);
                      }}
                    >
                      Delete BloodBank
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
export default BloodBankProfile;
