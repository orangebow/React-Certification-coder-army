//const props = {foods:["Apple","Orange","Banana"]} // this is how the props will look like when we pass it to the Food component.
// so instead of writing function Food(props) we can directly destructure the props and write function Food({foods})
// Suppose <Food foods={foodItems} a=1></Food> , then const props = {foods:["Apple","Orange","Banana"],a:1}.
//This is called key value pair, where foods is the key and ["Apple","Orange","Banana"] is the value, a is the key and 1 is the value.

function Food({foods}){ 
    //Problem:
    return(
        <>
        <ul>
        {foods.map((food)=><li>{food}</li>)}
        </ul>
        </>
    )
    //Solution:
    return(
        <>
        <ul>
        {foods.map((food)=><li key={food}>{food}</li>)}
        </ul>
        </>
    )

}

export default Food;