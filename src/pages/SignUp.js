import React  from 'react';
import './signup.css';


class SignUp extends React.Component {

       
     
    constructor(props) {
      super(props);
      
      this.state = {firstname: '',
                    lastname: '',
                    email: '',
                    telephone: '',
                    designation: '',
                    password: ''
                };
  
      this.handleChange = this.handleChange.bind(this);
      this.postsignup = this.postsignup.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    postsignup(event) {
      event.preventdefault()
      document.getElementById('postdata').addEventListener('submit');
      
  
    let firstname = document.getElementById('firstname1').value;
    let lastname = document.getElementById('lastname1').value;
    let email = document.getElementById('email1').value;
    let telephone = document.getElementById('telephone').value;
    let designation = document.getElementById('designation1').value;
    let password = document.getElementById('password1').value;
    
    
  
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers : new Headers(),
        body:JSON.stringify({firstname: firstname,
                            lastname: lastname,
                            email: email,
                            telephone: telephone,
                            designation: designation,
                            password: password,
                            })
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
  }
  
    render() {
      return (
        
         <div className="formLA">
        <form id="postdata"  >
          <label id="lab" > First Name:
            <input type="text" name='firstname'  onChange={this.handleChange} id="firstname1" required /><br/><br/>
          </label>

          <label id="lab"> Last Name:
            <input type="text" name='lastname'  onChange={this.handleChange} id="lastname1" required/><br/><br/>
          </label>

          <label id="lab"> E-mail:<br/>
            <input type="email" name='email'  onChange={this.handleChange} id="email1"/><br/><br/>
          </label>

          <label id="lab"> Telephone:<br/>
            <input type="tel" name='telephone'  onChange={this.handleChange} required id="telephone"/><br/><br/>
          </label>

          <label id="lab"> Designation:<br/>
            <input type="text" name='designation'  onChange={this.handleChange} id="designation1" required /><br/>
          </label>

          <label id="lab"> Password:<br/>
            <input type="password" name='password'  onChange={this.handleChange} required id="password1"/><br/>
          </label><br/><br/>
          
          <input type="submit" value="Sign Up" id="register"/>
        </form>
        </div>
      );
    }
}

  

    export default SignUp;

