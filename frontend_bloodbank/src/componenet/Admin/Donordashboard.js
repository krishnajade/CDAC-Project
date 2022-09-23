import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./dashboard.css";
function Donordashboard() {
  const [Donorlist, setDonorlist] = useState([]);

  useEffect(() => {
    const getDonorlist = async () => {
      const res = await fetch("http://localhost:8080/getallDonor");
      const getdata = await res.json();
      setDonorlist(getdata);
      // console.log(getdata);
    };
    getDonorlist();
  }, []);

  return (
    <React.Fragment>
      <Container>
        <div className="row">
          <div className="col-sm-8 text-success">
            <h5 className="p-3 fw-bold text-black">Donor Details</h5>

            <table className="table table-bordered text-white">
              <thead>
                <tr>
                  <th>Donor ID</th>
                  <th>Donor Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Blood group</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {Donorlist.map((Donor1) => (
                  <tr>
                    <td>{Donor1.Donor_id}</td>
                    <td>{Donor1.address}</td>
                    <td>{Donor1.bdate}</td>
                    <td>{Donor1.city}</td>
                    <td>{Donor1.email}</td>

                    <td>
                      <button href="" className="btn btn-success">
                        {" "}
                        View{" "}
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Donordashboard;
