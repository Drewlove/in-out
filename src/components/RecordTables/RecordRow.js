import React from "react";
import RecordCell from "./RecordCell";
import {formatPrice} from "../Helpers";

class RecordRow extends React.Component {
	handleClick = () => {
		this.props.selectEntry(this.props.entry)
	}

	render(){
		return (
			<tr onClick={this.handleClick} className="record-table-row">
				{Object.keys(this.props.entry).map(key =>
					<RecordCell
						key={key}
						value={this.props.entry[key]}
					/>
				)}
			</tr>
			)
	}
}

export default RecordRow;
