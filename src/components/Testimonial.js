import React from "react";
import "./Testimonial.css"
import OwlCarosalSlider from "./Testimonialslider";

export default function Testimonial() {
    return (
        <div className="mo_testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mo_heading_center_wrap">
                            <h2>Happy Patient</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in velit dolor. Vivamus gravida, neque nec interdum cursus, erat ligula.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <OwlCarosalSlider/>
                </div>
            </div>
        </div>
    );
}