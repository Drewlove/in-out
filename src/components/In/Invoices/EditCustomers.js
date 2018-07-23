import React from "react";
import ConfirmationModal from "../../ConfirmationModal";
import EntryInput from "../../EntryInput";
import EntryButton from "../../EntryButton";

class EditCustomers extends React.Component{
	handleSave = ()=> {
		this.props.entryMethods.saveCustomer(this.props.entry);
		this.props.entryMethods.clearEntry(); 
	}

	handleCancel = () => {
		this.props.changeSubPage("");
	}

	render(){
		return(
			<div>
				{this.props.confirmationModal ?
					<ConfirmationModal
					entryMethods={this.props.entryMethods}
					/> : null}

				<form className="entry">
					<EntryInput
					type="text"
					name="name"
					placeholder="Customer"
					value={this.props.entry.name}
					entryMethods={this.props.entryMethods}
					entry={this.props.entry}
					/>
					<EntryInput
					type="number"
					name="terms"
					placeholder="Terms"
					value={this.props.entry.terms}
					entryMethods={this.props.entryMethods}
					entry={this.props.entry}
					/>
				</form>

				<EntryButton
				handleClick={this.handleSave}
				btnName={"Save Customer"}
				/>
				<EntryButton
				handleClick={this.handleCancel}
				btnName={"Cancel"}
				/>
			</div>
			)
	}
}

export default EditCustomers;
