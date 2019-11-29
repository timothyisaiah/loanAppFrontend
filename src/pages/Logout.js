import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Logout extends Component {
 
  render() {
    return (
      <Link to ="/">Log in Again</Link>
    );
  }
}


export default Logout;