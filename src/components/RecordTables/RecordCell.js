import React from "react";

class RecordCell extends React.Component {
  render(){
    return(
        <td>{this.props.value}</td>
    )
  }
}

export default RecordCell;
