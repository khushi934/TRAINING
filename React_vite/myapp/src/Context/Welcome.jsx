import { createContext } from "react";

 export const WelcomeContext = createContext();
 export const WelcomeProvider=({children})=>{
    // const message= "Welcome"
    
    return (
        <WelcomeContext.Provider value="Welcome">
{children}
        </WelcomeContext.Provider>


    )

    


 }