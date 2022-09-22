import React from "react";
import { useState,useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bloodbankstock.css';
import { useNavigate } from "react-router-dom";

const init={
    bloodgroup:"",
    bloodcomponent:"",
    quantity:"",
    available:"",

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


const BloodStockForm=()=>{

    const[reg,dispatch]=useReducer(reducer,init)
    const navigate=useNavigate();


    const sendData=(e)=>{
        e.preventDefault();
        console.log("hi");
        const reqData={
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body: JSON.stringify({
          
            bloodgroup:reg.bloodgroup,
            bloodcomponent:reg.bloodcomponent,
            quantity:reg.quantity,
            availability:reg.available,
            bloodbank_id:sessionStorage["bloodbank_id"]
          })

      }
      fetch('http://localhost:8080/savebloodstock/',reqData)
      .then(res=>res.text())
      .then(str=>console.log("hello"))

      alert("Bloodstock Added successfully")
      navigate("/bloodstock")

    }

    return(
     <div >
      <div className="container-xxl p-0">
        <div className="row pb-5 pt-5">
          <div className="container">
            <div className="bg-image" id="bg-image-signup">
              <div className="row" id="container">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 mt-3" id="signupForm">
                  <div className="form">
                    <h1 className="label-control text-center m-3 text-danger fw-bold">
                      Add Blood Stock
                    </h1>

                    <div className="row">
                      <div className="col-md-6">
                        <h6>
                          <label for="donorname">Blood Group</label>
                        </h6>
                        <select name="bloodgroup" value={reg.bloodgroup}
                       onChange={(e) => {
                        dispatch({
                          type: "update",
                          field: "bloodgroup",
                          val: e.target.value,
                        });
                      }} >
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

                      <div className="col-md-6">
                        <h6>
                          <label for="age"> Blood Component</label>
                        </h6>
                        <select name="bloodcomponent" value={reg.bloodcomponent} onChange={(e)=>{dispatch({type:'update',field:'bloodcomponent',val:e.target.value})}} required>
                        <option>Select Blood Component</option>
                        <option>Whole Blood</option>
                        <option>Plasma</option>
                        <option>Platelets</option>
                        <option>Red Blood Cell</option>
                      </select>
                       
                      </div>
                    </div>
                    <br></br>

                    <div className="row">
                      <div className="col-md-6">
                        <h6>
                          <label for="donorname">Quantity</label>
                        </h6>
                        <input
                          name="aadharno"
                          type="text"
                          className="form-control"
                          placeholder="Enter Quantity"
                          value={reg.quantity}
                          onChange={(e)=>{dispatch({type:'update',field:'quantity',val:e.target.value})}}
                        />
                      </div>

                      <div className="col-md-6">
                        <h6>
                          <label for="donorname">Status</label>
                        </h6>
                        <select name="available" value={reg.available} onChange={(e)=>{dispatch({type:'update',field:'available',val:e.target.value})}}>
                        <option>Select Status</option>
                        <option>Available</option>
                        <option>Not Available</option>
                     </select>
                     
                      </div>
                    </div>
                    <br></br>
                    <div className="mb-3 mr-1 text-center mt-2">
                      <button
                        className="btn btn-outline-danger fw-bold "
                        type="reset"
                        onClick={(e)=>{sendData(e)}}>
                        Submit
                      </button>
                    </div>
                  
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
export default BloodStockForm;