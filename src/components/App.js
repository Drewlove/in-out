/*
Friday, 7/6: 1.25
Sun 7/8: 1.5

**Next:
** Invoices -> customers
refactor filterData and listCustomers
better way to refactor?

See this codepen as a way to dedpulicate the array of store names
https://codepen.io/thisisdrewlove/pen/GGVzBb?editors=0012



** Look at RecordRow, generate cells based upon strings in
recordTableType
Should work for unpaid invoices, paid invoices, and customers

*be able to recod invoices as Paid
*when invoices are good, then move similar code to Bills



*/
import React from 'react';
import "../css/style.css";
import Header from "./Header";
import PageHome from "./Pages/PageHome";
import ContainerInvoices from "./In/Invoices/ContainerInvoices";
import ContainerBills from "./Out/Bills/ContainerBills";
import storedData from "./Data/storedData";
import Entry from "./Entry";


class App extends React.Component {
	state={
		page: "home",
		subPage: "",
		data: {},
		dataView: {},
		entry: {
			id: "",
			name: "",
			amount: "",
			date: "",
			terms: "",
			dueDate: ""
		},
		confirmationModal: false
	}

	componentDidMount = () => {
		const data = {...this.state.data};
		this.setState({data: storedData})
	}

	blankEntry = {
			id: "",
			name: "",
			amount: "",
			date: "",
			terms: "",
			dueDate: ""
	}

	changePage = (name) => {
		const page = {...this.state.page};
		this.setState({page: name})
		this.clearDataView();
	}

	changeSubPage = (subPageType) => {
		const subPage = {...this.state.subPage};
		this.setState({subPage: subPageType})
		this.clearDataView();
	}

	filterData = (subPageType) => {
		const page = this.state.page;
		const data = this.state.data;

		let recordTypeObj = {};
		//find all entries that match the subPageType and set to recordTypeObj
		Object.keys(data).map(key => {
			let entry = data[key];
			if(entry.recordType === page){
				recordTypeObj[key] = entry;
			}
		})
		if(subPageType === "unpaid" || subPageType === "paid"){
			this.filterDataByStatus(recordTypeObj, subPageType);
		} else if (subPageType === "customers"){
			this.filterDataByCustomers(recordTypeObj);
		}
	}

	filterDataByStatus = (recordTypeObj, subPageType) => {
		const page = this.state.page;
		const dataView = {...this.state.dataView};
		const data = this.state.data;

		Object.keys(recordTypeObj).map(key => {
			const entry = recordTypeObj[key];
			if(entry.status === subPageType){
				dataView[key] = entry;
			}
		})
		this.setState({dataView})
	}

	filterDataByCustomers = (recordTypeObj) => {
		const page = this.state.page;
		const dataView = {...this.state.dataView};
		const data = this.state.data;

		let customerArr = [];

		Object.keys(recordTypeObj).map(key => {
			const storeName = recordTypeObj[key].name;
			const entry = recordTypeObj[key]
			if(customerArr.indexOf(storeName) === -1){
				customerArr.push(storeName);
				dataView[key] = entry;
			}
		});
		this.setState({dataView})
	}

	getDueDateString = (entryObj) => {
		if(entryObj.date !== "" && entryObj.terms > 0){
			let theDate = new Date(entryObj.date);
			let dueDateObj = new Date(theDate.setUTCDate(theDate.getUTCDate()+entryObj.terms));
			let dueDateString = dueDateObj.toISOString().substring(0,10);
			return dueDateString;
		} else {
			return
		}
	}
	clearDataView = () => {
		const dataView = this.state.dataView
		this.setState({dataView: {}})
	}

	entryMethods = {
		selectEntry: (updatedEntry) => {
			const entry = this.state.entry;
			this.setState({entry: updatedEntry});
			this.changeSubPage("editEntry")
		},

		clearEntry: () => {
			this.setState({entry: this.blankEntry});
		},

		updateEntry: (updatedEntry, currentTargetName) => {
			if(currentTargetName === "dueDate"){
				const entry = {...this.state.entry};
				this.setState({entry: updatedEntry});
			}	else if(updatedEntry.date !== "" && updatedEntry.terms !== ""){
				updatedEntry.terms = parseInt(updatedEntry.terms);
				let theDate = new Date(updatedEntry.date);
				let dueDateObj = new Date(theDate.setUTCDate(theDate.getUTCDate()+updatedEntry.terms));
				let dueDateString = dueDateObj.toISOString().substring(0,10);
				updatedEntry.dueDate = dueDateString;
				const entry = {...this.state.entry};
				this.setState({entry: updatedEntry})
			} else {
				const entry = {...this.state.entry};
				this.setState({entry: updatedEntry})
			}
		},

		saveEntry: (entry) => {
			const data = {...this.state.data};
			if(!entry.id){
				entry.id = Date.now();
				entry.recordType = this.state.page;
				entry.status = "unpaid";
				data[entry.id] = entry;
			} else {
				data[entry.id] = entry;
			}
			this.setState({data});
		},

		displayConfirmationModal: () => {
			const confirmationModal = this.state.confirmationModal;
			this.setState({confirmationModal: true})
		},

		deleteEntryYes: () => {
			const entry = this.state.entry;
			const confirmationModal = this.state.confirmationModal;
			this.entryMethods.deleteEntry(entry);
			this.entryMethods.clearEntry();
			this.changeSubPage("");
			this.setState({confirmationModal: false})
		},

		deleteEntryNo: () => {
			const confirmationModal = this.state.confirmationModal;
			this.setState({confirmationModal: false})
		},

		deleteEntry: (entry) => {
			const data = this.state.data;
			delete data[entry.id];
			this.setState({data});
		},
	}

	render() {
		return (
			<div>
			<Header
			changePage={this.changePage}
			changeSubPage={this.changeSubPage}
			clearDataView={this.clearDataView}
			/>

			{this.state.page === "home" ?
			<PageHome
			changePage={this.changePage}
			loadData={this.loadData}
			data={this.props.data}
			/>: null}

			{this.state.page === "invoices" ?
			<ContainerInvoices
			state={this.state}
			changePage={this.changePage}
			changeSubPage={this.changeSubPage}
			filterData={this.filterData}
			entryMethods={this.entryMethods}
			/> : null}

			{this.state.page==="bills" ?
			<ContainerBills
			changePage={this.changePage}
			page={this.state.page}
			recordType={this.state.recordType}
			data={this.state.data}
			/>: null}

			</div>
		)
	}
}

export default App
