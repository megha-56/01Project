import React from "react";


const Contact=()=>{
    

    return(
         <div className=" w-screen h-screen bg-blue-100 ">
            <div className="flex text-center justify-center text-6xl font-bold pt-18">Contact Us</div>
            <div className="flex justify-center mt-5">
            <form  className=" ml-20">
                <div>
                    <label>Name</label><br/>
                    <input  className="bg-white border rounded w-150" />
                </div>
                <br/>
                <div>
                    <label>Email Address</label><br/>
                    <input  className="bg-white border rounded w-150"/>
                </div>
                <br/>
                <div>
                    <label>Message</label><br/>
                    <input  className="bg-white border rounded w-150 h-20"/>
                </div>
                <br/>
                <button className="bg-blue-500 text-white h-10 border rounded w-150">submit</button>
                
            </form>
            </div>


         </div>
    )
}
export default Contact