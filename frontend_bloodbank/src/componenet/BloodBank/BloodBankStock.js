import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bloodbankstock.css';
import { Link } from "react-router-dom";
import axios from "axios";


const BloodBankStock=()=>{
    const[bloodstock,setBloodstock]=useState([]);
    const[qnt,setQnt]=useState();


    useEffect(()=>{
        fetch(`http://localhost:8080/allBloodStockById?bloodbank_id=${sessionStorage["bloodbank_id"]}`)
        .then(resp=> resp.json())
        .then(data=>setBloodstock(data))
      },[])

      const sendData=(id)=>
      {
          console.log("hi");
        axios.put(`http://localhost:8080/updatebloodstock?bloodstock_id=${id}&quantity=${qnt}`,{
         
        })
        .then((response)=>{
          const result = response.data
          if(result.length!=0)
          {
            
          }
        }).catch(err=>console.log(err))
        window.location.reload(false)
        alert("successfully updated bloodstock")
      }
  


    return(

        <div className="container-fluids">
            <div id="bloodstock">
                <h2 id="headline"><b>Blood Stock</b></h2>
            <table className="table table-danger table-striped">
                <thead>
                     <tr>
                     <th scope="col">#</th>
                     <th scope="col">Blood Group</th>
                     <th scope="col">Quantity</th>
                     <th scope="col">Blood Component</th>
                     <th scope="col">Status</th>
                    <th scope="col"></th>
                   </tr>
              </thead>
              <tbody>
                {

                   bloodstock.map((v,i)=>
                  {
                      return (
                          <tr>
                              <td>{i+1}</td>
                              <td>{v.bloodgroup}</td>
                              <td><input placeholder={v.quantity} onChange={(e)=>{setQnt(e.target.value)}}/></td>
                              <td>{v.bloodcomponent}</td>
                              <td>{v.availability}</td>
                              <td><button onClick={()=>{sendData(v.bloodstock_id)}} className="btn btn-primary">update</button></td>
                          </tr>
                      )
                  } )
                  
                }
              </tbody>
            </table>

            <div> <Link to="/bloodbankhome"><button className="btn btn-primary">Home</button></Link></div>

            </div>
        </div>
    )

}
export default BloodBankStock;