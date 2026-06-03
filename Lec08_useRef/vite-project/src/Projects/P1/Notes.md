## Problem A:
 setInterval(()=>{

            setTime(time+1);

        },1000);


Q: Is setInterval is managed by webApi or javascript?

The answer is Web APIs (in the browser) or Node.js APIs (on the server), not core JavaScript itself.
The Mechanism: Who does what?

    JavaScript (The Engine): Core JavaScript is single-threaded and synchronous. It has no built-in concept of time, clocks, or scheduling. It only knows how to execute code line-by-line right now.

    The Environment (Web APIs): The browser provides setInterval as part of its Web APIs. When you call it, JavaScript essentially tells the browser, "Hey, please kick off a timer and nudge me every 1,000 milliseconds."

When that timer goes off, the browser pushes your callback function (() => { setTime(time + 1); }) into JavaScript's Callback Queue. The Event Loop then waits until JavaScript is done with its current work before picking up your function and executing it.
A Critical Warning About Your Code

Looking at your snippet, you are likely using React (setTime(time + 1) looks like a hook state setter). If this setInterval is running inside a standard React component without proper handling, you will run into a famous bug known as a stale closure.

Because setInterval is created once, it captures the value of time at the exact moment it was created (e.g., 0). Every second, it will run setTime(0 + 1), meaning your timer will get stuck at 1 and never count higher.

## The Fix

To fix this, you should use the functional updater form of the state setter, which always gets the most fresh, up-to-date state directly from React, independent of closures:
JavaScript

setInterval(() => {
    // prevTime is guaranteed to be the absolute latest state
    setTime(prevTime => prevTime + 1); 
}, 1000);


## Problem B:
** Prb1 : let intervalId =0;
solution1 :const intervalIdRef = useRef(null);
function handleStart(){
       ** Prb2: intervalId =setInterval(()=>{
            setTime(time => time+1); //use functional updater of the state setter.
        },1000);

        //using useRef to store intervalId across re-renders.
        //this is adopted when handleStop is in different component and we want to access intervalId in that component.
        ** solution2: intervalIdRef.current = setInterval(()=>{
            setTime(time=>time+1); // 
        })
    }

    function incorrect_handleStop(){
       ** Prb3:clearInterval(intervalId);
    }

    function handleStop(){
            ** solution3: clearInterval(intervalIdRef.current);
    }

    How useRef handle this ?
    
    Description: 
    useRef creates an object as:
         intervalIdRef = {
            current : null,
         }
    using normal variable(let intervalId), values are reinitialized each time <App> renders.
    using useRef variable(intervalId = useRef(null)), useRef object is created only single time and always current value is used.
    current->null(initially), then current->1->2->3->.....


# Problem C:
We have three buttons start,stop and Reset.
user clicked start button, intervalIdRef is created and time increases at 1->2->3->4->5
user clicked start button again: now time increses at : 5->7->9->11->13->15->...
Because two intervalIdRef is created and running.

Solution:
if(intervalIdRef.current !=null) return; -- sol-1.
or, we can modify handleStop and handleReset function:
 function handleStop(){
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
    }

 function handleReset(){
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
        setTime(0); 
    }

