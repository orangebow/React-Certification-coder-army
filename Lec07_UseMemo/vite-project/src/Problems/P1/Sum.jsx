import React from 'react';

function Sum(){
    
    function calculateSum(){
    let sum =0;
    for(let i=0;i<1000;i++) sum+=i;
    return sum;
}
const total_Sum = calculateSum();
console.log("Sum rendered");

return(
    <>
    <h1>This is our Math Library</h1>
    <h2>Sum: {total_Sum}</h2>
    </>
)
}

//use below code to optimize the Sum component using React.memo
const solution_useMemo = React.memo(()=>{
    
    function calculateSum(/*number*/){
    let sum =0;
    //for(let i=0;i<number;i++) sum+=i; 
    for(let i=0;i<1000;i++) sum+=i;
    return sum;
}
const total_Sum = calculateSum();
console.log("Sum rendered");

return(
    <>
    <h1>This is our Math Library</h1>
    <h2>Sum: {total_Sum}</h2>
    </>
)
});


//export default Sum;
export default solution_useMemo;