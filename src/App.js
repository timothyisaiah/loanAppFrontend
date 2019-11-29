import React from 'react';
import './App.css';
import RegisterClient from './pages/RegisterClient';
import LoanApp from './pages/LoanApp';
import ApproveLoan from './pages/ApproveLoan';
import Real from './pages/Real';
import Home from './pages/Home';
import Logout from './pages/Logout';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (

        <div className="App">
          
           
        

<Router>  
          
    
               <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/Real" component={Real} /> 
                <Route  path="/RegisterClient" component={RegisterClient} />
                <Route  path="/LoanApp" component={LoanApp} />
                <Route path="/ApproveLoan" component={ApproveLoan} />
                <Route  path="/Logout" component={Logout} />
           </Switch> 
        
       </Router>

    </div> 

  );
}

export default App;
