import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link }  from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagram, faSnapchatSquare } from '@fortawesome/fontawesome-free-brands';

import missions_data from '../helpers/missions_data.js';

class MissionModal extends Component {
  render() {
    const mission = missions_data[this.props.match.params.identifier];
    //console.log({mission});
    const missionIcon = {
      fontSize: '36px',
      cursor: 'pointer',
      color: 'rgba(0,0,0,0.7)'
    }
    const missionImg = {
      backgroundImage: `url(${mission.img})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '75vh',
      width: '100%'
    }
    return (
      <div className="modal">
        <Link to='/'> &times; </Link>
        {/*<div className="mission-wrap-content">*/}
        <div className="modal-header">
          <h1>{ mission.title }</h1>
          <p className="mission-modal-sub">{ mission.sub }</p>
        </div>
          <div className="modal-image" style={ missionImg }></div>
          <p className="modal-details">{ mission.description }</p>
          <div className="modal-social-icons">
            <a><FontAwesomeIcon className="mission-anchor" icon={ faFacebookSquare } style={ missionIcon } /></a>
            <a><FontAwesomeIcon className="mission-anchor" icon={ faTwitterSquare } style={ missionIcon } /></a>
            <a><FontAwesomeIcon className="mission-anchor" icon={ faInstagram } style={ missionIcon } /></a>
            <a><FontAwesomeIcon className="mission-anchor" icon={ faSnapchatSquare } style={ missionIcon } /></a>
          </div>
        {/*</div>*/}
      </div>
    )
  }
}

export default MissionModal;
