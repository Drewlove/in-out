import React from "react"
import ChangePageBtn from "../ChangePageBtn"

class HomePage extends React.Component{
	render(){
		return (
			<div className="menu-item-container">

				<div>
					<ChangePageBtn changePage={this.props.changePage} loadData={this.props.loadData} name="invoices"/>
					<ChangePageBtn changePage={this.props.changePage} loadData={this.props.loadData} name="sales"/>
				</div>

				<div>
					<ChangePageBtn changePage={this.props.changePage} loadData={this.props.loadData} name="bills"/>
					<ChangePageBtn changePage={this.props.changePage} loadData={this.props.loadData} name="payroll"/>
				</div>

				<div>
					<ChangePageBtn changePage={this.props.changePage} loadData={this.props.loadData} name="reports"/>
					<ChangePageBtn changePage={this.props.changePage} loadData={this.props.loadData} name="chart of accounts"/>
				</div>
			</div>
			)
	}
}

export default HomePage;
