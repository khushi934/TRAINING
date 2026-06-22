import React from 'react'
import Childcomponent from './Childcomponent'
const Parentcomponent = () => {
    const  mobile = {
        name:"Samsung",
         price:50000
    }

        const fruit =["Mango","Apple","Banana"]
      
  return (
    
<div>
    <Childcomponent  phone={mobile} fal={fruit}/>  
     
</div>
  )
}

export default Parentcomponent
