import { useState,useRef,useEffect } from "react";
import './timer.css'
function Timer(){

    let [isRunning,setIsRunning]=useState(false)
    const [elapsedTime,setElapsedTime]=useState(0)
    const intervalIdRef=useRef(null)
    const startTimeRef=useRef(0)

    useEffect(()=>{
        if(isRunning)
        {
        intervalIdRef.current=setInterval(()=>{
            setElapsedTime(Date.now()-startTimeRef.current)
        },10)
        }

        return () => clearInterval(intervalIdRef.current);
    },)


    function start(){
        setIsRunning(true)
        startTimeRef.current= Date.now()-elapsedTime
    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setElapsedTime(0)
        setIsRunning(false)
        startTimeRef.current=0
    }
    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    function formatTime(){
        let hour=Math.floor(elapsedTime/(1000*60*60));
        let minute=Math.floor(elapsedTime/(1000*60)%60);
        let sec=Math.floor(elapsedTime/(1000)%60);
        let miliSec=Math.floor(elapsedTime%100)
        
        return(`${addZero(minute)}:${addZero(sec)}:${addZero(miliSec)}`)
    }

    return(
<div className="focus-card">
            <div className="card-header">
                <div className="card-title">FOCUS TIMER</div>
                
            </div>
            
            <div className="timer-display">{formatTime()}</div>
            
            <div className="timer-controls">
                {!isRunning ? (
                    <button onClick={start} className="btn-main start">Start</button>
                ) : (
                    <button onClick={stop} className="btn-main stop">Stop</button>
                )}
                <button onClick={reset} className="btn-secondary">Reset</button>
            </div>
        </div>
    )
}

export default Timer