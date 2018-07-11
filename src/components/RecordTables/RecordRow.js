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
			{this.props.valuesArray.map(key =>
				<RecordCell
					value={this.props.entry[key]}
					key={key}
				/>
			)
		}
			</tr>
			)
	}
}
export default RecordRow;

//depending upon subPage, render relevant ContainerBills
//given this subPage, render these cells
//array of cells that you want to be rendered, depending upon subPage
