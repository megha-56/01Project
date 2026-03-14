import React from "react";
import NavBar from "./NavBar";

const Home=()=>{
    return(
        <>
        <div className=" w-screen h-screen bg-blue-100 ">
            <div className="flex text-center justify-center text-6xl font-bold pt-18"><h1>Build Your First React <br/> Project Today!</h1></div>
            <div className="text-center pt-5 text-lg font-medium" ><p>Learn the basics of modern web <br/> development with this straightforward kit.</p></div>
            <div className="bg-blue-600 text-white h-9 w-30  flex justify-center text-center rounded mx-auto mt-6"><button className="cursor-pointer">Get Started</button></div>
            <div className="flex justify-center mx-auto mt-4"><img src='https://cdni.iconscout.com/illustration/premium/thumb/man-using-laptop-illustration-svg-download-png-4678408.png' alt='logo'/></div>

        </div>
        </>
    )
}
export default Home