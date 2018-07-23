import React from "react";
import ConfirmationModal from "./ConfirmationModal";
import EntryInput from "./EntryInput";
import EntryButtons from "./EntryButtons";

class EntryCustomers extends React.Component{

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

				<EntryButtons
					entryMethods={this.props.entryMethods}
					changeSubPage={this.props.changeSubPage}
					entry={this.props.entry}
				/>

			</div>
			)
	}
}

export default EntryCustomers;


//confirmationModal COMP
//form
	//EntryInput COMP (which ever ones you want for that entryType)
//form
//entryButton COMP

//create entryButton COMP
//3 buttons
//save, cancel delete methods
