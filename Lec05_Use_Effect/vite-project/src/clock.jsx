import {useEffect, useState} from "react"

function Clock(){
    const [time,setTime] = useState(new Date().toLocaleTimeString());
    const [show,setShow] = useState(true);
    //Root cause of problem: direct embedding of the setInterval within the function.
    /*setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
        console.log("Hi");//Inspect --> console
    },1000);*/
    
    //solution: wrap the setInterval within the useEffect.
    /*useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
            console.log("Hi");//Inspect --> console
        },1000);
    },[]) // make sure to use dependency array to avoid the multiple rendering.
    */
    //Adding functionality : making clock dependent on the show variable. 
    //Description: when clock is not showing, time will stop. Thus, dependent on the show variable.
    useEffect(()=>{
        if(!show) return;
        
        const showIntervalId = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());

        });
        return ()=>{
            clearInterval(showIntervalId);
        }
    },[show])

    return (
        <>
        <button onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
        {
            show&&<h1>Time clock:{time}</h1>
        } 
        <h1>Time clock:{time}</h1>
        </>
    )

}

export default Clock;

//Problem:
/*The "Memory Leak" Chain Reaction

    Initial Render: The Clock component renders for the first time. It sets up Interval #1 to run every 1 second.

    1 Second Passes: Interval #1 triggers and calls setTime(...).

    The Re-render: Changing state forces the Clock component to re-render (re-execute the function).

    The Explosion: During this second render, the code runs from top to bottom again, creating Interval #2.

    Exponential Growth: After another second, Interval #1 and Interval #2 both fire setTime. 
    This triggers two more re-renders,
    creating Interval #3 and Interval #4.

Within a minute, your browser will be running thousands of background
intervals all fighting to update the exact same state variable. 
This causes massive memory leaks, UI stuttering, and will eventually crash the browser tab.*/

//solution: use useffect