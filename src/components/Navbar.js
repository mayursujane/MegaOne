import React from "react";
import "./Navbar.css"
import logo from "./megaone_logo.png";

export default function Navbar(){
    return(
        <div className="mo_header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="mo_header_logo">
                            <a href="/"><img src={logo} alt="logo"></img></a>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="mo_header_menu">
                            <ul>
                                <li><a href="#Navbar">Home</a></li>
                                <li><a href="#Description">Why MegaOne</a></li>
                                <li><a href="#From">Appointment</a></li>
                                <li><a href="#Patientgallery">Patient Gallery</a></li>
                                <li><a href="#Blogs">Our Blogs</a></li>
                                <li><a href="#Contactpage">Contact Us</a></li>
                            </ul>
                            
                            <div className="mo_header_search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg>
                            </div>
                            <div className="mo_header_menuicon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}