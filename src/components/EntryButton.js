import React from "react";

class EntryButton extends React.Component{
  render(){
    return(
      <button onClick={this.props.handleClick}>{this.props.btnName}</button>      
    )
  }
}

export default EntryButton;
