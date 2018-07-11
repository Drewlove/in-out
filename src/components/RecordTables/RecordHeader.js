import React from 'react';
import RecordCell from "./RecordCell";

class RecordHeader extends React.Component{
	render(){
		return (
			<thead>
				<tr className="record-table-head-row">
				{this.props.valuesArray.map(key =>
					<RecordCell
					value={`${key.charAt(0).toUpperCase()}${key.slice(1)}`}
					key={key}/>
				)}
				</tr>
			</thead>
			)
	}
}

export default RecordHeader;
