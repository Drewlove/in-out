import React from "react";
import RecordTable from "../../RecordTables/RecordTable"

class PaidInvoices extends React.Component{
	render(){
		return(
			<RecordTable
			dataView={this.props.dataView}
			page={this.props.page}
			recordType={this.props.recordType}
			entryMethods={this.props.entryMethods}
			/>
			)
	}
}

export default PaidInvoices;
