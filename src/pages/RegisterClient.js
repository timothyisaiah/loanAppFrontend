import React from 'react';
import './RegisterClient.css';
import './Post';
// import ApiService from "../../service/ApiService";  
import axios from 'axios';
import Real from './Real';
class RegisterClient extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      occupation: '',
      telephone: '',
      security: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }




  register = ()=>{
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let address = document.getElementById('address').value;
    let occupation = document.getElementById('occupation').value;
    let telephone = document.getElementById('telephone').value;
    let security = "security";
 console.log(firstname,lastname,address,occupation,telephone,security);
    // debugger
    axios.get('http://localhost:8080/api/fetchAllClients')
    .then((response)=> console.log(response))
    .catch((error)=>console.log(error));
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/saveclient',
      params: {
        firstname: firstname,
        lastname: lastname,
        address: address,
        occupation: occupation,
        telephone: telephone,
        security: security
      }
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }



  componentDidMount() {

    axios.get('http://localhost:8080/api/fetchAllClients')
    .then((response)=> console.log(response))
    .catch((error)=>console.log(error));

  }
  //=============================
  
  render() {

    return (
      <div className="formRC">
        <Real/>
        <form id="postdata">
          <label className="fn">First Name  <input type="text" name="firstname" id="firstname" onChange={this.handleChange} required /></label><br /><br /><br />
          <label className="fn">Last Name  <input type="text" name="lastname" id="lastname" onChange={this.handleChange} required /></label><br /><br /><br />
          <label className="fn">Address  <input type="text" name="address" id="address" onChange={this.handleChange} required /></label><br /><br /><br />
          <label className="fn">Occupation  <input type="text" name="occupation" id="occupation" onChange={this.handleChange} required /></label><br /><br /><br />
          <label className="fn">Telephone  <input type="tel" name="telephone" id="telephone" onChange={this.handleChange} required /></label><br />
          <button type="submit" value="REGISTER" onClick={this.register}>REGISTER</button>
        </form>
      </div>


    );
  }
}

export default RegisterClient;
