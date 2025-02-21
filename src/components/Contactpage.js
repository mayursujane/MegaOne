import React from "react";
import "./Contactpage.css"
import banner1 from "./banner-1.jpg"

export default function Contactpage() {
    return (
        <div className="mo_contactpage" style={{ backgroundImage: `url(${banner1})` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="mo_contactpage_content_map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6063.934776784827!2d74.78350093623575!3d13.010355802699989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3520c230fe0db%3A0x8537b4c31ee646fa!2sNITK%20Beach!5e1!3m2!1sen!2sin!4v1740055339753!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mo_contactpage_content_description">
                        <div className="mo_heading_wrap">
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <h2>MegaOne Medical</h2>
                        </div>
                            <ul>
                                <li>
                                    <p>123 Stree New York City , United States Of America.</p>
                                </li>
                                <li>
                                    <p>Office Telephone : <a href="tel:+1234567890">+1234567890</a></p>
                                    <p>Mobile : <a href="tel:+0987654321">+0987654321</a></p>
                                </li>
                                <li>
                                    <p>mail : <a href="mailto:admin@website.com">admin@website.com</a></p>
                                    <p>Inquiries : <a href="mailto:email@website.com">email@website.com</a></p>
                                </li>
                                <li>
                                    <p>Mon-Fri: 9am to 6pm</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}