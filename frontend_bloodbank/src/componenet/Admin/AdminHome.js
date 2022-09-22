import React,{useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const AdminHome = () => {
  const { id } =useParams()
  const [admin,setAdmin] = useState([])

  useEffect(() => {
     loadUser()
  },[])

  const loadUser = async () =>{
    const res = await axios.get(`http://localhost:8080/`);
    setAdmin(res.data)
  }
  return (
    <>
<div class="container rounded bg-white mt-5 mb-5 ">

              <h1 className='text-center'>Admin DashBoard</h1>
              <div class="row">
                  <div class="center  border-right">
                      <div class="d-flex flex-column align-items-center text-center p-3 py-2">
                          <img class="mt-1" width="5px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" style={{
        width: 300,
        height: 350,
        borderRadius: 140 / 2,
        backgroundColor: '#FF6F00',
        transform: [
          { scaleX: 2 }
        ]
    }} />
                      <span class="font-weight-bold">{admin.firstName}</span><span class="text-black-50">{admin.emailId}</span><span> </span></div>
                  </div>
                  <div class="center  border-right">
                  <div className='d-grid gap-4' >
                      <tr >
    <Link to={`/adminprofile`}><button className="btn btn-danager col-4 ms-3  rounded-pill mt-2 " style={{ 
        textDecoration:null,
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#e7b6c5',
        color: 'black',
        transform: [
          { scaleX: 2 }
        ]
      }}>Profile</button></Link> 
       <Link to={`/bloodbankdashboard`}><button className="btn btn-danager col-4 ms-3  rounded-pill  mt-2 " style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#FCDC00',
        transform: [
          { scaleX: 2 } 
        ]
    }} >Blood Bank Dashboard</button></Link>
                         <Link to={`/donardashboard`}><button className="btn btn-danager col-4  ms-3 rounded-pill mt-2 mb-2" style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#c0ffdf',
        transform: [
          { scaleX: 2 }
        ]
    }} >Donor List</button></Link>    
                      </tr>
                      <tr>
   {/* <Link to={`/adminSupplierList/a/${admin.id}`}><button className="btn btn-danager col-4 rounded-pill mt-2" style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#0288D1',
        textDecoration:'none',
        transform: [
          { scaleX: 2 }
        ]
    }} >Supplier List</button></Link> 
   <Link to={`/adminList/c/${id}`}><button className="btn btn-danager col-4 ms-3 rounded-pill mt-2" style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#FF6F00',
        transform: [
          { scaleX: 2 }
        ]
    }} >Admin List</button></Link> 
  {/*  <Link to={`/Addadmin`}><button className="btn btn-danager col-4  ms-3 rounded-pill mt-2 mb-2" style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#0288D1',
        textDecoration:'none',
        transform: [
          { scaleX: 2 }
        ]
    }} >Add Admin</button></Link> */} 
                         
                      </tr>
                      <tr>
 {/*}    <Link to={`/editadmin/${admin.id}`}><button className="btn btn-danager col-4  rounded-pill " style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#0288D1',
        transform: [
          { scaleX: 2 }
        ]
    }} >Change Password</button></Link>  */}
   {/* <Link to={`/contactUs`}><button className="btn btn-danager col-4  ms-3 rounded-pill mt-2 mb-2" style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#0288D1',
        transform: [
          { scaleX: 2 }
        ]
    }} >Contact Us</button></Link>  */}
    <Link to={``}><button className="btn btn-danager col-4  ms-3 rounded-pill mt-2 mb-2" style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#0288D1',
        textDecoration:'none',
        transform: [
          { scaleX: 2 }
        ]
    }} >Logout</button></Link>    
                      </tr>
                      </div>
                      </div>
                  </div>
              </div>



    </>
  )
}

export default AdminHome
