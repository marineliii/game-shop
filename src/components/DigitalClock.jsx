/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./DigitalClock.css";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formatTime() {
        let h = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();

        return `${addZero(h)}:${addZero(min)}:${addZero(sec)}`;
    }
    function addZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className="clock-container" >
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
export default DigitalClock;
