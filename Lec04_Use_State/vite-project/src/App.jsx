import {useState} from 'react';
function App(){
  // let count = 0;
  function IncreaseNumber(){
  count++;
  // console.log(count);
  const para = document.quertySelector('p'); // Direct DOM manipulation to update the paragraph text content
  para.textContent = `Counter: ${count}`; //Direct DOM manipulation is bad practice in React,
  //as it can lead to unexpected behavior and makes it harder to manage the state of the application.
  //Instead, we should use React's state management to update the UI when the count changes.
  
  const button = document.querySelector('button');
  button.textContent = `Increment: ${count}`; // Direct DOM manipulation to update the button text content

}

//Instead, we should use React's state management to update the UI when the count changes.

let [count, setCount] = useState(0); // Initialize state variable 'count' with initial value 0 and 
                                        // 'setCount' as the function to update it.
function IncreaseNumber_with_state(){
//How to use Hooks in React?
//Hooks are functions that allow us to use state and other React features in functional components.
//Import useState from React
//Call useState inside our component to create a state variable and a function to update it.
//Use the state variable in our component's render method to display the current state.
//Call the function to update the state when an event occurs (e.g., button click).

count++;
setCount(count); //This signal the React for increase in the "count" variable.
//or, setCount(count + 1);

      
}
  
return(
  <>
  <p>Counter:{count}</p>
  <button onClick={IncreaseNumber}>Increment: {count}</button>
  </>
  );
}

export default App;