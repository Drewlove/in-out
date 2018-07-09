import React from "react";
import InvoicesHome from "./InvoicesHome";
import Customers from "./Customers"
import EntryInvoice from "./EntryInvoice"
import PaidInvoices from "./PaidInvoices"
import UnpaidInvoices from "./UnpaidInvoices"

import ChangePageBtn from "../../ChangePageBtn";

class ContainerInvoices extends React.Component{
	render(){
		return(
			<div>
				{this.props.state.page === "invoices" && this.props.state.subPage==="" ?
				<InvoicesHome
				recordType={this.props.recordType}
				dataView={this.props.state.dataView}
				page={this.props.state.page}
				changeSubPage={this.props.changeSubPage}
				filterData={this.props.filterData}
				/>
				: null}

				{this.props.state.subPage === "customers" ?
				<Customers
				dataView={this.props.state.dataView}
				entryMethods={this.props.entryMethods.selectEntry}
				/>
				: null}

				{this.props.state.subPage === "editEntry" ?
				<EntryInvoice
				entryMethods={this.props.entryMethods}
				dataView={this.props.state.dataView}
				entry={this.props.state.entry}
				confirmationModal={this.props.state.confirmationModal}
				changeSubPage={this.props.changeSubPage}
				/>
				: null}

				{this.props.state.subPage === "paid" ?
				<PaidInvoices
				dataView={this.props.state.dataView}
				entryMethods={this.props.entryMethods}
				/>
				: null}

				{this.props.state.subPage === "unpaid" ?
				<UnpaidInvoices
				dataView={this.props.state.dataView}
				entryMethods={this.props.entryMethods}
				/>
				: null}
		</div>
		)
	}
}

export default ContainerInvoices;
