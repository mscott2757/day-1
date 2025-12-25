import React, { Component } from 'react';
import './styles/scss/app.scss';
import { Info, Banner, Resume } from './components';
import { info, banner } from './content';
import imgSrc from './images/getty.jpg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { resumeVisible: false }
  }

  toggleResume = () => {
    this.setState({ resumeVisible: !this.state.resumeVisible });
  }

  render() {
    return (
      <div className="app">
        <Info {...info} handleToggle={this.toggleResume} />
        <Banner {...banner} imgSrc={imgSrc} />
        <Resume visible={this.state.resumeVisible} handleToggle={this.toggleResume} />
      </div>
    );
  }
}

export default App;
