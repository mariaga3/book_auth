import React from "react";
import './Navbar.css'
import night from '../assets/night.png'
import sun from '../assets/sun.jpg'
import ziri4 from '../assets/ziri4.png'
import n from '../assets/n.png'
import see from '../assets/see.png'
import jo from '../assets/jo.png'

const Navbar=({theme, setTheme})=>{

    const toggle_mode=()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
  return(
    <div className="navbar">
<img src={theme == 'light' ? ziri4 : jo} className="logo"/>

<ul>
    <li>Home</li>
    <li>About</li>
    <li>Service</li>
    <li>Contact</li>
</ul>
<div className="search-box">
<input  type="text" placeholder="Search"/>
<img src={see} alt="" />
</div>
<img onClick={()=>{toggle_mode()}} src={n} alt="" className="toggle-icon"/>
</div>

   
  )
}

export default Navbar