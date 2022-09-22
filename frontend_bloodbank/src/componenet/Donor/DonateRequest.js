import React, { useEffect,useReducer,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const init={
  bloodbank_id:""
}
const reducer =(state,action)=>
{ 
    switch(action.type)
    {
        case 'update' :
            return {...state,[action.field]:action.val};
        case 'clear':
            return init;
    }
}

const DonateRequest =()=>{
  const[reg,dispatch]=useReducer(reducer,init);
    const [bloodbank,setBloodbank]=useState([]);
    const[id,setId]=useState();


    useEffect(()=>{
        fetch(`http://localhost:8080/getallbloodbank`)
        .then(resp=> resp.json())
        .then(data=>setBloodbank(data))
      },[]);

      const sendData=(e)=>{
        e.preventDefault();
        console.log("hi");
        const reqData={
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body: JSON.stringify({
            donor_name:sessionStorage["donor_name"],
            bloodgroup:sessionStorage["bloodgroup"],
            contact_number:sessionStorage["phonenumber"],
            donor_id:sessionStorage["donor_id"],
            bloodbank_id:id,
            status:"pending"
          })

      }
      fetch('http://localhost:8080/savedonorrequest',reqData)
      .then(res=>res.text())
      .then(str=>console.log("hello"))
    }



    return(
        <div class="container-xxl p-0" >
        <div class="row pb-5 pt-5">
          <div class="container">
            <div class="bg-image" id="bg-image-signup">
              <div class="row" id='container'>
              <div class="col-sm-2" >
               {/* <Multiimage></Multiimage> */}
              </div>
                <div class="col-sm-8 mt-3" id="signupForm">
  
                  <div className="form" >
                    <h3 className="label-control text-center m-3 text-success fw-bold">
                      Donor Request
                    </h3>
                    <div className="mb-3">
                    <label className="form-label">Name :{sessionStorage["donor_name"]}</label>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Age:{sessionStorage["age"]}</label>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Contact Number:{sessionStorage["phonenumber"]}</label>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Blood Group:{sessionStorage["bloodgroup"]}</label>
                    </div>
                    <div className="mb-3">
                      <table className="table table-danger table-striped">
                        <thead>
                          <tr>
                            <th>Bloodbank Name</th>
                            <th> Contact number</th>
                            <th>City</th>
                            <th>Address</th>
                            <th></th>
                          </tr>
                        </thead>
                    <tbody>
                {

                   bloodbank.map((v)=>
                  {
                      return (
                          <tr>
                              <td>{v.bloodbank_name}</td>
                              <td>{v.contact_number}</td>
                              <td>{v.city}</td>
                              <td>{v.address}</td>
                              <td><button name="bloodbank_id" className="btn btn-primary" onClick={()=>{setId(v.bloodBank_id)}}>select</button></td>
                          </tr>
                      )
                  } )
                  
                }
              </tbody>
              </table>
                    </div>
                    
                    <div className="mb-3 text-center mt-2">
                     <Link to={"/donorhome"}> <button  className="btn btn-md btn-block btn-primary fw-bold" style={{ marginRight: "10px" }}
                       type="submit">
                        Goto Home
                      </button> </Link>
                      <button  className="btn btn-md btn-block btn-success fw-bold" style={{ marginRight: "10px" }}
                       type="submit" onClick={(e)=>{sendData(e)}}>
                        Request to Donate Blood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}
export default DonateRequest