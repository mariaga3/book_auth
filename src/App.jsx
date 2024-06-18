import React, {useState} from "react";
import Navbar from "./components/Navbar";
import ImageShow from "./components/ImageSlideShow";
import AboutUs from "./components/About";
import Items from "./components/Items";

const App=()=>{
  const [theme, setTheme]=useState("light");
  return(
    
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      
      <ImageShow />
      <AboutUs />
      <Items />
      </div>
      
  )
}

export default App