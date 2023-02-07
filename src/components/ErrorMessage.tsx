import { Component, ReactNode } from "react";

interface Props {
  message: string
}

export default class ErrorMessage extends Component<Props> {
  render(): ReactNode {
    let tartalom='minden OK';
    let stilus={
      color:'green',
      backgroundColor: 'lightgreen'
    };
    if (this.props.message != '') {
      tartalom = this.props.message;
    
    stilus={
      color:'red',
      backgroundColor: '#ffd1d1'
    };
  }
    return <p style={stilus}>{ tartalom }</p>
  }
}
