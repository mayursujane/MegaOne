import React from "react";
import backgroundImage from "./form-background.jpg"
import "./Form.css"

export default function From() {
    return (
        <div className="mo_form" style={{backgroundImage:`url(${backgroundImage})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <div className="mo_heading_right_wrap">
                            <h2>Make An Appointment</h2>
                            <p>Your health is our priority. Schedule an appointment with our experienced medical team and receive the care you deserve. Whether it's a routine check-up or a specialized consultation, we are here to help you every step of the way.</p>
                        </div>
                        <div className="mo_form_appointment">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mo_form_field">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mo_form_field">
                                        <input type="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mo_form_field">
                                        <input type="date" placeholder="Date" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mo_form_field">
                                        <select>
                                            <option value="gender">Male</option>
                                            <option value="gender">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mo_form_field">
                                        <textarea rows={3} placeholder="Message:"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex justify-content-end">
                                    <button type="submit" className="mo_btn">submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}