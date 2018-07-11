import React from "react";
import RecordRow from "./RecordRow";
import RecordHeader from "./RecordHeader"

class RecordTable extends React.Component {

	render(){
			const dataView = this.props.dataView;
			const valuesObj = {
				customerArray: ["name", "terms"],
				billAndInvoiceArray: ["name", "date", "amount", "terms", "status"]
			};


		return (
			<table className="record-table">

			<RecordHeader
			valuesObj={valuesObj}
			/>
				<tbody>
					{Object.keys(this.props.dataView).map(key =>
						<RecordRow
						key={key}
						entry={this.props.dataView[key]}
						valuesObj={valuesObj.customerArray}
						selectEntry={this.props.entryMethods.selectEntry}
						/>
						)}
				</tbody>
			 </table>
			)
	}
}

export default RecordTable;
