import React ,{ useState } from 'react'

const UseState = () => {
    const[count,setCount]= useState(0)
    const [quantity,setQuantity]=useState(1)

    const inc= () =>{
        setCount((count)=>count+1)
    }
    const dec= () =>{
        setCount((count)=>count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    const product =()=>{
setQuantity((quantity)=>quantity+1)
    }
    const price=200
    const total=price*quantity
  return (
    <div> 
        <button onClick={inc}>Inc</button>
        <button onClick={reset}>Reset</button>
        <button onClick={dec}>Dec</button>
        <button onClick={product}>Inc Quantity</button>
      <h1>Count :{count}</h1>
      <h1>Quantity:{quantity}</h1>
      <h1>Total Amount:{total}</h1>
    </div>
  )
}

export default UseState
