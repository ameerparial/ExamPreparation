
function MouseHoverCount(props) {
    const {count, incrementCount} = props;


    return (
        <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
    )
}

export default MouseHoverCount