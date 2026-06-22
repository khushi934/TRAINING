import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GlobalProvider } from './Context/GlobalVariable.jsx'
import { ThemeProvider } from './Context/Theme.jsx'
import { CounterProvider } from './Context/Counter.jsx'
import { WelcomeProvider } from './Context/Welcome.jsx'
 import Greet from './Context/Greet.jsx'
createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <StrictMode>
    
    <GlobalProvider>
      <CounterProvider>
<WelcomeProvider>
        <App/>
        <Greet/>
        
</WelcomeProvider>
        </CounterProvider>
        </GlobalProvider>
    
  </StrictMode>
  </ThemeProvider>
  
  
)
