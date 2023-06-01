import React, { useRef } from "react";


const Home=()=>{
    let inputRef=useRef(null)

    const handleInput=()=>{
        console.log("hello");

        inputRef.current.value="5000";
        inputRef.current.focus();
        inputRef.current.style.color="black";
    }
    
    return(
        <>
        <h1>UseRef in react</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={handleInput}>handleInput</button>
        </>
    );
}
export default Home;