import React from "react";
import "./Departments.css"

export default function Departments() {
    return (
        <div className="mo_departments">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mo_heading_center_wrap">
                            <h5>Our departments are designed to provide specialized care</h5>
                            <h2>Clinical <span>Departments</span></h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="mo_departments_list">
                            <div className="mo_departments_img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2" />
                                </svg>
                            </div>
                            <div className="mo_departments_description">
                                <h5>Examination of Body</h5>
                                <p>Our experienced physicians perform detailed physical examinations to ensure your overall well-being and detect any health issues early.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mo_departments_list">
                            <div className="mo_departments_img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-bandaid-fill" viewBox="0 0 16 16">
                                <path d="m2.68 7.676 6.49-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Zm5.71-2.858a.5.5 0 1 0-.708.707.5.5 0 0 0 .707-.707ZM6.974 6.939a.5.5 0 1 0-.707-.707.5.5 0 0 0 .707.707M5.56 8.354a.5.5 0 1 0-.707-.708.5.5 0 0 0 .707.708m2.828 2.828a.5.5 0 1 0-.707-.707.5.5 0 0 0 .707.707m1.414-2.121a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707m1.414-.707a.5.5 0 1 0-.706-.708.5.5 0 0 0 .707.708Zm-4.242.707a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707m1.414-.707a.5.5 0 1 0-.707-.708.5.5 0 0 0 .707.708m1.414-2.122a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707M8.646 3.354l4 4 .708-.708-4-4zm-1.292 9.292-4-4-.708.708 4 4z" />
                            </svg>
                            </div>
                            <div className="mo_departments_description">
                                <h5>Surgery</h5>
                                <p>Utilizing the latest technology, our skilled surgeons perform a wide range of surgeries with precision and care, ensuring the best possible outcomes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mo_departments_list">
                            <div className="mo_departments_img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-calendar2-plus-fill" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 3.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5H2.545c-.3 0-.545.224-.545.5m6.5 5a.5.5 0 0 0-1 0V10H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V11H10a.5.5 0 0 0 0-1H8.5z" />
                            </svg>
                            </div>
                            <div className="mo_departments_description">
                                <h5>Internal Medicine</h5>
                                <p>personalized treatment plans for complex medical conditions, ensuring holistic patient care.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mo_departments_list">
                            <div className="mo_departments_img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-capsule" viewBox="0 0 16 16">
                                <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z" />
                            </svg>
                            </div>
                            <div className="mo_departments_description">
                                <h5>Blood Test</h5>
                                <p>diagnose and monitor health conditions efficiently, enabling timely and effective medical intervention.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mo_departments_list">
                            <div className="mo_departments_img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                            </svg>
                            </div>
                            <div className="mo_departments_description">
                                <h5>Dermatology</h5>
                                <p>advanced dermatological treatments, our specialists are dedicated to maintaining and enhancing your skin's health.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mo_departments_list">
                            <div className="mo_departments_img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-heart-pulse-fill" viewBox="0 0 16 16">
                                <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
                                <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
                            </svg>
                            </div>
                            <div className="mo_departments_description">
                                <h5>Cardio</h5>
                                <p>equipped with state-of-the-art technology to diagnose, treat, and manage heart conditions with utmost precision.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}