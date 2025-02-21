import React from "react";
import "./Progressbar.css"

export default function Progressbar() {
    let prog1="88%";
    let prog2="90%";
    let prog3="95%";
    let prog4="80%";
    let prog5="87%";
    return (
        <div className="mo_progressbar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mo_progressbar_content">
                            <div className="mo_progressbar_content_description">
                                <span>Treatment of Infectious Diseases</span>
                            </div>
                            <div className="mo_progressbar_content_percent" id="prog1" >
                                <span style={{paddingLeft:prog1}}>{prog1}</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: prog1}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mo_progressbar_content">
                            <div className="mo_progressbar_content_description">
                                <span>The Study of Hearing and Eyesight</span>
                            </div>
                            <div className="mo_progressbar_content_percent" id="prog2" >
                                <span style={{paddingLeft:prog2}}>{prog2}</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: prog2}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mo_progressbar_content">
                            <div className="mo_progressbar_content_description">
                                <span>Fast and Effective Diet</span>
                            </div>
                            <div className="mo_progressbar_content_percent" id="prog3" >
                                <span style={{paddingLeft:prog3}}>{prog3}</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: prog3}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mo_progressbar_content">
                            <div className="mo_progressbar_content_description">
                                <span>Tests for Professional Drivers</span>
                            </div>
                            <div className="mo_progressbar_content_percent" id="prog4" >
                                <span style={{paddingLeft:prog4}}>{prog4}</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: prog4}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                        <div className="col-lg-6">
                            <div className="mo_progressbar_content">
                                <div className="mo_progressbar_content_description">
                                    <span>Blood Test</span>
                                </div>
                                <div className="mo_progressbar_content_percent" id="prog5" >
                                    <span style={{paddingLeft:prog5}}>{prog5}</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: prog5}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    

                </div>
            </div>
        </div>
    );
}