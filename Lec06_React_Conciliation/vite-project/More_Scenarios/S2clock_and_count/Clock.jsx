import {useState} from 'react';
import counting from './Count';
function Clock(){
    const [clocks, setClocks]= useState(["A","B","C"]);
    function handleChange(){
        setClocks(["D",...clocks]);
    }
    return(
        <>
        <button onClick={handleChange}>Increment Button</button>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"20px"}}>
            {clocks.map(clock => <counting name={clock}></counting>)}
        </div>
        </>
    )
} 

export default clock;