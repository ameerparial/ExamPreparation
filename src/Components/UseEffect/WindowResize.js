import { useEffect, useState } from "react"


export default function WindowResize(){
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const handleResize = ()=>{
        setWindowSize(window.innerWidth);
    }

    useEffect(()=>{
        console.log('Mount');
        window.addEventListener('resize', handleResize);
    },[])


    return(
        <div>{windowSize}</div>
    )
}