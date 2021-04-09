import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getPlants } from './actions/plantdex';
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';
import Planter from './containers/Planter';
import ErrorPage from './containers/Error';
import Plantdex from './components/Plantdex';
import About from './containers/About';
import Form from './components/Plantform';
import 'materialize-css';
import './App.css';
//import { Button, Card, Row, Col } from 'react-materialize';


class App extends Component {

  componentDidMount() {
    this.props.getPlants();
  }

  render() {
    if (this.props.loading) {
      return (
        <h2> Loading... </h2>
      )
    }
    return (
      <Router> 
       <Navbar /> 
        <Switch>
         <Route exact path="/" component={ Planter } />
         <Route exact path="/about" component={ About } />
         <Route exact path="/plantdex" component={ Plantdex } />
         <Route exact path="/plantdex/new" component={ Form } />
         <Route component={ErrorPage} />
        </Switch>
       <Footer/>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getPlants })(App);
