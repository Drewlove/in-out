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
				<h1 className="header">
				<span className="header-in">In</span> 
				& 
				<span className="header-out"span>Out</span>
				</h1>
			</div>
			)
	}
}

export default Header; 