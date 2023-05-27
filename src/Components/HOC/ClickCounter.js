import UpdateComponent from './CounterFun';

function ClickCounter(props) {
    const {count, handleIncrement} = props;
    console.log(props);
    
    return (
        <button onClick={handleIncrement}>{props.name} Clicked {count} times</button>
    )
}

export default UpdateComponent(ClickCounter, 5);