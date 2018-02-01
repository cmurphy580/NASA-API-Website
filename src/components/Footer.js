import React from 'react';

const Footer = React.createClass({
  render() {
    return (
      <div className="nasa-footer">
      <ul>
        <li><a><p>No Fear Act</p></a></li>
        <li><a><p>FOIA</p></a></li>
        <li><a><p>Privacy</p></a></li>
        <li><a><p>Office of Inspector General</p></a></li>
        <li><a><p>Agency Financial Reports</p></a></li>
        <li><a><p>Contact NASA</p></a></li>
      </ul>
      <div className="nasa-logo-footer"></div>
      </div>
    )
  }
});

export default Footer;
