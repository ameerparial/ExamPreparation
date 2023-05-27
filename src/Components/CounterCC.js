import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter:0};
        console.log(typeof(this.state));
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(){
        this.setState({counter: this.state.counter+1});        
    }

    decrement(){
        this.setState({counter:this.state.counter-1});
    }
    render(){
        return (
            <>
                <button onClick={this.increment}>Increment</button>
                <span>{this.state.counter}</span>
                <button onClick={this.decrement}>Decrement</button>
            </>

        )
    }

}

export default Counter;