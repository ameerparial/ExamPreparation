

import React, { Component } from 'react'
import { StdContext } from './StudentContext';

class CClass extends Component {
    constructor(props){
        super(props);
        let value = this.context;
        console.log('Contructor'+value);
    }

  render() {
    let value = this.context;
    console.log(value);
    return (
      <h1>AClass</h1>
    )
  }
}

CClass.contextType = StdContext;

export default CClass;
