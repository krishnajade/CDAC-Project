import React, { useState } from "react";
import { Link,Route,Routes, useNavigate } from "react-router-dom";
import donorlogo from "../../asset/DonorIcon.jpg";
import DonorProfile from "./DonorProfile";

const DonorHome = () => {
  // const [Donor] = useState([]);
  const donor_name=sessionStorage["donor_name"];
  const donor_id=sessionStorage["donor_id"];
  const navigate = useNavigate();

  const profile = () => {
    navigate("/donorprofile");
    window.location.reload(false);
  };
  const showdonor = () => {
    navigate("/donorprofile");
    window.location.reload(false);
  };

  const logoutUser = () => {
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("donor_id");
    sessionStorage.removeItem("donor_name");
    sessionStorage.removeItem("bloodgroup");
    sessionStorage.removeItem("city");
    sessionStorage.removeItem("address");
    sessionStorage.removeItem("phonenumber");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("age");
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
          Welcome {donor_name}
        </h1>
        <div class="row">
          <div class="center  border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-2">
              <img
                src={donorlogo}
                alt="logo"
                style={{
                  width: 300,
                  height: 200,
                  borderRadius: 140 / 2,
                  backgroundColor: "#FF6F00",
                  transform: [{ scaleX: 2 }],
                }}
              />
              {/* <span class="font-weight-bold">{Donor.Donor_name}</span>
              <span class="text-black-50">{Donor.Donor_name}</span>
              <span> </span> */}
            </div>
          </div>
          <div class="center  border-right">
            <div className="d-grid gap-4">
              <tr>
                <Link to={`/donor/${donor_id}`}>
                  <button
                    className="btn btn-outline-info col-4  rounded-pill mt-2 "
                    id="k1"
                    style={{
                      textDecoration: null,
                      width: 350,
                      height: 50,
                      borderRadius: 140 / 2,
                      transform: [{ scaleX: 2 }],
                    }}
                  >
                    View Profile
                  </button>
                </Link>

                <Link to={`/RequestBloodForm`}>
                  <button
                    className="btn btn-outline-primary col-4  ms-3 rounded-pill mt-2 mb-2"
                    style={{
                      width: 350,
                      height: 50,
                      borderRadius: 140 / 2,
                      transform: [{ scaleX: 2 }],
                    }}
                  >
                    
                    View Request Status
                  </button>
                </Link>
              </tr>

              <tr>
                <Link to={`/donaterequest`}>
                  <button
                    className="btn btn-outline-info col-4 ms-3 rounded-pill mt-2"
                    style={{
                      width: 350,
                      height: 50,
                      borderRadius: 140 / 2,
                      transform: [{ scaleX: 2 }],
                    }}
                  >
                    Request to Donate Blood
                  </button>
                </Link>

                <Link to={`/BloodStock`}>
                  <button
                    className="btn btn-outline-info col-4  ms-3 rounded-pill mt-2 mb-2"
                    style={{
                      width: 350,
                      height: 50,
                      borderRadius: 140 / 2,
                      transform: [{ scaleX: 2 }],
                    }}
                  >
                    View Blood Stock
                  </button>
                </Link>
              </tr>

              <tr>
                <Link to={``}>
                  <button
                    className=" btn btn-outline-danger col-4  rounded-pill "
                    style={{
                      width: 350,
                      height: 50,
                      borderRadius: 140 / 2,
                      transform: [{ scaleX: 2 }],
                    }}
                  >
                    Delete Account
                  </button>
                </Link>

                <Link to={``}>
                  <button
                    className="btn btn-outline-dark col-4  ms-3 rounded-pill mt-2 mb-2"
                    style={{
                      width: 350,
                      height: 50,
                      borderRadius: 140 / 2,
                      transform: [{ scaleX: 2 }],
                    }}
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </Link>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorHome;
