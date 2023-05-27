import React from "react";

const UpdateComponent = OrginalComponent =>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {count:0};
        }

        handleIncrement = ()=>{
            this.setState({count:this.state.count+1});
        }

        render(){
            return (
                <>
                    <OrginalComponent count={this.state.count} handleIncrement={this.handleIncrement}/>
                </>
            )

        }

    }

    return NewComponent;
}

export default UpdateComponent;