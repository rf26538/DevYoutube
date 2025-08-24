import React, { useEffect, useRef, useState } from "react"

const DemoUseRef = () => {
    const [y, setY] = useState(0)
    let x = 0;

    const ref = useRef(0);
    console.log("Rendering....");
    
    const i = useRef(null);
    useEffect(() => {
        if(i.current) return;
        i.current = setInterval(() => {
            console.log("Hello..."+ Math.random());
            
        }, 1000);

        // return () => clearInterval(i.current);
    })

    return (
        <div 
            className="m-4 p-2 w-96 h-96 border border-black" 
        >
            <div>
                <button
                    className="bg-green-200 px-2 m-4 cursor-pointer"
                    onClick={() => {
                       x = x + 1; 
                       console.log("x="+x);
                       
                    }}
                >Increase x</button>
                <span className="font-bold text-xl">let = {x}</span>
            </div>
            <div>
                <button
                    className="bg-green-200 px-2 m-4 cursor-pointer"
                    onClick={() => {
                       setY(y+1);
                       console.log("set="+y);
                    }}
                >Increase Y</button>
                <span className="font-bold text-xl">state = {y}</span>
            </div>
            <div>
                <button
                    className="bg-green-200 px-2 m-4 cursor-pointer"
                    onClick={() => {
                       ref.current = ref.current+1;
                        console.log("ref="+ref.current);
                    }}
                >Increase Z</button>
                <span className="font-bold text-xl">Ref = {ref.current}</span>
            </div>
            <button 
                className="bg-red-600 p-4 m-4 rounded-lg text-white font-bold"
                onClick={
                    () => {clearInterval(i.current)}
                }
            >
                Stop Printig   
            </button>
        </div>
    )
}

export default DemoUseRef