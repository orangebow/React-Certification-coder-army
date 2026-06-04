import { useState, useContext} from "react";
import { ProductContext } from "../App";


function Product({item}){

const [addToCart, setAddToCart] = useState(false) ;
const {cartItem, setCartItem} = useContext(ProductContext);
return(
    <div>
    <h1>Name: {item.name}</h1>
    <h2>Price: {item.price}</h2>
    {
        addToCart ? <button onClick={()=>{setAddToCart(false), setCartItem(cartItem=>cartItem-1)}}>Remove</button> : <button onClick={()=>{setAddToCart(true), setCartItem(cartItem+1)}}>Add</button>
    }
    </div>
)

}

export default Product;