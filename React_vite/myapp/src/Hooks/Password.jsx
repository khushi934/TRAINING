import React, { useState } from 'react'

const Password = () => {
    // const[showPassword, setShowPassword]=useState(false)
    // const[inputpassword, setInputPassword]=useState("")
    // const[liked,setLiked]=useState(false)
    const[paragraph,setPara]=useState("")
    const para =()=>{
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quos deserunt atque maxime vero. Expedita dolorum nam officia minus ullam est nemo iure? Id obcaecati quod aut veniam voluptas nam.</p>
    }
  return (
    <div>
{/* <input type={showPassword?"text":"password" } name="" id="" value={inputpassword} onChange={(e)=>setInputPassword(e.target.value)} />
<button onClick={()=>setShowPassword((prev)=>!prev)}>{showPassword?"Hide":"Show"}</button>
<button onClick={like}>{liked?"Remove like":"Add like"}</button>
<h1>Liked:{like}</h1> */}
<button onClick={para}>{setPara?"Hide":"Show"}</button>

      
    </div>
  )
}

export default Password
 