import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';
// import { addPlant } from '../actions';

export class Commentform extends Component {

  state = {
    content: "",
    plant_id: this.props.plant_id

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addComment(this.state, this.props.history)
    this.setState({
      content: "",
      plant_id: this.props.plant_id
    })
  }


  render() {

    return (
      <div>
        <form onSubmit={ this.handleSubmit }> 
         <h4 className="container center"><label htmlFor="comment">Comment</label></h4>
         <input className="commentBox" type="text" name="content" value={this.state.content} onChange={ this.handleChange }/>
         <div className="container center">
            <button>Submit</button>
         </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addComment})(Commentform); 
