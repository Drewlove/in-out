import React from 'react'

class ChangeSubPageBtn extends React.Component{
	handleClick= ()=> {
		this.props.changeSubPage(this.props.recordType);
		if(this.props.recordType !=="editEntry"){
			this.props.filterByEntryType(this.props.recordType)
		}
	}

	render(){
		return(
				<div onClick={this.handleClick} className="menu-item">
				{this.props.name}
				</div>
			)
	}
}

export default ChangeSubPageBtn
