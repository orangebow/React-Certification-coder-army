import { useState } from "react";
import Food from "./Food";
function List(){
    const [foodItems,setFoodItems] = useState(["Apple","Orange","Banana"]);

    function handlChange(){
        setFoodItems(["Mango",...foodItems])
    }

    return(
        // we are passing the foodItems as props to the Food component,
        //props is same as arguments in a function
        <>
        <button onClick={handlChange}>Increment</button>
        <Food foods={foodItems}></Food> 
        </>
    )
}
export default List;