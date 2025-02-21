import React from "react";
import "./Blogs.css"
import blog1_1 from"./blogimages/blog1-1.png"
import blog1_2 from"./blogimages/blog1-2.png"
import blog1_3 from"./blogimages/blog1-3.png"
import blog2_1 from"./blogimages/blog2-1.jpg"
import blog2_2 from"./blogimages/blog2-2.jpg"
import blog2_3 from"./blogimages/blog2-3.jpg"

export default function Blogs() {
    return (
        <div className="mo_blogs">
            <div className="container">
                <div className="mo_blogs_first">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="mo_blogs_img">
                                <div className="mo_blogs_img_date">
                                    <span>20 Feb 2025</span>
                                </div>
                                <div id="carouselExampleAutoplaying1" className="carousel slide" data-bs-ride="carousel" data-bs-target="#carouselExampleAutoplaying1">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={blog1_1} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={blog1_2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={blog1_3} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="mo_blogs_description">
                                <div className="mo_heading_wrap">
                                    <h2>Important Medical Info</h2>
                                    <span>Get the latest updates on essential medical information to keep you and your loved ones safe. From health advisories to breakthrough research, stay ahead with reliable and accurate insights.</span>
                                    <button className="mo_btn_bg">learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="mo_blogs_first mo_blogs_first_reverse">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="mo_blogs_img">
                                <div className="mo_blogs_img_date">
                                    <span>20 Feb 2025</span>
                                </div>
                                <div id="carouselExampleAutoplaying2" className="carousel slide" data-bs-ride="carousel" data-bs-target="#carouselExampleAutoplaying2   ">
                                    <div className="carousel-inner">
                                        <div className="carousel-item">
                                            <img src={blog2_1} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item active">
                                            <img src={blog2_2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={blog2_3} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="mo_blogs_description">
                                <div className="mo_heading_wrap">
                                    <h2>Doctors Guidelines</h2>
                                    <span>Get expert advice on the best medical practices to enhance patient safety and improve healthcare outcomes. Stay informed with trusted guidelines.</span>
                                    <button className="mo_btn_bg">learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
