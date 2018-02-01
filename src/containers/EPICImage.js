import React, { Component } from 'react';
import { connect } from 'react-redux';
import { epicURLCreator } from '../helpers/EPICImageURLCreator';

class EPICImage extends Component {
  constructor(props) {
    super(props);

    this.state = { index: 0 };
  }
  componentDidMount() {
    this.interval = setInterval(function() {
      if (this.state.index === this.props.epic.length-1) {
        this.setState({ index: 0 });
      } else {
        this.setState((prevState) => {
          return {index: prevState.index + 1}
        });
      }
    }.bind(this), 500);
    //console.log(this.state.index);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  renderEpicImages(epicImage) {
    //const image = epicURLCreator(epicImage); src = image key = epicImage.identifier

    return (
      <div id="epic" className="epic-background">
        <div className="epic-left"></div>
        <img className="epic-image" src={ epicImage } alt="EARTH" key={ this.state.index } />
        <div className="epic-right"></div>
      </div>
    )
  }
  render() {
    if (!this.props.epic) {
      return <div>Loading...</div>
    }
    const { index } = this.state;
    //const { epic } = this.props;
    const images = this.props.epic.map(image => epicURLCreator(image));
    const epicImage = images[index];

    //console.log(index);
    return (
      <section className="epic-container">
        <div className="epic-wrap">
          { this.renderEpicImages(epicImage) }
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    epic: state.epic
  };
}

export default connect(mapStateToProps)(EPICImage);
