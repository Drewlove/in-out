import React from "react"; 
import ChangeFilterTypeBtn from "../../ChangeFilterTypeBtn"

class BillsHome extends React.Component{
	render(){
		return (
			<div className="menu-item-container">
				<div className="menu-item-out">
					<ChangeFilterTypeBtn changeRecordType={this.props.changeRecordType} name="New Bill"/>
					<ChangeFilterTypeBtn changeRecordType={this.props.changeRecordType} name="Vendors"/>
				</div>
				<div className="menu-item-out">
					<ChangeFilterTypeBtn changeRecordType={this.props.changeRecordType} name="Paid Bills"/>
					<ChangeFilterTypeBtn changeRecordType={this.props.changeRecordType} name="Unpaid Bills"/>
				</div>
			</div>
			)
	}
}

export default BillsHome; 


