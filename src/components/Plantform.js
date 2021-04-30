import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlant } from '../actions/index';


export class Form extends Component {
  
  state = {
    plant_cat: "",
    seed_type: "",
    light_type: "",
    environment: "",
    soil: "",
    fertilizer: "",
    harvest: "",
    problems: "",
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addPlant(this.state, this.props.history);
  }

  render() {

    return (
      <div className="container">
        <div className="formstyle">
          <h3> Add Plant To The Garden </h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <p><label htmlFor="plant_cat">Plant Category: </label>
            <input type="text" id="plant_cat" name="plant_cat" value={ this.state.plant_cat } onChange={ this.handleChange }/>
            </p>
          </div>
          <br></br>
          <div>
            <label htmlFor="seed_type">Seed Type: </label>
            <input type="text" id="seed_type" name="seed_type" value={ this.state.seed_type } onChange={ this.handleChange }/>
          </div>
          <br></br>
          <div>
            <label htmlFor="light_type">Recommended Hours of Light: </label>
            <input type="text" id="light_type" name="light_type" value={ this.state.light_type } onChange={ this.handleChange }/>
          </div>
          <br></br>
          <div>
            <label htmlFor="evironment">Recommended Environment: </label>
            <input type="text" id="environment" name="environment" value={ this.state.environment } onChange={ this.handleChange }/>
          </div>
          <br></br>
          <div>
            <label htmlFor="soil">Recommended Soil: </label>
            <input type="text" id="soil" name="soil" value={ this.state.soil } onChange={ this.handleChange }/>
          </div>
          <br></br>
          <div>
            <label htmlFor="fertilizer">Recommended Fertilizer: </label>
            <input type="text" id="fertilizer" name="fertilizer" value={ this.state.fertilizer } onChange={ this.handleChange }/>
          </div>
          <br></br>
          <div>
            <label htmlFor="harvest">Recommended Harvest Time: </label>
            <input type="text" id="harvest" name="harvest" value={ this.state.harvest } onChange={ this.handleChange }/>
          </div>
          
          <div>
            <p><label htmlFor="problems">Known Issues:</label></p>
            <textarea id="problems" name="problems" value={ this.state.problems } onChange={ this.handleChange }></textarea>
          </div>
          <br></br>
          <input type="submit" value="Add Plant"/>
        </form>
        </div>
      </div>
    )
  }
}


export default connect(null, { addPlant })(Form)