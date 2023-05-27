import React from "react";
import Child from "./Child";


export default class Unmount extends React.Component{
    constructor(props){
        super(props);
        this.state = {delete:false}
    }

    delete = ()=>{
        this.setState({delete:!this.state.delete});
    }
    render(){
        let child;
        if(this.state.delete)
            child = <Child/>
        return (
            <>
                {child}
                <button onClick={this.delete}>Delete</button>
            </>
        )
    }

}