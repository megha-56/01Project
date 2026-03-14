import React from "react";


const Contact=()=>{
    

    return(
         <div className=" w-screen h-screen bg-blue-100 ">
            <div className="flex text-center justify-center text-6xl font-bold pt-18">Contact Us</div>
            <div className="flex justify-center mt-5">
            <form  className=" ml-20">
                <div>
                    <label for="Name">Name</label><br/>
                    <input  id="Name" placeholder="Enter Your Name here" className="bg-white border rounded w-150 pl-2" />
                </div>
                <br/>
                <div>
                    <label for="E-mail">Email Address</label><br/>
                    <input id="E-mail" placeholder="E-mail" className="bg-white border rounded w-150 pl-2"/>
                </div>
                <br/>
                <div>
                    <label for="Message">Message</label><br/>
                    <input id="Message" placeholder="Type Something here" className="bg-white border rounded w-150 h-20 pl-2"/>
                </div>
                <br/>
                <button className="bg-blue-500 text-white h-10 border rounded w-150 cursor-pointer">submit</button>
                
            </form>
            </div>


         </div>
    )
}
export default Contact