import React from "react"; 
import BillsHome from "./BillsHome"; 
import Vendors from "./Vendors"
import NewBill from "./NewBill"
import PaidBills from "./PaidBills"
import UnpaidBills from "./UnpaidBills"

import ChangePageBtn from "../../ChangePageBtn";

class ContainerInvoices extends React.Component{
	render(){
		return(
			<div>
				{this.props.page === "Bills" && this.props.RecordType==="" ?
				<BillsHome changeRecordType={this.props.changeRecordType}/>
				: null}

				{this.props.RecordType === "Vendors" ?
				<Vendors changeRecordType={this.props.changeRecordType}/>
				: null}

				{this.props.RecordType === "New Bill" ?
				<NewBill changeRecordType={this.props.changeRecordType}/>
				: null}

				{this.props.RecordType === "Paid Bills" ?
				<PaidBills changeRecordType={this.props.changeRecordType}/>
				: null}

				{this.props.RecordType === "Unpaid Bills" ?
				<UnpaidBills changeRecordType={this.props.changeRecordType}/>
				: null}
		</div>
		)
	}
}

export default ContainerInvoices; 


