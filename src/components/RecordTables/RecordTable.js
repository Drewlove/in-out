import React from "react";
import RecordRow from "./RecordRow";
import RecordHeader from "./RecordHeader"

class RecordTable extends React.Component {

	render(){
			const dataView = this.props.dataView;
		return (
			<table className="record-table">
			<RecordHeader />
				<tbody>
					{Object.keys(this.props.dataView).map(key =>
						<RecordRow
						key={key}
						entry={dataView[key]}
						selectEntry={this.props.entryMethods.selectEntry}
						/>
						)}
				</tbody>
			</table>
			)
	}
}

export default RecordTable;
