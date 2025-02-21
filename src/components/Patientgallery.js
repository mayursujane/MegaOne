import React from "react";
import "./Patientgallery.css"
import patient1 from "./patientgalleryImages/patient1.jpg"
import patient2 from "./patientgalleryImages/patient2.jpg"
import patient3 from "./patientgalleryImages/patient3.jpg"

export default function Patientgallery() {
    return (
        <div className="mo_patientgallery">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mo_heading_center_wrap">
                            <h2>Patient <span>Gallery</span></h2>
                            <p>Explore our patient gallery to see the journeys of those who trusted us with their healthcare needs. Each story is a testament to our commitment to exceptional care and positive outcomes.</p>
                        </div>
                    </div>
                </div>

                <div className="mo_patientgallery_btn">
                    <ul>
                        <li><button type="button" class="btn btn-outline-dark">All</button></li>
                        <li><button type="button" class="btn btn-outline-dark">Surgery</button></li>
                        <li><button type="button" class="btn btn-outline-dark">Clinical</button></li>
                        <li><button type="button" class="btn btn-outline-dark">Operations</button></li>
                        <li><button type="button" class="btn btn-outline-dark">Patients</button></li>
                    </ul>
                </div>

                <div className="mo_patientgallery_img">
                    <ul>
                        <li><img src={patient1} alt="gallery_image" /> </li>
                        <li><img src={patient2} alt="gallery_image" /> </li>
                        <li><img src={patient3} alt="gallery_image" /> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}