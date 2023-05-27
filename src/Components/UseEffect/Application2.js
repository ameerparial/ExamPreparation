import { useEffect, useState } from "react";

function Application2(){
    const [resourceType, setResourceType] = useState('posts');

    useEffect(()=>{
        console.log('Mount');

        return ()=>{
            console.log("Unmount");
        }
        

    }, [resourceType]);

    return(
        <>
            <button onClick={()=>setResourceType('posts')}>Posts</button>
            <button onClick={()=>setResourceType('users')}>Users</button>
            <button onClick={()=>setResourceType('comments')}>Comments</button>
            <h1>{resourceType}</h1>
        </>
    )

}
export default Application2;