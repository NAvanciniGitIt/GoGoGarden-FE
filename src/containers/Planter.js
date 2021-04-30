import React, { Component } from 'react'
import veg from '../images/veggardennn.png'


export class Planter extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <h1> Welcome!</h1>
          <img alt= "veg" src={veg} className="Veg"/>;
        </div>
      </div>
    )
  }
}

export default Planter
