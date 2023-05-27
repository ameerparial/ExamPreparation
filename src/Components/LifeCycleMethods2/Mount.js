import React from "react";
import Child from "../LifeCycleMethods/Child";
import Insert from "./InsertedComp";


export default class Mounting extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {state:false};
        this.createComp = this.createComp.bind(this);

    }

    createComp(){
        this.setState({state:!this.state.state});
    }
    render() {
        let element ;
        if(this.state.state)
            element = <Insert/>
        return (
            <>
                <button onClick={this.createComp}>Create</button>
                {element}
            </>
             
        );
    }
}