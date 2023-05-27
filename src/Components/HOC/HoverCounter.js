import UpdateComponent from "./CounterFun";

function HoverCounter(props) {
    const {count, handleIncrement} = props;
    
    return (
        <h1 style={{border:'5px black solid'}} onMouseOver={handleIncrement}>{props.name} Hovered {count} times</h1>
    )
}
export default UpdateComponent(HoverCounter, 10);
