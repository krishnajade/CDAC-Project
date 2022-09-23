import React from "react";
import { Table } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import bloodbankicon from "../../asset/bloodbankicon.jpg";
import { useNavigate } from "react-router-dom";
import "./BloodBankHome.css";
import BloodBankProfile from "./BloodBankProfile";

const BloodBankHome = () => {
  const bloodbank_name = sessionStorage["bloodbank_name"];
  const bloodbank_id = sessionStorage["bloodBank_id"];
  const navigate = useNavigate();

  const profile = () => {
    navigate("/bloodbankprofile");
    window.location.reload(false);
  };
  const showbloodstock = () => {
    navigate("/bloodbankprofile");
    window.location.reload(false);
  };
  const logoutUser = () => {
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("bloodbank_id");
    sessionStorage.removeItem("bloodbank_name");
    sessionStorage.removeItem("licence_no");
    sessionStorage.removeItem("city");
    sessionStorage.removeItem("address");
    sessionStorage.removeItem("contact_number");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("website");

    navigate("/signIn");
    window.location.reload(false);
  };
  return (
    <div>
      <button className="btn btn-info" id="logout-btn" onClick={logoutUser}>
        Logout
      </button>
      <div class="container rounded bg-white mt-5 mb-5 ">
        <h1 className="label-control text-center m-3 text-success fw-bold">
          Welcome {bloodbank_name}
        </h1>
        <div class="row">
          <div class="center  border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-2">
              <img
                class="mt-1"
                width="5px"
                src={bloodbankicon}
                alt=""
                style={{
                  width: 300,
                  height: 350,
                  borderRadius: 140 / 2,
                  backgroundColor: "#FF6F00",
                  transform: [{ scaleX: 2 }],
                }}
              />
            </div>
          </div>
          <div class="center  border-right">
            <div className="d-grid gap-4">
              <tr>
                <Link to={``}>
                  <button
                    className="btn btn-danager col-4 rounded-pill"
                    onClick={profile}
                    style={{
                      width: 250,
                      height: 50,
                      borderRadius: 140 / 2,
                      backgroundColor: "#D3FBD3",
                      transform: [{ scaleX: 2 }],
                    }}
                  >
                    <b>Profile</b>
                  </button>
                </Link>

               
                <Link to={`/bloodrequest`}>
                  <button
                    className="btn btn-danager col-4 rounded-pill"
                    style={{
                      width: 250,
                      height: 50,
                      marginLeft: 15,
                      marginRight: 15,
                      borderRadius: 140 / 2,
                      backgroundColor: "#F9FB88",
                      transform: [{ scaleX: 2 }],
                    }}
                  >
                    <b>Request List for Blood</b>
                  </button>
                </Link>

                <Link to={`/requestpage`}>
                  <button
                    className="btn btn-danager col-4 rounded-pill "
                    style={{
                      width: 250,
                      height: 50,
                      borderRadius: 140 / 2,
                      backgroundColor: "#FBC46C",
                      textDecoration: "none",
                      transform: [{ scaleX: 2 }],
                    }}
                  >
                    <b>Appointment List</b>
                  </button>
                </Link>
              </tr>
              <tr>
                <Link to={`/bloodstock`}>
                  <button
                    className="btn btn-danager col-4  rounded-pill"
                    style={{
                      width: 250,
                      height: 50,
                      borderRadius: 140 / 2,
                      backgroundColor: "#F0BFFB",
                      textDecoration: "none",
                      transform: [{ scaleX: 2 }],
                    }}
                  >
                    <b>Show Blood Stock</b>
                  </button>
                </Link>
                <Link to={``}>
                  <button
                    className="btn btn-danager col-4  rounded-pill "
                    onClick={showbloodstock}
                    style={{
                      width: 250,
                      height: 50,
                      marginLeft: 15,
                      marginRight: 15,
                      borderRadius: 140 / 2,
                      backgroundColor: "gray",
                      transform: [{ scaleX: 2 }],
                    }}
                  >
                    <b>Change Password</b>
                  </button>
                </Link>
               
                <Link to={`/bloodstockform`}>
                  <button
                    className="btn btn-danager col-4  rounded-pill "
                    style={{
                      width: 250,
                      height: 50,
                      borderRadius: 140 / 2,
                      backgroundColor: "#faebd7",
                      textDecoration: "none",
                      transform: [{ scaleX: 2 }],
                    }}
                  >
                    <b>Add Blood Stock</b>
                  </button>
                </Link>
              </tr>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BloodBankHome;
