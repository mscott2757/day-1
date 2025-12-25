import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import PropTypes from 'prop-types';
import file from './../resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

class Resume extends Component {
  componentDidMount() {
    if (this.props.visible) {
      document.addEventListener("keydown", this.handleEsc, false);
    }
  }

  stopToggle = (e) => {
    e.stopPropagation();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.visible) {
      document.addEventListener("keydown", this.handleEsc, false);
    } else {
      document.removeEventListener("keydown", this.handleEsc, false);
    }
  }

  handleEsc = (e) => {
    if (e.keyCode === 27) {
      this.props.handleToggle();
    }
  }

  handleToggle = (e) => {
    e.preventDefault();
    this.props.handleToggle();
  }

  render() {
    const { visible } = this.props;
    if (!visible) {
      return null;
    }
    return (
      <div className='resume' onClick={this.handleToggle}>
        <div className='resume-close'>
          <a href='/close-resume' onClick={this.handleToggle}>close</a>
        </div>
        <Document file={file} onClick={this.stopToggle}>
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
}

Resume.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default Resume;
