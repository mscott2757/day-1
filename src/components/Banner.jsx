import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    }
  }

  showDescription = () => {
    this.setState({ descriptionVisible: true });
  }

  hideDescription = () => {
    this.setState({ descriptionVisible: false });
  }

  render() {
    const { imgSrc, description } = this.props;
    return (
      <div
        className='banner-wrapper'
        onMouseEnter={this.showDescription}
        onMouseLeave={this.hideDescription}
      >
        <img src={imgSrc} alt='' />
        <p className={'banner-description ' + (this.state.descriptionVisible ? 'banner-description--visible' : '')}>
          {description}
        </p>
      </div>
    )
  }
}

Banner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Banner;
