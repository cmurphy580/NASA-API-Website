import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link }  from 'react-router-dom';
import { fetchEPIC, fetchAPOD, fetchImages } from '../actions';

import Header from './Header';
import About from './About-NASA';
import EPICImage from '../containers/EPICImage';
import NASAImages from '../containers/NASAImages';
import ImageOfTheDay from '../containers/ImageOfTheDay';
import Missions from './Missions';
import Footer from './Footer';

class App extends Component {
 componentWillMount() {
   if (!this.props.epic || !this.props.images || !this.props.apod) {
     this.props.fetchEPIC();
     this.props.fetchAPOD();
     this.props.fetchImages();
   }
 }
 componentDidMount() {
  if (!this.props.epic || !this.props.images || !this.props.apod) {
    setTimeout(function(){
      document.querySelector('.loader').style.display = 'none';
    }, 10000);
    setTimeout(function(){
      document.querySelector('.main').style.display = 'flex';
    }, 10000);
  } else {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.main').style.display = 'flex';
  }
 }
 render() {
    return (
      <div>
        <div className="loader">
          <div className="loader-logo"></div>
        </div>
        <div className="main">
          <Header />
          <EPICImage />
          <About />
          <ImageOfTheDay />
          <NASAImages />
          <Missions />
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    epic: state.epic,
    apod: state.apod,
    images: state.images
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEPIC, fetchAPOD, fetchImages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
