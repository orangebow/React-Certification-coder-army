import {useState} from "react";

function counting({name}){
    const [count, setCount] = useState(0);

    return(
        <>
        <div>
        <p>our first counter app: {name}</p>
        <h2>count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
        </>
    )
}

export default counting;