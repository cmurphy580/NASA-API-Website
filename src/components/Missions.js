import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faTwitter, faInstagram, faSnapchatSquare } from '@fortawesome/fontawesome-free-brands';
import { faAngleLeft, faAngleRight, faDownload } from '@fortawesome/fontawesome-free-solid';

import missions_data from '../helpers/missions_data.js';

class Missions extends Component {
  renderMissions(mission, i) {
    const missionsStyle = {
      backgroundImage: `url(${mission.img})`
    }
    const missionIcon = {
      fontSize: '24px',
      cursor: 'pointer',
      margin: '10px',
      color: '#828282'
    }
    return (
      <Link to={`/mission/${i}`} className="mission-wrap" style={ missionsStyle } key={ i }>
        <div className="mission-details">
          <h1 className="mission-title">{ mission.title }</h1>
          <p className="mission-sub">{ mission.sub }</p>
        </div>
      </Link>
    )
  }
  nextImage() {
    const missionsWrap = document.querySelector('.missions-wrap');
    if (missionsWrap) {
      const wrapScroll = missionsWrap.scrollLeft;
      let viewWidth = window.innerWidth;
      let scrollVw = (wrapScroll / viewWidth) * 100;
      let threshold = +scrollVw.toString().split('.')[0].split('').slice(1).join('');
      let imagePositionVw = threshold === 0 || threshold >= 10 ? ((~~(scrollVw / 100) * 100) + 100) : ((~~(scrollVw / 100) * 100));
      let imagePositionPx = (imagePositionVw * viewWidth) / 100;
      missionsWrap.scrollLeft = imagePositionPx;
      //console.log({wrapScroll, scrollVw, threshold, imagePositionVw, imagePositionPx});
    }
  }
  priorImage() {
    const missionsWrap = document.querySelector('.missions-wrap');
    if (missionsWrap) {
        const wrapScroll = missionsWrap.scrollLeft;
        let viewWidth = window.innerWidth;
        let scrollVw = (wrapScroll / viewWidth) * 100;
        let threshold = +scrollVw.toString().split('.')[0].split('').slice(1).join('');
        let imagePositionVw = threshold === 0 || threshold < 10 ? ((~~(scrollVw / 100) * 100) - 100) : ((~~(scrollVw / 100) * 100));
        let imagePositionPx = (imagePositionVw * viewWidth) / 100;
        missionsWrap.scrollLeft = imagePositionPx;
        //console.log({wrapScroll, scrollVw, threshold, imagePositionVw, imagePositionPx});
    }
  }
  render() {
    const arrowStyle = {
      fontSize: '40px',
      color: 'white'
    }
    const missionsWrap = document.querySelector('.missions-wrap');
  return (
      <section className="missions-section">
          <div className="missions-header">
            <h1 id="missions">Our Missions</h1>
            <p>Ten fields centers and a variety of installations conduct the day-to-day work, in laboratories, on air fields, in wind tunnels, and in control rooms.</p>
          </div>
          <div className="missions-container">
            <div className="left" onClick={ this.priorImage }>
              <FontAwesomeIcon className="arrow-icon-left" icon={ faAngleLeft } style={ arrowStyle } />
            </div>
            <div className="missions-wrap">
              { missions_data.map(this.renderMissions) }
            </div>
            <div className="right" onClick={ this.nextImage }>
              <FontAwesomeIcon className="arrow-icon-right" icon={ faAngleRight } style={ arrowStyle } />
            </div>
          </div>
      </section>
    )
  }
}

export default Missions;
