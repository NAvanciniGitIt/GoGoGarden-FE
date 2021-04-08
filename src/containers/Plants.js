import React, { Component } from 'react'

export class Plants extends Component {
  render() {
    const { plant_type, seed_type, seed_date, light, environment, soil, notes, problems } = this.props;
    return (
      <div>
        <h3>{ plant_type } { seed_type }</h3>
        <ul>
          <li>{ seed_date }</li>
          <li>{ light }</li>
          <li>{ environment }</li>
          <li>{ soil }</li>
        </ul>
        <p>{ notes }</p>
       <p>{ problems }</p>  
      </div>
    )
  }
}

export default Plants
