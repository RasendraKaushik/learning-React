import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  

  // let counter = 15

  const addValue = () => {
    if(counter < 20){ 
      console.log("clicked",counter);
      // counter = counter + 1;
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      console.log("clicked",counter);
      // counter = counter - 1;
      setCounter(counter - 1)
    }
  }


  return (
    <>
      <h1>Rasendra and React</h1>
      <h2>COunter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue} 
      >remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
