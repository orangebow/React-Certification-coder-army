import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App/>
  </StrictMode>,
)
//Title > Manually managing the React DOM and state without hooks and its side-effects.

//Problem:
//In the above code, we have two instances of the App component being rendered.
//When we click the "Increment" button in one of the App components, it will only update the count for that specific instance,
// and not for the other instance.
//This is because each instance of the App component has its own state, and they are not shared between the two instances.

//On the frontend, following issue is observed:
//Two counter component are there.
//Issue-1: click on the increment button of one counter, only that counter is updated, other counter is not updated.
//because each instance has its own state.

//Issue-2:
//Suppose counter-1 is at 5 and counter-2 is not being clicked yet.
//clicking on the counter-2 will update counter-1 back to 0. Because the count variable instance for two count variable is same,
//but counter-2 started incrementing from 0, so it will update the count variable to 0, and then increment it to 1, 
// which will update the counter-1 back to 0 and then increment it to 1, which is not the expected behavior.

//Solution:
//To fix this issue, we can lift the state up to a common parent component that can manage the state 
//for both instances of the App component.This is why hooks are used in React, to manage state and side effects in functional components.


//The whole game is about rendering the same component of which increment button is clicked.