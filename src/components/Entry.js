import React from "react";
import ConfirmationModal from "./ConfirmationModal";

class Entry extends React.Component{
	handleChange = (e) => {
		const updatedEntry = {...this.props.entry,
			[e.currentTarget.name]: e.currentTarget.value}
			this.props.entryMethods.updateEntry(updatedEntry, e.currentTarget.name)
		}

		handleSave = ()=> {
			this.props.entryMethods.saveEntry(this.props.entry);
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

	render(){
		return(
			<div>
				{this.props.confirmationModal ?
					<ConfirmationModal
					entryMethods={this.props.entryMethods}
					/> : null}

				<form className="entry">
					<input type="text" name="name" placeholder="Customer" value={this.props.entry.name} onChange={this.handleChange}/>
					<input type="number" name="amount" placeholder="Amount" value={this.props.entry.amount} onChange={this.handleChange}/>
					<input type="date" name="date" placeholder="Date" value={this.props.entry.date} onChange={this.handleChange}/>
					<input type="number" name="terms" placeholder="Terms" value={this.props.entry.terms} onChange={this.handleChange}/>
					<input type="date" name="dueDate" placeholder="Due Date" value={this.props.entry.dueDate} onChange={this.handleChange}/>
				</form>

				<button onClick={this.handleSave}>Save</button>
				<button onClick={this.handleDelete}>Delete</button>
				<button onClick={this.handleCancel}>Cancel</button>
			</div>
			)
	}
}

export default Entry;
