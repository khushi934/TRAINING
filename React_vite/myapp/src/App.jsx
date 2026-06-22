// import  Rrgi from './Rrgi'
// import Parentcomponent from './Parentcomponent'
// import UseState from './Hooks/UseState'
// import Password from './Hooks/Password'
// import Form from './Hooks/Form'
// import UseEffect from './Hooks/UseEffect'
// import UseRef from './Hooks/UseRef'
// import UserefTimer from './Hooks/UserefTimer'
// import Prev from './Hooks/Prev'
// import {Browserrouter}
// import Count from './Context/Count'
// import UseRef from './Hooks/UseRef'
import UserefTimer from './Hooks/UserefTimer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Greet from './Context/Greet'
import Home from './Context/Home'


function App() {

  return (
    <>
      {/* <Rrgi/>
      <Parentcomponent/>
      <UseState/>
      <Password/> */}
      {/* <Form/> */}
      {/* <UseEffect/> */}
      {/* <h1>Hello</h1>
      <h2>Everyone</h2> */}
      {/* <UseRef/>
      <UserefTimer/> */}
       {/* // <Prev/> */}
       
       {/* <Count/> */}
      <BrowserRouter>
      <Routes>
      <Route path='/timer' element={<UserefTimer/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/greet' element={<Greet/>}></Route>
      
      
        
</Routes>
      
      </BrowserRouter> 
      {/* <MyPortfolio/> */}
    
    </>
  )
}

export default App
 