import React from 'react';
import './login.css';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
                      designation: '',
                      password: '',
                      redirect: false
                  };

                
                }
       
       performSubmit=()=>{
         if(this.state.designation === 'Accountant' && this.state.password === 'timothy'){
           console.log('Success');
           this.setState({redirect: true})
         } else{
           console.log("login failed");
         }
       } ;

       handleChangeDesignation =(event)=>{
         this.setState({designation:event.target.value});
       };

       handleChangePassword =(event)=>{
        this.setState({password:event.target.value});
      };
    
       
  
      
render (){
 if(this.state.redirect){
   return <Redirect to ="/Real"/>
 }
return(
    <form id="postdata" onSubmit={e=> e.preventDefault()} >
    <label id="lab1"> Designation<br/>
    <input type="text" name='designation' onChange={this.handleChangeDesignation} id="designation" required/><br/><br/><br/>
  </label>

  <label id="lab1"> Password<br/>
    <input type="password" name='password' onChange={this.handleChangePassword} id="password" required/><br/>
  </label><br/><br/>
  <input type="submit" value="Login" onClick={this.performSubmit} id="c"/>
</form>
);
}}
export default Login;