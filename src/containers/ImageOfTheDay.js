import React, { Component } from 'react';
import { connect } from 'react-redux';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faTwitter, faInstagram, faSnapchatSquare } from '@fortawesome/fontawesome-free-brands';
import { faDownload, faCaretUp, faShareAlt, faHeart } from '@fortawesome/fontawesome-free-solid';

import tweets from '../helpers/nasa_tweets.js';

class ImageOfTheDay extends Component {
  renderTweet(t, i) {
    const tweetIcon = {
      color: 'rgba(255,255,255,0.8)',
      fontSize: '10px'
    }
    const tweetImg = {
      backgroundImage: `url(${t.picture})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100px',
      width: '100%',
      cursor: 'pointer'
    }
    return (
      <div className="tweet-wrap" key={i}>
        <div className="tweet-header">
          <div className="header-left">
            <img src={t.logo} alt="" className="tweet-logo"/>
            <p className="tweet-name">{t.author}</p>
            <p className="tweet-handler">{t.handler}</p>
          </div>
          <a className="tweet-icon-header"><FontAwesomeIcon icon={ faTwitter } style={ tweetIcon } /></a>
        </div>
        <p className="tweet-content">{t.tweet}</p>
        <div className="tweet-img" style={ tweetImg }></div>
        <div className="tweet-footer">
          <div className="footer-left">
            <a><FontAwesomeIcon icon={ faHeart } style={ tweetIcon } /></a>
            <a><FontAwesomeIcon icon={ faShareAlt } style={ tweetIcon } /></a>
          </div>
          <p>1m</p>
        </div>
      </div>
    )
  }
  render() {
    if (!this.props.apod) {
      return <div>Loading...</div>
    }
    //console.log(this.props.apod);
    const { apod } = this.props;

    const apodImage = {
      backgroundImage: `url(${ apod.url })`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
    const apodIcon = {
      fontSize: '24px',
      cursor: 'pointer',
      margin: '10px',
      color: '#828282'
    }
    const apodExpand = {
      fontSize: '24px',
      cursor: 'pointer',
      color: '#828282',
      margin: '10px 0 10px 0'
    }
    return (
      <section className="apod-section">
        <h1 id="apod" className="apod-p">News</h1>
        <div className="apod-container">
          <div className="apod-wrap">
            <div className="apod-image" style={ apodImage }></div>
            <div className="apod-details">
              <input className="apod-check" id="apod-check" type="checkbox"></input>
              <label className="apod-details-header" htmlFor="apod-check">
                  <h3 className="apod-title">{apod.title}</h3>
                  <div className="apod-sub">Picture of the Day</div>
                  <a><FontAwesomeIcon className="apod-expand" icon={ faCaretUp } style={ apodExpand } /></a>
              </label>
              <div className="apod-details-footer">
                <p className="apod-description">{apod.explanation}</p>
                <div className="apod-logos">
                  <a><FontAwesomeIcon className="apod-anchor" icon={ faDownload } style={ apodIcon } /></a>
                  <a><FontAwesomeIcon className="apod-anchor" icon={ faFacebookSquare } style={ apodIcon } /></a>
                  <a><FontAwesomeIcon className="apod-anchor" icon={ faTwitterSquare } style={ apodIcon } /></a>
                  <a><FontAwesomeIcon className="apod-anchor" icon={ faInstagram } style={ apodIcon } /></a>
                  <a><FontAwesomeIcon className="apod-anchor" icon={ faSnapchatSquare } style={ apodIcon } /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="twitter-wrap">
            <h3>Tweets by <span className="blue">@NASA</span></h3>
            <div className="tweet-container">
              { tweets.map(this.renderTweet) }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    apod: state.apod
  };
}

export default connect(mapStateToProps)(ImageOfTheDay);
