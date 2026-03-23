import { useState,useEffect } from "react"
import './clock.css'
function Clock ()
{
    const[time,setTime]=useState(new Date())
useEffect(()=>{
    let timeInterval=setInterval(()=>{
        setTime(new Date())
    },1000)

    return ()=>{
        clearInterval(timeInterval)
    }
},[])


function getFormattedTime() {
        let hour = time.getHours();
        let minute = time.getMinutes();
        let am_pm = hour >= 12 ? "PM" : "AM";
        
        // Convert to 12-hour format
        hour = hour % 12 || 12; 

        return `${addZero(hour)}:${addZero(minute)} ${am_pm}`;
    }

    function getFormattedDate() {
        const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", 
                        "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        
        return `${days[time.getDay()]}, ${months[time.getMonth()]} ${time.getDate()}`;
    }

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    return (
        <div className="clock-container">
            <h1 className="clock-time">{getFormattedTime()}</h1>
            <p className="clock-date">{getFormattedDate()}</p>
        </div>
    );
}
export default Clock