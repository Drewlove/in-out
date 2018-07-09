import React from "react";
import Entry from "../../Entry"

class EntryInvoice extends React.Component {
	render(){
		return (
			<Entry
				entry={this.props.entry}
				entryMethods={this.props.entryMethods}
				changeSubPage={this.props.changeSubPage}
				confirmationModal={this.props.confirmationModal}
			/>
		)
	}
}

export default EntryInvoice;
