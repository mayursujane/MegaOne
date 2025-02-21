import React, { useState, useEffect, useRef } from "react";
import "./Statisticslist.css";
import StatisticslistBackground from "./Statisticslist-background.jpg";

export default function Statisticslist() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [startCount, setStartCount] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current; // Copy ref value to a local variable
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setStartCount(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.3, // 30% of the component is visible
            }
        );
    
        if (element) {
            observer.observe(element);
        }
    
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []); 

    useEffect(() => {
        if (!startCount) return;

        const totalUpdates = 70;
        const step1 = Math.ceil(1538 / totalUpdates);
        const step2 = Math.ceil(1006 / totalUpdates);
        const step3 = Math.ceil(2115 / totalUpdates);
        const step4 = Math.ceil(179 / totalUpdates);

        const interval = setInterval(() => {
            setCount1((prev) => (prev + step1 < 1538 ? prev + step1 : 1538));
            setCount2((prev) => (prev + step2 < 1006 ? prev + step2 : 1006));
            setCount3((prev) => (prev + step3 < 2115 ? prev + step3 : 2115));
            setCount4((prev) => (prev + step4 < 179 ? prev + step4 : 179));
        }, 70);

        return () => {
            clearInterval(interval);
        };
    }, [startCount]);

    return (
        <div
            className="mo_statistics"
            style={{ backgroundImage: `url(${StatisticslistBackground})` }}
            ref={ref}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="mo_statistics_counter">
                            <h2 data-max="1538">{count1}</h2>
                            <span>Patients</span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="mo_statistics_counter">
                            <h2 data-max="1006">{count2}</h2>
                            <span>Cases</span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="mo_statistics_counter">
                            <h2 data-max="2115">{count3}</h2>
                            <span>Appointments</span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="mo_statistics_counter">
                            <h2 data-max="179">{count4}</h2>
                            <span>Doctor</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
