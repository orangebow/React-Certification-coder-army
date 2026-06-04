import { useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

export const CounterContext = createContext();


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterContext value={{count,setCount}}>
      <Header count={count}/>
      <Body count={count} setCount={setCount}/>
      <Footer/>
      </CounterContext>
    </>
  )
}

export default App
