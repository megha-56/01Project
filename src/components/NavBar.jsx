import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Link} from "react-router-dom"

const NavBar=()=>{
    return( 
        <div className="" >
            <div className="">
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <Link to='/contact'>Contact</Link>
            </div>
        
            
        </div>
    )
}
export default NavBar