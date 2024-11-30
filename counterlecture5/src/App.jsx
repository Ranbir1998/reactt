import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //defining a hook
  let [counter, setCounter]=useState(15)

  //let counter =5
  const addValue=()=>{
    console.log("clicked",counter);
    counter=counter+1;
    setCounter(counter)
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }
  

  return (
    <>
     <h1>Hey its me</h1>
     <h3>Counter value: {counter}</h3>
     <button
     onClick={addValue}
     >add value{counter}</button>
     <br/>
     <button
     onClick={removeValue}
     >remove value{counter}</button>
     </>
  )
}

export default App
