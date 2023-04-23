import { useState,useEffect } from "react"
const StopWatch =()=>{
    const [isRunning,setIsRunning]=useState(false);
    const [elapsedTime,setElapsedTime]=useState(0);
    useEffect(()=>{
        let id;
       if (isRunning){
        id= setInterval(() => { 
          setElapsedTime(prevTime=>prevTime+1)  
        }, 1000);
       }
       return ()=>clearInterval(id);
    },[isRunning]);
    return(
        <div className="stopwatch">
            <h2>StopWatch</h2>
            <span className="stopwatch-time">{elapsedTime}</span>
            <button onClick={()=>setIsRunning((prevValue)=>!prevValue)} >
                {isRunning ? "Stop" : "Start" }
            </button>
            <button>Reset</button>
        </div>
    )
}
export default StopWatch;