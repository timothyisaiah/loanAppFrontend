import React from 'react';
import './Real.css';
import {Link} from 'react-router-dom';

class Real extends React.Component{
render (){
  return (
    
      
   <nav>
     <ul className='navlinks'>
       <Link to="/RegisterClient">
          <li>Register client</li>
           </Link>
       <Link to="/LoanApp"> 
       <li>Loan Application</li> 
       </Link>
       <Link to="/ApproveLoan">
         <li>Borrowers</li>
          </Link>
    <Link to="/Logout"> 
       <li> Logout</li>
        </Link>    
     </ul>

      
     
    
   </nav>
   
  );
}}

export default Real;
