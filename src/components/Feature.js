import React from "react";
import "./Feature.css"

export default function Feature() {
    return (
        <div className="mo_features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="mo_features_card" id="card1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" className="bi bi-clipboard2-pulse-fill" viewBox="0 0 16 16">
                                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                                <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M9.98 5.356 11.372 10h.128a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.479-.356l-.94-3.135-1.092 5.096a.5.5 0 0 1-.968.039L6.383 8.85l-.936 1.873A.5.5 0 0 1 5 11h-.5a.5.5 0 0 1 0-1h.191l1.362-2.724a.5.5 0 0 1 .926.08l.94 3.135 1.092-5.096a.5.5 0 0 1 .968-.039Z" />
                            </svg>
                            <h4>Medical Counciling</h4>
                            <p>Receive expert guidance and support for all your medical concerns. Our experienced counselors provide personalized advice to help you make informed health decisions and enhance your well-being.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mo_features_card" id="card2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" className="bi bi-heart-pulse-fill" viewBox="0 0 16 16">
                                <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
                                <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
                            </svg>
                            <h4>Qualified Doctors</h4>
                            <p>Our team of highly qualified doctors is dedicated to providing the best medical care. With years of expertise and a patient-centric approach, we ensure that you receive accurate diagnoses and effective treatments.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mo_features_card" id="card3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" className="bi bi-stopwatch-fill" viewBox="0 0 16 16">
                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0" />
                            </svg>
                            <h4>Opening Hours</h4>
                            <p>We are here to serve you throughout the week. Check our flexible opening hours and schedule your appointment at your convenience. Your health and time are our top priorities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}