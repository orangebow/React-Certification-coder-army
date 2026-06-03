import {useState} from 'react';

function Login(){
    //const[email,setEmail]=useState("");
    //const[password,setPassword]=useState("");
    const emailRef = useRef("");
    const passRef = useRef("");
    
    console.log("render");

    function handleSubmit(e){
        e.preventDefault();
        console.log("emailRef");
        console.log("passwordRef"); 
    }
    /*return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChnage={(e)=>setEmail(e.target.value)}></input>
            <input type="password" value={password} onChnage={(e)=>setPassword(e.target.value)}></input>
            <button  type="submit">Submit</button>
        </form>
        </>
    )*/

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input ref={emailRef}></input>
            <input ref={passRef}></input>
            <button  type="submit">Submit</button>
        </form>
        </>
    )
}

export default Login;