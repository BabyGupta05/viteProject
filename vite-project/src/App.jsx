import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>counter app</h1>

     <h2>count {count}</h2>

     <button onClick={()=>{setCount(count+1)}}>+</button>
     &nbsp:&nnsp
     <button onClick={()=>{setCount(count-1)}}>-</button>
    </>
  )
}

export default App
