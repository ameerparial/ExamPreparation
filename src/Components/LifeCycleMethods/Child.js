import React from "react"

export default class Child extends React.Component{

    componentWillUnmount(){
        alert('I am about to be removed!');
    }
    
    render(){
        return(
            <>
                <h1>Hello World</h1>
            </>
        )
    }

}