import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Plants from '../containers/Plants';
import { Link } from 'react-router-dom'


export class Plantdex extends Component {
  
    
  render() {
   
    const { plants } = this.props
    
    const plantsList = plants.length ? (
      plants.map(plant => {
        return (
        <div className="row">
          <div className="col s10 m6">

          <div className="plants" key={plant.id}>
            <div className="card" >
              <div className="card-content">
                <Link to={'/' + plant.id}>
                  <span className="card-title">{plant.plant_type}: {plant.seed_type}</span> 
                </Link>
              </div>
            </div>
          </div>
         </div>
        </div> 
        )
      })
    ) : (
      <div className="center">None yet</div>
    )
    return (
      <div className="container">
        <h4 className="center">Plants</h4>
        {plantsList}
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


// const plants = this.props.plants.map( (plant, i) => <Plants key={i} plant_type= {plant.plant_type} seed_type={plant.seed_type} seed_date={plant.seed_date} light={plant.light} environment={plant.environment} soil={plant.soil} notes={plant.notes} problems={plant.problems} />)