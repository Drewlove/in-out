import React from 'react';

class RecordHeader extends React.Component{
	render(){
		return (
			<thead>
				<tr className="record-table-head-row">
					<td>Name</td>
					<td>Date</td>
					<td>Terms</td>
					<td>Due</td>
					<td>Amount</td>
					<td>Status</td>					
				</tr>
			</thead>
			)
	}
}

export default RecordHeader;
