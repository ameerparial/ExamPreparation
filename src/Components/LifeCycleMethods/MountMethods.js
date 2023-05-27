import React from "react";

export default class Mount extends React.Component{
    constructor(props){
        super(props);
        this.state = {favMovie:'3 Idiots'}
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log(props);
    //     console.log(state);
    //     return {favMovie:props.movie}
    // }

    componentDidMount(){
        console.log('Called');
        setTimeout(()=>{
            this.setState({favMovie:'Dil se'});
        }, 3000);
    }

    componentDidUpdate(){
        console.log('update');
    }

    

    render(){
        return(
            <>
                <h1>Favorite Movie: {this.state.favMovie}</h1>
            </>
        )
    }

}