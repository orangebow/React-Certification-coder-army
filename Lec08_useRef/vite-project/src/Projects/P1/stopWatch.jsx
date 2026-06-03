import { useState } from 'react'
import { useRef } from 'react';

//stopWatch : stop start reset.
function App() {
   
    const [time,setTime] = useState(0);
    let intervalId = null; // Incorrect way to store intervalId. It will not persist across re-renders.
    const intervalIdRef = useRef(null); // Correct way to store intervalId using useRef.    
    
    function incorrect_handleStart(){
       //Problem of stale state: Time is not updating in UI. Why? Because setInterval is creating a closure and
       //it is referring to the initial value of time which is 0.
       //So, it is always setting time to 1 after 1 second.
        setInterval(()=>{
            setTime(time+1);
        },1000);
    }
    // correct way to update time:
    function handleStart(){
        if(intervalIdRef.current)return; //if time is already running do nothing.
        intervalId =setInterval(()=>{
            setTime(time => time+1); //use functional updater of the state setter.
        },1000);

        //using useRef to store intervalId across re-renders.
        //this is adopted when handleStop is in different component and we want to access intervalId in that component.
        intervalIdRef.current = setInterval(()=>{
            setTime(time=>time+1); // 
        });
    }

    function incorrect_handleStop(){
        clearInterval(intervalId);
    }

    function handleStop(){
            clearInterval(intervalIdRef.current);
    }

    function handleReset(){
        clearInterval(intervalIdRef.current);
        setTime(0); 
    }

  return (
    <>
      <h1>Stopwatch:{time}</h1> 
      <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button>Reset</button>
      </div>
    </>
  )
}

export default App;
