import React from 'react'

const Childcomponent = ({phone ,fal}) => {
 return(
    <div>
       <p>{phone.price}</p>
      <p>{phone.name}</p> 
       <h1>Hello</h1>
      
      <div>{
fal.map((fruit)=>{
    return(
        <> 
        <ul>
            <li>{fruit}</li>
        </ul>
        </>
    )

})
    
 } </div>
       </div>
 )
}
    
export default Childcomponent
