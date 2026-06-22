import {useContext} from 'react'
import { WelcomeContext } from './Welcome'

const Greet = () => {
    const message =useContext(WelcomeContext)
  return (
    <div>
        <h1>{message}</h1>
        
    </div>
  )
}

export default Greet
