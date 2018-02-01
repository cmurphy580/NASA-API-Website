import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link }  from 'react-router-dom'
import { fetchImages } from '../actions';

class NASAImages extends Component {
  constructor() {
    super();

    this.loadMore = this.loadMore.bind(this);
  }
  loadMore() {
    localStorage.removeItem('images');
    this.props.fetchImages();
    const images = this.props;
    localStorage.setItem('images', images);
  }
  renderImages(image, i) {
    const backup = '../images/space shuttle5.jpg';
    const background = {
      backgroundImage: `url(${ image.url })`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
    return (
      <Link className={ i === 0 || i === 3 ? 'tall' : i === 4 ? 'wide' : 'box' } style={background} key={image.date} to={`/image/${image.date}`}>
        <div className="image-details" key={image.date}>
            {image.title}
            <div className="sub-date">
              {image.date}
            </div>
        </div>
      </Link>
    )
  }
  render() {
    //console.log(this.props.images);
    const { images } = this.props;
    if (!images) {
      return <div>Loading...</div>
    }
    localStorage.setItem('images', JSON.stringify(images));
    return (
      <section className="images-container">
        <h1 id="stories">NASA Stories</h1>
        <div className="images-wrap">
          { images.map(this.renderImages) }
          <a className="full-width" onClick={this.loadMore.bind(null, this)}> LOAD MORE </a>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    images: state.images
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchImages}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NASAImages);
