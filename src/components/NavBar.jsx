import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Link, NavLink} from "react-router-dom"
import { FaGear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";



const NavBar=()=>{
    const navigate = useNavigate();
    return( 
        // <div className="" >
        //     <div className="">
        //        <Link to='/'>Home</Link>
        //        <Link to='/about'>About</Link>
        //        <Link to='/contact'>Contact</Link>
        //     </div>
        
            
        // </div>
        <div className="bg-white flex justify-around h-20 border-b-2 items-center">
           <button onClick={()=>navigate('/')} className="cursor-pointer">
            <div className="text-2xl font-bold flex items-center gap-1 ">
              <div><FaGear className="text-blue-600 text-3xl h-8.5 "/></div>
              <div>BEGINNER<span className="text-blue-600">DEV</span></div>
           </div>
            </button> 
           <div className="flex justify-around w-[20%] text-grey-800 font-medium ">
              <NavLink to='/' className={({isActive})=>isActive?"text-blue-600":""}>Home</NavLink>
              <NavLink to='/about' className={({isActive})=>isActive?"text-blue-600":""}>About</NavLink>
             <NavLink to='/contact' className={({isActive})=>isActive?"text-blue-600":""}>Contact</NavLink>
           </div>
        </div>
    )
}
export default NavBar