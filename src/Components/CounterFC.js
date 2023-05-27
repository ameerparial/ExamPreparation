import { useState } from "react"

export default function Counter(){
    const [counter, setCounter] = useState(0);

    return(
        <>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <span>{counter}</span>
            <button onClick={()=>setCounter(counter-1)}>-</button>
        </>
    )

}