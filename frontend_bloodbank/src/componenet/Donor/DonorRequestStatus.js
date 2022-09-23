import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../BloodBank/bloodbankstock.css";
import { Link } from "react-router-dom";

const DonorRequestStatus = () => {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8080/mydonorrequestById?donor_id=${sessionStorage["donor_id"]}`
    )
      .then((resp) => resp.json())
      .then((data) => setRequest(data));
  }, []);

  return (
    <div className="container-fluids">
      <div id="bloodstock">
        <h2 id="headline">
          <b>Donor Request Status</b>
        </h2>
        <table className="table table-danger table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Donor Name</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {request.map((v, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{v.donor_name}</td>
                  <td>{v.bloodgroup}</td>
                  <td>{v.contact_number}</td>
                  <td>{v.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          {" "}
          <Link to="/donorhome">
            <button className="btn btn-primary">Goto Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DonorRequestStatus;
