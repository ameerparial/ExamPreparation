import React from "react"


export default class Update extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
        this.handleInc = this.handleInc.bind(this);
    }

    handleInc(){
        this.setState({count:this.state.count+1});
    }

    componentDidUpdate(){
        alert('udpated');
    }

    render(){
        return(
            <>
                <button onClick={this.handleInc}>Click {this.state.count} times</button>
            </>
        )
    }
}