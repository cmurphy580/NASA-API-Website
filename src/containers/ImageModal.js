import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link }  from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagram, faSnapchatSquare } from '@fortawesome/fontawesome-free-brands';

class ImageModal extends Component {
  render() {
    const images = JSON.parse(localStorage.getItem('images'));
    const image =  images.filter(image => image.date === this.props.match.params.id)[0];

    const iconStyles = {
      fontSize: '36px',
      cursor: 'pointer',
      color: 'rgba(0,0,0,0.7)'
    }

    return (
      <div className="modal">
        <Link to='/' onClick={localStorage.removeItem('image')}> &times; </Link>
        <div className="modal-header">
          <h1>{image.title}</h1>
        </div>
        <div className="modal-image">
          <img src={image.hdurl} alt={image.date}/>
        </div>
          <div className="modal-details">
            <p>{image.explanation}</p>
            <h3>
              {image.copyright ? image.copyright : 'NASA'},
            </h3>
            <p>{image.date}</p>
          </div>
          <div className="modal-social-icons">
            <a className="modal-anchors"><FontAwesomeIcon icon={ faFacebookSquare } style={ iconStyles } /></a>
            <a className="modal-anchors"><FontAwesomeIcon icon={ faTwitterSquare } style={ iconStyles } /></a>
            <a className="modal-anchors"><FontAwesomeIcon icon={ faInstagram } style={ iconStyles } /></a>
            <a className="modal-anchors"><FontAwesomeIcon icon={ faSnapchatSquare } style={ iconStyles } /></a>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    images: state.images
  };
}

export default connect(mapStateToProps)(ImageModal);
