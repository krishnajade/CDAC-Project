import React, { useEffect, useState } from "react";
import "./Requeststatus.css";
import pic from "../../asset/p1.png";
import { Link } from "react-router-dom";

const HosRequestStatus = () => {
  return (
    <div class="container rounded bg-white mt-3 mb-3 ">
      <h2 className="label-control text-center m-3 text-success fw-bold ">
        Request Status
      </h2>
      <div class="row">
        <div class="center  border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle width:70 height:120 "
              alt=""
              src={pic}
              style={{
                width: 200,
                height: 200,
                borderRadius: 140 / 2,
                backgroundColor: "#FF6F00",
                transform: [{ scaleX: 2 }],
              }}
            />
          </div>
        </div>
        <div class="card-group" style={{ marginLeft: "45px" }}>
          <div class="card-wrap ms-5">
            <div class="card-header one">
              <i class="fas fa-code"></i>
            </div>
            <div class="card-content">
              <br />
              <Link to={"/AllRequest"}>
                <button class="card-btn one">All Blood Request</button>
              </Link>
            </div>
          </div>
          <div class="card-wrap ms-5">
            <div class="card-header six">
              <i class="fab fa-css3-alt"></i>
            </div>
            <div class="card-content">
              <br />
              <Link to={"/AcceptedHospitalRequest"}>
                <button class="card-btn six">Accepted Blood Request</button>
              </Link>
            </div>
          </div>
          <div class="card-wrap ms-5">
            <div class="card-header three">
              <i class="fab fa-html5"></i>
            </div>
            <div class="card-content">
              <br />
              <Link to={"/PendingHospitalRequest"}>
                <button class="card-btn three">Pending Blood Request</button>
              </Link>
            </div>
          </div>
          <div class="card-wrap ms-5">
            <div class="card-header four">
              <i class="fab fa-js-square"></i>
            </div>
            <div class="card-content">
              <br />
              <Link to={"/RejectedHospitalRequest"}>
                <button class="card-btn four">Cancelled Blood Request</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <Link class="btn btn btn-outline-primary " to={`/hospitalhome`}>
          Back to Home
        </Link>
      </div>
      <span> </span>
      <br />
    </div>
  );
};
export default HosRequestStatus;
