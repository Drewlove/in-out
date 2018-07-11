import React from "react";
import RecordTable from "../../RecordTables/RecordTable"

class PaidInvoices extends React.Component{
	render(){
		return(
			<RecordTable
			dataView={this.props.dataView}
			entryMethods={this.props.entryMethods}
			subPage={this.props.subPage}
			/>
			)
	}
}

export default PaidInvoices;
