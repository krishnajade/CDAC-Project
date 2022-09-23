import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./dashboard.css";
function Bloodbankdashboard() {
  const [Bloodbanklist, setBloodbanklist] = useState([]);

  useEffect(() => {
    const getBloodbanklist = async () => {
      const res = await fetch("http://localhost:8080/getallbloodbank");
      const getdata = await res.json();
      setBloodbanklist(getdata);
      // console.log(getdata);
    };

    getBloodbanklist();
  }, []);

  return (
    <React.Fragment>
      <Container>
        <div className="row">
          <div className="col-sm-8 text-success">
            <h5 className="p-3 fw-bold text-black">Blood Bank Details</h5>

            <table className="table table-bordered text-white">
              <thead>
                <tr>
                  <th>Bloodbank ID</th>
                  <th>Bloodbank Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {Bloodbanklist.map((bank1) => (
                  <tr>
                    <td>{bank1.blood_bank_id}</td>
                    <td>{bank1.bloodbank_name}</td>
                    <td>{bank1.address}</td>
                    <td>{bank1.city}</td>
                    <td>{bank1.email}</td>

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

export default Bloodbankdashboard;
