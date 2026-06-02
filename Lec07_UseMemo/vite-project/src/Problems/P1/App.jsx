import { useState } from 'react'
import Sum from './Sum';
import Post from './Post';
import { useMemo, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);
  console.log("render");
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}> Increment </button> 
      <Sum></Sum> 
    </>  
  )
}

function Sum_with_props(){
  const [count, setCount] = useState(0);
  console.log("render");
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}> Increment </button> 
      <Sum number={1000}></Sum> 
    </>  
  )
}


//Below function passes the dynamic props to the sum component
//This will help understand the React.memo behaviour when props are changing.
function Sum_with_dynamic_props(){
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000);
  console.log("render");
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}> Increment </button> 
      <h2>Your current number:{number}</h2>
      <button onClick={()=>setNumber(number+1000)}>Increment Number</button>
      <Sum number={1000}></Sum> 
    </>  
  )
}


function Sum_with_dynamic_props_prime_number_useMemo(){
  
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000);
  console.log("render");
  
//   function calculatePrime(){
//   //calculate the prime number till the given number from 1.
//     let total =0;
//   if(number>1) total++;
//   for(let i=2; i<=number;i++){
//     total++;
//     for(let j=3;j<=i;j++){
//       if(i%j==0) {total--; break;}
//     }
//   }
//   return total;
// }

//The above function is a heavy function and it will be called on every render.
//To avoid this we can use useMemo hook to memoize the result of the function and
//it will only be called when the number changes.

const prime = useMemo(()=>{
    let total =0;
  if(number>1) total++;
  for(let i=2; i<=number;i++){
    total++;
    for(let j=3;j<=i;j++){
      if(i%j==0) {total--; break;}
    }
  }
  return total;
}, [number]);
  

return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}> Increment </button> 
      <h2>Your current number:{number}</h2>
      <button onClick={()=>setNumber(number+1000)}>Increment Number</button>
      <h3>Total prime numbers: {prime} </h3>
      <Sum number={1000}></Sum> 
    </>  
  )
}


function handleClick_with_useCallback(){
  
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000);
  console.log("render");
  

const prime = useMemo(()=>{ //use to memoize the result of the function and it will only be
// called when the number changes.
    let total =0;
  if(number>1) total++;
  for(let i=2; i<=number;i++){
    total++;
    for(let j=3;j<=i;j++){
      if(i%j==0) {total--; break;}
    }
  }
  return total;
}, [number]);


const handleClick = useCallback(()=>{
  console.log("Handle click count", count);
},[count]);

return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}> Increment </button> 
      <h2>Your current number:{number}</h2>
      <button onClick={()=>setNumber(number+1000)}>Increment Number</button>
      <h3>Total prime numbers: {prime} </h3>
      <button onClick={handleClick}>Click</button>
      <Sum number={1000}></Sum> 
    </>  
  )
}

function Post_with_Object(){
  //see post.jsx file for the post component which is memoized using React.memo
  const obj = useMemo(()=>{
    return {name:"Rohit", age:20};
  });
  return (
    <>
    <Post name={value={name:Rohit, age:20}}></Post>
    <Post name={obj}></Post>
    </>
  )
}

export default App;
