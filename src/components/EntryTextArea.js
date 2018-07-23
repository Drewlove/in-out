import React from "react";

class EntryTextArea extends React.Component{
  handleChange = (e) => {
    const updatedEntry = {...this.props.entry,
      [e.currentTarget.name]: e.currentTarget.value}
      this.props.entryMethods.updateEntry(updatedEntry, e.currentTarget.name)
    }

  render(){
    return (
      <textarea
      className={this.props.className}
      type={this.props.type}
      name={this.props.name}
      placeholder={this.props.placeholder}
      value={this.props.value}
      onChange={this.handleChange}
      />
    )
  }
}

export default EntryTextArea;
