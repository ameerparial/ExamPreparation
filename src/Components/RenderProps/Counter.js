
import React, {useState} from 'react'

function Counter(props) {
    const [count, setCount] = useState(0);
    const incCount = ()=>{
        setCount(count+1);
    }

    return (
        <>
        {props.render(count, incCount)}
        </>
    )
}

export default Counter