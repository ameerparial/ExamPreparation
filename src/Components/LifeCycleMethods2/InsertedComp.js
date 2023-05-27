import React from "react";

export default class Insert extends React.Component{

    componentDidMount(){
        alert("I am going to insert in the DOM");
    }


    render(){
        return(
            <>
                <h1>Hello From Insert</h1>
            </>
        )

    }
    

}