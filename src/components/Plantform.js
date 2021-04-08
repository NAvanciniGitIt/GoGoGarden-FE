import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlant } from '../actions/plantdex';


export class Form extends Component {
  state = {
    plant_type: "",
    seed_type: "",
    seed_date: "",
    light: "",
    environment: "",
    soil: "",
    notes: "",
    problems: "",
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addPlant(this.state, this.props.history);

  }

  render() {

    return (
      <div>
        <h3> Add Plant To Your Garden </h3>
        <form>
          <div>
            <label htmlFor="plant_type">Plant Category: </label>
            <input type="text" id="plant_type" name="plant_type" value={ this.state.plant_type } onChange={ this.handleChange }/>
          </div>
          <br></br>
          <div>
            <label htmlFor="seed_type">Seed Type: </label>
            <input type="text" id="seed_type" name="seed_type" value={ this.state.seed_type } onChange={ this.handleChange }/>
          </div>
          <br></br>
          <div>
            <label htmlFor="seed_date">Planted Date: </label>
            <input type="date" id="seed_date" name="seed_date" value={ this.state.seed_date} onChange={ this.handleChange }/>
          </div>
          <br></br>
          <div>
            <label htmlFor="light">Light: </label>
            <input type="text" id="light" name="light" value={ this.state.light } onChange={ this.handleChange }/>
          </div>
          <br></br>
          <div>
            <label htmlFor="evironment">Environment: </label>
            <input type="text" id="environment" name="environment" value={ this.state.environment } onChange={ this.handleChange }/>
          </div>
          <br></br>
          <div>
            <label htmlFor="soil">Soil: </label>
            <input type="text" id="soil" name="soil" value={ this.state.soil } onChange={ this.handleChange }/>
          </div>
          <div>
            <p><label htmlFor="notes">Notes: </label></p>
            <textarea id="notes" name="notes" value={ this.state.notes } onChange={ this.handleChange }></textarea>
          </div> 
          <div>
            <p><label htmlFor="problems">Problems: </label></p>
            <textarea id="problems" name="problems" value={ this.state.problems } onChange={ this.handleChange }></textarea>
          </div>
          <br></br>
          <input type="submit" value="Add Plant"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addPlant })(Form)