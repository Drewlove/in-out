import React from "react";
import RecordRow from "./RecordRow";
import RecordHeader from "./RecordHeader"

class RecordTable extends React.Component {

	render(){
			const dataView = this.props.dataView;
			const valuesObj = {
				customerArray: ["name", "terms"],
				billAndInvoiceArray: ["name", "date", "amount", "terms", "dueDate", "status", "paymentReference"]
			};
			let valuesArray = [];
			if(this.props.subPage !== "customers"){
				valuesArray = valuesObj.billAndInvoiceArray
			} else if(this.props.subPage==="customers"){
				valuesArray = valuesObj.customerArray
			};

		return (
			<table className="record-table">
			<RecordHeader
			valuesArray={valuesArray}
			/>
				<tbody>
					{Object.keys(this.props.dataView).map(key =>
						<RecordRow
						key={key}
						entry={this.props.dataView[key]}
						valuesArray={valuesArray}
						selectEntry={this.props.entryMethods.selectEntry}
						/>
						)}
				</tbody>
			 </table>
			)
	}
}

export default RecordTable;
