import { useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

// export const CounterContext = createContext();
export const ProductContext = createContext();

function App() {
 // const [count, setCount] = useState(0)
    const [cartItem, setCartItem] = useState(0);

  return (
    <>
      {/*<CounterContext value={{count,setCount}}>*/}
      <ProductContext value={{cartItem, setCartItem}}>
      <Header count={count}/>
      <Body count={count} setCount={setCount}/>
      <Footer/>
      </ProductContext>
      {/*</CounterContext>*/}
    </>
  )
}

export default App
