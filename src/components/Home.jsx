import React from "react";
import NavBar from "./NavBar";

const Home=()=>{
    return(
        <>
        <div className=" w-screen h-screen bg-blue-100 ">
            <div className="flex text-center justify-center text-6xl font-bold pt-18"><h1>Build Your First React <br/> Project Today!</h1></div>
            <div className="text-center pt-5 text-lg font-medium" ><p>Learn the basics of modern web <br/> development with this straightforward kit.</p></div>
            <div className="bg-blue-600 text-white h-9 w-30  flex justify-center text-center rounded mx-auto mt-6"><button>Get Started</button></div>
            <div className="flex justify-center mx-auto mt-9"><img src='https://play-lh.googleusercontent.com/6XoE7MEwxKWBs61s6d_hZtqNnVKcZrOzcVNrG50GpwErIr1QhGtkUAl2kC1rsxqRuJAw=w600-h300-pc0xffffff-pd' alt='logo'/></div>

        </div>
        </>
    )
}
export default Home