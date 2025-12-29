
import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Floatingicon from "./Components/Floatingicon"
import { useState } from "react"


const  App =() =>  {
   const[dark,setDark]= useState(false);

   const toggle = ()=> {
  setDark(prev => !prev);
}
  return (
   
<>
       <main className={dark ? "bg-gray-900 text-white" : "bg-white text-black"}>

        <Header mode={toggle}/>
        <Home/>
      
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
        <Floatingicon/>
       </main>

      </>
  )
}

export default App