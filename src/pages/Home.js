import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';

class Home extends Component{
    sate={};
    render(){
        return (
            <div>
                   {/* for creating an account    */}
           <div className="first">
                <p id="a"><b>Sign Up</b></p>
                  <p id="b">Fill in the form to create an account</p>
      </div>
     <div className="signup"> <SignUp/></div> 


                {/* for logging in   */}
          <div className="second">
                  <p id="a"><b>Login</b></p>     
        </div>
     <div className="login"> <Login/></div>   
     </div>   
        );
    };
}
export default Home;