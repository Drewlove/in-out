import React from "react";
import ConfirmationModal from "../../ConfirmationModal";
import EntryInput from "../../EntryInput";
import EntryButton from "../../EntryButton";
import EntryTextArea from "../../EntryTextArea"
//import EntryButtons from "../../EntryButtons";


class EditInvoice extends React.Component{
	handleSave = ()=> {
    this.props.entryMethods.saveEntry(this.props.entry, this.props.subPage);
    this.props.entryMethods.clearEntry();
    this.props.changeSubPage("");
  }

  handleCancel = () => {
    this.props.entryMethods.clearEntry();
    this.props.changeSubPage("");
  }

  handleDelete = () => {
    this.props.entryMethods.displayConfirmationModal();
  }

	handlePay = () => {
		this.props.changeSubPage("payEntry");
	}

	render(){
		return(
			<div>
				{this.props.confirmationModal ?
					<ConfirmationModal
					entryMethods={this.props.entryMethods}
					/> : null}

				<form className="entry">
				<div className="edit-entry-name-amount">
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
						name="amount"
						placeholder="Amount"
						value={this.props.entry.amount}
						entryMethods={this.props.entryMethods}
						entry={this.props.entry}
						/>
					</div>

					<EntryInput
					type="date"
					name="date"
					placeholder="Date"
					value={this.props.entry.date}
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
					<EntryInput
					type="date"
					name="dueDate"
					placeholder="Due Date"
					value={this.props.entry.dueDate}
					entryMethods={this.props.entryMethods}
					entry={this.props.entry}
					/>

					<EntryInput
					type="text"
					name="paymentReference"
					placeholder="Payment Reference"
					value={this.props.entry.paymentReference}
					entryMethods={this.props.entryMethods}
					entry={this.props.entry}
					/>

					<EntryTextArea
					name="notes"
					placeholder="Notes..."
					value={this.props.entry.notes}
					entryMethods={this.props.entryMethods}
					entry={this.props.entry}
					/>
				</form>

				<EntryButton
				handleClick={this.handleSave}
				btnName={"Save"}
				/>
				<EntryButton
				handleClick={this.handleDelete}
				btnName={"Delete"}
				/>
				<EntryButton
				handleClick={this.handleCancel}
				btnName={"Cancel"}
				/>

				{this.props.entry.status==="unpaid" ?
					<EntryButton
					handleClick={this.handlePay}
					btnName={"Pay"}
					/> : null
				}

			</div>
			)
	}
}

export default EditInvoice;


//confirmationModal COMP
//form
	//EntryInput COMP (which ever ones you want for that entryType)
//form
//entryButton COMP

//create entryButton COMP
//3 buttons
//save, cancel delete methods
