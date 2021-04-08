import React, { Component } from 'react';
import { connect } from 'react-redux';
import Plants from '../containers/Plants';


export class Plantdex extends Component {
  render() {
    const plants = this.props.plants.map( (plant, i) => <Plants key={i} plant_type= {plant.plant_type} seed_type={plant.seed_type} seed_date={plant.seed_date} light={plant.light} environment={plant.environment} soil={plant.soil} notes={plant.notes} problems={plant.problems} />)
    return (
      <div>
        { plants }
      </div> 
    )
  }
}

const mapStateToProps = state => {
  return {
    plants: state.plants 
  }
}

export default connect(mapStateToProps)(Plantdex);
