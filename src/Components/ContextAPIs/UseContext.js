import { useContext } from "react";


function UseContextHook(){
    const context  = useContext();
    return(
        <>
        {context}
        </>


    )

}

export default UseContextHook;