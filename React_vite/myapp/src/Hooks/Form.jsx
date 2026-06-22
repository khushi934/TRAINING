import React, { useState } from 'react'

const Form = () => {
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const[data,setData]=useState({})


    const handelClick=(e)=>{
e.preventDefault()
setEmail("")
setName("")
setPassword("")

const data={
    name ,email,password
}
localStorage.setItem("data",JSON.stringify(data))
    }
const getData=()=>{
    const user=localStorage.getItem("data")
    setData(JSON.parse(user))
}
    


  return (
    <div>
        <h1>SignUp Form</h1>
        <form action="" onSubmit={handelClick}>
            <label htmlFor="">Name</label>
            <input type="name" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} /><br></br><br></br>
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br><br></br>
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br><br></br>
            <button>Submit</button>
            <button onClick={ getData }>Click me for details</button>
            <p>{data.name}</p>
            <p>{data.email}</p>

        </form>
      
    </div>
  )
}

export default Form
