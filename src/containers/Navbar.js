import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/plantdex">Plantdex</Link></li>
          <li><Link to="/plantdex/new">Add Plant</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navbar
