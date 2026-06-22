import { createContext,useState } from "react";
export const  CounterContext=createContext()
export const CounterProvider=({children})=>{
    const[count,setCount]=useState(0)
    const addToCart=()=>{
        setCount((count)=>count+1)
    }
    const removeToCart=()=>{
        setCount((count)=>count-1)
    }
    return(
        <CounterContext.Provider value={count,addToCart,removeToCart}>
            {children}
        </CounterContext.Provider>

    )
}
