import React from "react";
import Greeting from './Greetings'


export default class CRender extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLogIn:true};
        this.handleLogInClick = this.handleLogInClick.bind(this);
        this.handleLogOutClick = this.handleLogOutClick.bind(this);
    }

    handleLogOutClick(){
        this.setState({isLogIn:false})
    }
    handleLogInClick(){
        this.setState({isLogIn:true})
    }

    render(){
        const logged = this.state.isLogIn;
        const element = logged ? <button onClick={this.handleLogOutClick}>Log Out</button> : <button onClick={this.handleLogInClick}>Log In</button>
        return (
            <>
                {element}
                <Greeting isLoggedIn={this.state.isLogIn} name={'Ameer'}/>
            </>

        )
    }
}