import React from "react";
import RecordTable from "../../RecordTables/RecordTable.js";

class UnpaidInvoices extends React.Component{
	render(){
		return(
			<RecordTable
			dataView={this.props.dataView}
			entryMethods={this.props.entryMethods}
			state={this.props.state}
			/>
		)
	}
}

export default UnpaidInvoices;
