import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPlant } from '../actions'
import Form from '../components/Commentform'
import { getComments } from "../actions"


export class Plants extends Component {

  componentDidMount(){ 
    return this.props.comments
    }

  render() {
  
    const { plant_cat, seed_type, light_type, environment, soil, fertilizer, harvest, problems, id, comments } = this.props.plant;

    const commentListing = comments !== undefined && comments.length ? (
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
          <h3>Plant Category: { plant_cat } </h3>
          <h2>Seed Type: { seed_type }</h2>
          <p>Suggested Hours of Light: { light_type }</p>
          <p>Recommended Environment: { environment }</p>
          <p>Recommended Soil: { soil }</p>
          <p>Recommended Fertilizer: { fertilizer }</p>
          <p>Recommended Harvest Time:{ harvest }</p>
          <p>Known Issues: { problems }</p>  
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
    comments: state.plants.comments 
  }
}

export default connect(mapStateToProps, { getPlant, getComments })(Plants)
