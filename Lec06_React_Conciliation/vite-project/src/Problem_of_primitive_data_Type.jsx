import { useState } from "react";
//Hint: Primitive data type: number, string, boolean, null, undefined, symbol.
//Problem of primitive data type: when we use primitive data type, react will not be able to detect the 
// change and thus will not re-render the component. because of the way react compares the old and new state. "
// it compares the reference of the state, not the value.
//Old array: [10,20,30] --> reference: 0x1234
//New array: [10,20,30,40] --> reference: 0x1234
//React compares the reference of the old and new state, and since they are same, it will not re-render the component.
//we will get the same output as before, which is [10,20,30], instead of [10,20,30,40] on ui.


export function App(){

  const [count,setCount] = useState([10,20,30]);

  function handleChange(){
    count.push(40);
    setCount();
  }

  return (
    <>
      <p>This is the counter for react App</p>
      <h1>Counter:{count}</h1>
      <button onClick={handleChange}>Increment</button>
      {/* <button onClick={() =>setCount(count-1)}>Decremen}t</button> */}
    </>
  )
}

export function solution(){
    const [count,setCount] = useState([10,20,30]);

  function handleChange(){
    setCount([...count,40]); // we are creating a new array instead.
   
  }

  return (
    <>
      <p>This is the counter for react App</p>
      <h1>Counter:{count}</h1>
      <button onClick={handleChange}>Increment</button>
      {/* <button onClick={() =>setCount(count-1)}>Decremen}t</button> */}
    </>
  )
}

export default App;
