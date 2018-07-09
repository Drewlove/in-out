import React from "react"; 
import RecordTable from "../../RecordTables/RecordTable.js";

class UnpaidBills extends React.Component{
	render(){
		return (
			<RecordTable 
			data={this.props.data}
			template={this.props.template}
			/>
			)
	}
}

export default UnpaidBills; 