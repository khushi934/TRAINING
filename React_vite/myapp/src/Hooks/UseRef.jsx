
import React ,{ useRef, useEffect } from 'react'

const UseRef = () => {
    const inputRef =useRef(null)
    const scrollTo = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    const Scroll=()=>{
        scrollTo.current.scrollIntoView({behavior:"smooth"})
    }
  return (
    <div >
        <p>This Example from use Ref</p>
        <input ref={inputRef} className='ml-15' type="text" name="" id="" placeholder="enter name"/>

        <button onClick={Scroll} className='border-2 ml-50'>Contact us</button>
        <p className='mt-[500px]' href={scrollTo}>These are my contact details</p>
 
    </div>
  )
}

export default UseRef
