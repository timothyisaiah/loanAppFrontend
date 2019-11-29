import React from 'react';
import './RegisterClient.css';
import axios from 'axios';
import Real from './Real';
export const calculateInterest = (principle, rate, period) => {
  let interest = Number.parseFloat(principle) * Number.parseFloat(rate) * Number.parseFloat(period);
  return interest;
};

class LoanApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      principle: '',
      security: '',
      rate: '0.2',
      installments: '',
      period: '',
      returndate: '',
      interest: '',
      total: '',
      interestValue: '',
      clients:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangePrinciple = this.handleChangePrinciple.bind(this);
    this.handleChangeRate = this.handleChangeRate.bind(this);
    this.handleChangePeriod = this.handleChangePeriod.bind(this);
    this.handleChangeTotal = this.handleChangeTotal.bind(this);
    this.handleChangeInstallments = this.handleChangeInstallments.bind(this);
    // this.postdata = this.postdata.bind(this);
    this.saveloan = this.saveloan.bind(this);
  }

  handleChange(event) {
    this.setState({ interestValue: event.target.value });
  }

  handleChangePrinciple = (e) => {
    this.setState({ principle: e.target.value });
  }

  handleChangeRate = (e) => {
    this.setState({ rate: e.target.value });
  }
  handleChangePeriod = (e) => {
    this.setState({ period: e.target.value });
    // calculate interest
    let CalculatedInterest = calculateInterest(this.state.principle, this.state.rate, e.target.value);
    let Total = Number.parseFloat(this.state.principle) + Number.parseFloat(CalculatedInterest);
    let Installments = Number.parseFloat(Total) / Number.parseFloat(e.target.value);

    this.setState({ interestValue: CalculatedInterest, total: Total, installments: Installments });
  }
  handleChangeTotal = (e) => {
    this.setState({ total: e.target.value });
  }
  handleChangeDate = (e) => {
    this.setState({ returndate: e.target.value });
    // let Installments=Number.parseFloat(this.state.total)/Number.parseFloat(this.state.period);
    // this.setState({installments:Installments});
  }

  handleChangeInstallments = (e) => {
    this.setState({ installments: e.target.value });
  }

  componentDidMount(){

    axios({
      method: 'get',
      url: 'http://localhost:8080/api/fetchAllClients',
      params: {}
    })
      .then((response) => {
        this.setState({clients: response.data});
        console.log(this.state.clients);
      })
      .catch((error) => console.log(error));

  }

  saveloan = () => {
    let name = document.getElementById('name').value;
    let principle = document.getElementById('principle').value;
    let security = document.getElementById('security').value;
    // let rate = document.getElementById('rate').value;
    let installments = document.getElementById('installments').value;
    let period = document.getElementById('period').value;
    let returndate = document.getElementById('returndate').value;
    let Interest = document.getElementById('interest').value;
    let total = document.getElementById('total').value;
    let rate = document.getElementById('rate').value;
    console.log('++++++++++++++++++> ' + rate, name);

    axios.get('http://localhost:8080/fetchAllLoans')
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    axios({
      method: 'post',
      url: 'http://localhost:8080/saveLoan',
      params: {
        name: name,
        clientid: name,
        principle: principle,
        rate: rate,
        installments: installments,
        period: period,
        security: security,
        returndate: returndate,
        interest: Interest,
        total: total
      }
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="formRC">
        <Real />
        <form id="postdata" >
          <label className="fn1" >Name</label>
          <select id='name' onChange={this.handleChangeName} name='name' >
          {this.state.clients.map((client) => <option key={client.clientid} value={client.clientid}>{client.firstname} {client.lastname}</option>)}
          </select><br /><br />
          <label className="fn1" >Principle <input type="text" name="principle" id="principle" onChange={this.handleChangePrinciple} required /></label><br /><br />
          <label className="fn1">Security <input type="text" name="security" id="security" onChange={this.handleChangeSecurity} required /></label><br /><br />
          <label className="fn1">Rate</label>
          <select name="rate" id="rate" onChange={this.handleChangeRate}>
            <option value="0.2">0.2</option>
            <option value="0.4">0.4</option>
            <option value="0.6">0.6</option>
            <option value="0.8">0.8</option>
          </select><br /><br />

          {/* <label className="fn1">Username</label>
        <select name="rate" id="username">
          <option value="0.2">0.2</option>
          {this.details.map((name,id)=> {
            return <option value="{id}">{name}</option>;
          })}
          <option value="0.4">0.4</option>
          <option value="0.6">0.6</option>
          <option value="0.8">0.8</option>
        </select><br /><br /> */}
          <label className="fn1">Period in months <input type="number" onChange={this.handleChangePeriod} id="period" name="period" min="1" max="12" step="1" required /></label><br /><br />
          <label className="fn1">Return Date  <input type="date" id="returndate" onChange={this.handleChangeDate} name="returndate" required /></label><br /><br />
          <label className="fn1">Installments  <input type="text" onChange={this.handleChangeInstallments} id="installments" name="installments" value={this.state.installments} disabled /></label><br /><br />
          <label className="fn1">Interest  <input type="text" name="interest" id="interest" onChange={this.handleChangeInterest} value={this.state.interestValue} disabled /></label><br /><br />
          <label className="fn1">Total amount  <input type="text" name="total" id="total" onChange={this.handleChangeTotal} value={this.state.total} disabled /></label><br />

          <button type="submit" value="REGISTER" onClick={this.saveloan}>SAVE</button>
        </form>
      </div>
    );
  }
}
export default LoanApp;
