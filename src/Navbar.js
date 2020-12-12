import React,{useState} from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

function Navbar() {
   const[clicked, setClicked]=useState(false)
 
  
  
  
  return (
          
     
     
    <div className="navbar">  
        <nav>
          <div className="logo">
          <h2>Crypto<span>czech</span></h2>
            <i class="fas fa-shekel-sign"></i>  
              </div>  
           <ul style={{transform:clicked ?"translateX(0px)":"translateX(500px)"}}>
             <li><Link to="/">Hlavní strana</Link></li>
             <li><Link to="/Onas">O nás</Link></li>
             <li><Link to="/Kontakt">Kontakt</Link></li>
           </ul>
           <i class="fas fa-bars menu" onClick={()=>setClicked(!clicked)}></i>
        </nav>
    </div> 
  
    
    )
}

export default Navbar
