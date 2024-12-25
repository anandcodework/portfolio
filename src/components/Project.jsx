import React, { useState } from "react";

export default function Project() {

    const [learn, setLearn]= useState(15)
    function knox () {
        if(learn >= 20 ){
            alert("stop task")
        } else{
            setLearn(learn+1)
            
        }
        // setLearn(learn+1)
    };

    return (
        <>
            <div className="w-screen md:px-36 overflow-y-auto scrollbar-hidden h-[85vh] text-secondary">Anand
                <br />
            <button onClick={knox} className="border-fourth broder bg-white text-primary">
                Value{learn}
            </button>
            </div>
        </>
    )
}