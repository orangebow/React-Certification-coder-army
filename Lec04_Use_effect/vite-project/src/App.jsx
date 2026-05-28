
function IncreaseNumber(){
  count++;
  console.log(count);
}

function App(){
  let count = 0;
 
  function IncreaseNumber(){
  count++;
  console.log(count);
}
  
return(
  <>
  <p>Count:{count}</p>
  <button onClick={IncreaseNumber}>Increment</button>
  </>
  );
}

export default App;