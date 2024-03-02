import { useState } from "react";
function Counter(){

    var [count , setCount] = useState(0)
    var handleIncrement =() =>{
        setCount(count+1)
        console.log(count)
    }
    var handleDecrement = () =>{
        setCount(count-1)
        console.log(count)
    }    
    

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={(handleIncrement)} > Increment </button>
            <button onClick={(handleDecrement)}>Decrement</button>
        </div>
    )

}
export default Counter;