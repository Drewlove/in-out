import React from 'react'

class ChangePageBtn extends React.Component{
	handleClick= ()=> {
		let name = this.props.name;
		this.props.changePage(name.toString());
	}

	render(){
		return(
				<div onClick={this.handleClick} className="menu-item">
				{`${this.props.name.charAt(0).toUpperCase()}${this.props.name.slice(1)}`}
				</div>
			)
	}
}

export default ChangePageBtn
