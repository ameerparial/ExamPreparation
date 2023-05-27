
import React from 'react';

function ClickButtonCount(props) {
    const {count, incrementCount} = props;

    
    return (
        <button onClick={incrementCount}>You {count} times</button>
    )
}

export default ClickButtonCount