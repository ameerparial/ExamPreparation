import React from "react";


export default class ConditionalRender extends React.Component{
    
    render(){
        //Method 1: Using if and else
        console.log(this.props);
        // let element;
        // if(this.props.isLoggedIn){
        //     element = <h1>Admin Page</h1>
        // }
        // else
        //     element =  <h1>Log In Page</h1>

        // return(
        //     <>
        //         {element}
        //     </>
        // )

        //Method 2: Ternary operation
        // const element2 = this.props.isLoggedIn ? <h1>Admin Page</h1> : <h1>Login Page</h1>
        // return element2;

        //Method 3: Using && Operator - If the statement is true then execute it otherwise not.
        return (
            <>
                <span>Conditional Rendering with && Operator</span>
                {this.props.isLoggedIn && <h1>Log In Page</h1>}
            </>

        )



    }

}