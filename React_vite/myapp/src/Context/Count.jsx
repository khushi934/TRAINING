import  { useContext } from 'react'
import { CartContext } from './Counter'

const Count = () => {
    const {count,addToCart,removeToCart}=useContext(CartContext)

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={addToCart}>Add to cart</button>
        
      
    </div>
  )
}

export default Count
