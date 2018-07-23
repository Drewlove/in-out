import React from 'react';

class Header extends React.Component{
	handleClick = () => {
		this.props.changePage("home");
		this.props.changeSubPage("");
		this.props.clearDataView();
	}

	render(){
		return(
			<div onClick={this.handleClick}>
				<h1 className="header">IN & OUT</h1>
			</div>
			)
	}
}

export default Header;
