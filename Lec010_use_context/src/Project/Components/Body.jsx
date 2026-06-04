import { useState } from "react";
import Counter from "./Counter";
import Product from "./Product";

function Body() {
  // Fixed the typo from setIlems to setItems
  const [items, setItems] = useState([
    { id: 1, name: "Milk", price: 100 },
    { id: 2, name: "Protein", price: 10000 },
    { id: 3, name: "Almond", price: 200 },
    { id: 4, name: "Coconut", price: 10 },
    { id: 5, name: "Amul ghee", price: 200 },
  ]);

  return (
    <>
      <h1>I am Blinkit Body</h1>
      {/* <Counter/> */}
      
      {/* Optimized the inline style gap property */}
      <div style={{ display: "flex", gap: "50px" }}>
        {
        items.map((item) => (<Product key={item.id} item={item} />))
        }
      </div>
    </>
  );
}

export default Body;