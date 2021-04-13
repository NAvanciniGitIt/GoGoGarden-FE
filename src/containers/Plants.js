import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPlant } from '../actions'
import Form from '../components/Commentform'
import { getComments } from "../actions"


export class Plants extends Component {
  render() {
  
    const { plant_type, seed_type, seed_date, light, environment, soil, notes, problems, id, comments } = this.props.plant;

    const commentListing = comments.length ? (
      comments.map(comment => {
        return (
          <div className="comment container" key={comment.id}>
            <div className="post card" >
              <span className="card-title">{comment.content}</span>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Comments</div>
    )

    return (
      <div className= "container center">
        <div className="plant float-container">
        <br />
        <div className="float-child">
          <h3>Plant Category: { plant_type } </h3>
          <h2>Seed Type: { seed_type }</h2>
          <p>{ seed_date }</p>
          <p>{ light }</p>
          <p>{ environment }</p>
          <p>{ soil }</p>
          <p>{ notes }</p>
          <p>{ problems }</p>  
          </div>
          <Form history= { this.props.history } plant_id={id}/>
          <h4 className="center"> Comments</h4>
          { commentListing }
       </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.id)

  return {
    loading: state.loading,
    plant: state.plants.find(plant => plant.id === id),
    comments: state.comments 
  }
}

export default connect(mapStateToProps, { getPlant, getComments })(Plants)
