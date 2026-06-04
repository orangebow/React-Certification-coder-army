import { useState } from "react";

function Counter({count,setCount}){
//const [count, setCount] = useState(0); //use it in the App.jsx because <App/> is common parent for the <Display/> and <Counter/>

    return(
        <>
        <h1>Counter is: {count}</h1>
        <button onClick={() => setCount(count => count + 1)}>Increment</button>
        <button onClick={() => setCount(count => count - 1)}>Decrement</button>
        </>
    )
}

export default Counter;