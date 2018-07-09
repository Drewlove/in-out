import React from "react";
import RecordRow from "./RecordRow";
import RecordHeader from "./RecordHeader"

class RecordTable extends React.Component {

	render(){
			const dataView = this.props.dataView;
			const testArray = ["name", "date", "terms"];
		return (
			<table className="record-table">
			<RecordHeader />
				<tbody>
					{Object.keys(this.props.dataView).map(key =>
						<RecordRow
						key={key}
						entry={Object.keys(dataView[key]).filter(objProp => this.testArr.indexOf(objProp) !== -1)}
						selectEntry={this.props.entryMethods.selectEntry}
						state={this.props.state}
						/>
						)}
				</tbody>
			 </table>
			)
	}
}

export default RecordTable;
