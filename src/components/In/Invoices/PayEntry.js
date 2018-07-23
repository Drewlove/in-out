import React from "react";

class PayEntry extends React.Component{
  paymentAmountRef = React.createRef();
  paymentReferenceRef = React.createRef();

  confirmPayment = () => {
    const paymentAmount = parseFloat(this.paymentAmountRef.value.value);
    const paymentReference = this.paymentReferenceRef.value.value;
    this.props.entryMethods.payInvoice(this.props.entry, paymentAmount, paymentReference);
    this.props.changeSubPage("");
  }

  render(){
    return(
      <div>
        <h1>{this.props.entry.name}</h1>
        <h1>{this.props.entry.amount}</h1>
        <h1>{this.props.entry.date}</h1>
        <h1>{this.props.entry.terms}</h1>
        <h1>{this.props.entry.dueDate}</h1>
        <input ref={this.paymentReferenceRef} type="text" placeholder="Payment Reference"/>
        <input ref={this.paymentAmountRef} type="number" placeholder="Payment Amount" onChange={this.handleChange}/>
        <button onClick={this.confirmPayment}>Confirm Payment</button>
      </div>
    )
  }
}

export default PayEntry;
