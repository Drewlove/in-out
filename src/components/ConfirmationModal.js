import React from "react";

class ConfirmationModal extends React.Component{
	handleYes = () => {
		this.props.entryMethods.deleteEntryYes()
	}

	handleNo = () => {
		this.props.entryMethods.deleteEntryNo()
	}

	render(){
		return (
			<div className="modal-container">
				<div className="modal-content">Are you sure you want to delete?
					<button onClick={this.handleYes}>Yes</button>
					<button onClick={this.handleNo}>No</button>
				</div>
			</div>
			)
	}
}

export default ConfirmationModal;
