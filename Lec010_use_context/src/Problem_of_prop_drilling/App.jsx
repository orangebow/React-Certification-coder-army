import { useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header count={count}/>
      <Body count={count} setCount={setCount}/>
      <Footer/>
    </>
  )
}

export default App
