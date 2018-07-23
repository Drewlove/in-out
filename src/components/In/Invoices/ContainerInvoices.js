import React from "react";
import InvoicesHome from "./InvoicesHome";
import Customers from "./Customers";
import PaidInvoices from "./PaidInvoices";
import UnpaidInvoices from "./UnpaidInvoices";
import CustomerInvoiceList from "./CustomerInvoiceList";
import EditInvoice from "./EditInvoice";
import EditCustomers from "./EditCustomers";
import PayEntry from "./PayEntry";

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
				filterByEntryType={this.props.filterByEntryType}
				/>
				: null}

				{this.props.state.subPage === "customers" ?
				<Customers
				dataView={this.props.state.dataView}
				entryMethods={this.props.entryMethods}
				subPage={this.props.state.subPage}
				/>
				: null}

				{this.props.state.subPage === "paid" ?
				<PaidInvoices
				dataView={this.props.state.dataView}
				entryMethods={this.props.entryMethods}
				subPage={this.props.state.subPage}
				/>
				: null}

				{this.props.state.subPage === "unpaid" ?
				<UnpaidInvoices
				dataView={this.props.state.dataView}
				entryMethods={this.props.entryMethods}
				subPage={this.props.state.subPage}
				/>
				: null}

				{this.props.state.subPage === "editEntry" ?
				<EditInvoice
				entryMethods={this.props.entryMethods}
				dataView={this.props.state.dataView}
				entry={this.props.state.entry}
				confirmationModal={this.props.state.confirmationModal}
				changeSubPage={this.props.changeSubPage}
				/>
				: null}

				{this.props.state.subPage === "customerInvoiceList" ?
				<CustomerInvoiceList
				dataView={this.props.state.dataView}
				entryMethods={this.props.entryMethods}
				subPage={this.props.state.subPage}
				/>
				: null}

				{this.props.state.subPage === "editCustomers" ?
				<EditCustomers
				entryMethods={this.props.entryMethods}
				dataView={this.props.state.dataView}
				entry={this.props.state.entry}
				confirmationModal={this.props.state.confirmationModal}
				changeSubPage={this.props.changeSubPage}
				subPage={this.props.state.subPage}
				/>
				: null}

				{this.props.state.subPage === "payEntry" ?
				<PayEntry
				dataView={this.props.state.dataView}
				entry={this.props.state.entry}
				entryMethods={this.props.entryMethods}
				subPage={this.props.state.subPage}
				changeSubPage={this.props.changeSubPage}
				/>
				: null}

		</div>
		)
	}
}

export default ContainerInvoices;
