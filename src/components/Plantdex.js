import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPlants, getComments } from '../actions'


export class Plantdex extends Component {
  
  
  
  componentDidMount() {
      if (this.props.loading === true){
    this.props.getPlants();
    }
  }
  
    render() {
      //  destructuring 
      const { plants } = this.props 
      
      const plantsList = plants.length ? (
        plants.map(plant => { 
          return (
            <div className="plants" key={plant.id}>
            <div className="card" >
              <div className="center">
                <Link to={'/' + plant.id}>
                  <span className="card-title">{plant.seed_type}</span> 
                </Link>
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
    plants: state.plants,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getPlants, getComments })(Plantdex);
