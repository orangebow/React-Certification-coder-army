
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