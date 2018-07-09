import React from 'react'

class ChangeFilterTypeBtn extends React.Component{
	handleClick= ()=> {
		console.log(this.props.recordType)
		this.props.changeSubPage(this.props.recordType); 
		if(this.props.recordType !=="editEntry"){
			this.props.filterData(this.props.recordType)
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

export default ChangeFilterTypeBtn