import React from "react";
import ChangeSubPageBtn from "../../ChangeSubPageBtn";
import ChangePageBtn from "../../ChangePageBtn";

class InvoicesHome extends React.Component{
	render(){
		return (
			<div className="menu-item-container">
				<div className="menu-item-in">
					<ChangeSubPageBtn
					name="New Invoice"
					data={this.props.data}
					recordType="editEntry"
					changeSubPage={this.props.changeSubPage}
					page={this.props.page}
					filterType={this.props.filterType}
					entryMethods={this.props.entryMethods}
					/>

					<ChangeSubPageBtn
					name="Customers"
					data={this.props.data}
					recordType="customers"
					changeSubPage={this.props.changeSubPage}
					page={this.props.page}
					filterData={this.props.filterData}
					filterType={this.props.filterType}
					/>
				</div>

				<div className="menu-item-in">
					<ChangeSubPageBtn
					name="Paid Invoices"
					data={this.props.data}
					recordType="paid"
					changeSubPage={this.props.changeSubPage}
					page={this.props.page}
					filterData={this.props.filterData}
					filterType={this.props.filterType}
					/>

					<ChangeSubPageBtn
					name="Unpaid Invoices"
					data={this.props.data}
					recordType="unpaid"
					changeSubPage={this.props.changeSubPage}
					page={this.props.page}
					filterData={this.props.filterData}
					filterType={this.props.filterType}
					/>
				</div>
		</div>
			)
	}
}

export default InvoicesHome;
