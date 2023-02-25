import React, { createContext } from 'react'
import Componet1 from './Componet1'
 const Firstname = createContext();
 const Lastname = createContext();
const MainComponent = () => {
   
  return (
    <div>
        <Firstname.Provider value={"hello world"}>
            <Lastname.Provider value={"hello react js"}>
            <Componet1/>
            </Lastname.Provider>
        
        </Firstname.Provider>
       
    </div>
  )
}
export default MainComponent;
export {Firstname, Lastname};
