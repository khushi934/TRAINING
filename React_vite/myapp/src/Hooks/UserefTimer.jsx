import { useState,useRef, useContext } from 'react'
import { ThemeContext } from '../Context/Theme'

const UserefTimer = () => {
  const {toggleTheme,theme}=useContext(ThemeContext)
  const[second,setSecond]=useState(0)
  const timerRef=useRef(null)

  const start=()=>{
    
timerRef.current=setInterval(()=>{
  setSecond((seconds)=>seconds+1)
},1000)

  }
  const stop=()=>{
    clearInterval(timerRef.current)
    

  }
  const reset=()=>{
clearInterval(timerRef.current)
setSecond(0)
  }
  return (
    <div style={{backgroundColor:theme==="light"?"white":"black" ,color:theme==="light"?"black":"white"}}>
      <button onClick={toggleTheme}>Theme</button>
      <h1>Timer:{second}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>

      
    </div>
  )
}

export default UserefTimer
