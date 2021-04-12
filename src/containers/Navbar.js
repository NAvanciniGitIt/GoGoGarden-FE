import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
     <nav> 
      <div className="nav-wrapper">
      <Link to="/" className="brand-logo center">GoGoGarden</Link>
        <ul id="nav" className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/plantdex">Plantdex</Link></li>
          <li><Link to="/plantdex/new">Add Plant</Link></li>
        </ul>
      </div>
    </nav>  
    )
  }
}



export default Navbar
