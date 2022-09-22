import React, { useEffect, useState } from 'react'
import "./Requeststatus.css"
import pic from "../../asset/p1.png" ;
import { Link } from 'react-router-dom';

const RequestStatus = () => {
    useEffect(() => {
        document.title = "Wish-it || Admin Dashboard"
    })
    return (
        <div class="container rounded bg-white mt-3 mb-3 ">
            <h4 class="offset-5 mt-2">Request Status</h4>
            <div class="row">
                <div class="center  border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle width:70 height:120 " src={pic} style={{
                            width: 200,
                            height: 200,
                            borderRadius: 140 / 2,
                            backgroundColor: '#FF6F00',
                            transform: [
                                { scaleX: 2 }
                            ]
                        }} />
                        <span class="font-weight-bold"> </span><span class="text-black-50"></span><span> </span></div>
                </div>
                <div class="card-group">
                    <div class="card-wrap ms-5">
                        <div class="card-header one">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="card-content">
                            <br />
                            <Link to={"/donorrequest"}><button class="card-btn one">All Blood Request</button></Link>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header two">
                            <i class="fab fa-css3-alt"></i>
                        </div>
                        <div class="card-content">
                            <br />
                           <Link to={"/accepteddonorrequest"}> <button class="card-btn two">Aprove Blood Request</button></Link>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header three">
                            <i class="fab fa-html5"></i>
                        </div>
                        <div class="card-content">
                            <br />
                            <Link to={"/pendingdonorrequest"}><button class="card-btn three">Pending Blood Request</button></Link>
                        </div>
                    </div>
                    <div class="card-wrap ms-5" >
                        <div class="card-header four">
                            <i class="fab fa-js-square"></i>
                        </div>
                        <div class="card-content">
                            <br />
                            <Link to={"/rejecteddonorrequest"}> <button class="card-btn four">Cancelled Blood Request</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            )
}
            export default RequestStatus