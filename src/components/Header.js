import React from 'react';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSpaceShuttle } from '@fortawesome/fontawesome-free-solid';

const Header = React.createClass({
  render() {
   const iconStyle = {
      color: 'white',
      fontSize: '45px',
      margin: '0',
      padding: '0',
      position: 'relative',
      right: '5%'
    }
    return (
      <header className="header-bar">
        <a className="logo one"></a>
        <input id="shuttle-check" type="checkbox"></input>
        <label htmlFor="shuttle-check">
          <FontAwesomeIcon className="shuttle-icon" icon={ faSpaceShuttle } style={ iconStyle } />
        </label>
        <ul className="links">
          <li><a href="#about"><p>Mission Statement</p></a></li>
          <li><a href="#apod"><p>News</p></a></li>
          <li><a href="#stories"><p>NASA Stories</p></a></li>
          <li><a href="#missions"><p>Missions</p></a></li>
        </ul>
      </header>
    )
  }
});

export default Header;
