import React from "react";
import "./Description.css";

export default function Description() {
    return (
        <div className="mo_description">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="mo_heading_wrap">
                            <h5>Medical health at its best</h5>
                            <h2>We Value Your <span>Family</span> More Than Anyone Else.</h2>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="mo_heading_wrap">
                            <p>At MegaOne, your family's health and well-being are our top priorities. We understand the importance of compassionate care and are committed to providing exceptional medical services tailored to your loved one's needs.</p>
                            <p>Our dedicated team ensures that every patient receives personalized attention and the highest standard of healthcare.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}