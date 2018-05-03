import React from 'react';
import './styles/css/app.css';
import { Info, Banner } from './components';
import { info, banner } from './content';

const App = (props) => {
  return (
    <div className="app">
      <Info {...info} />
      <Banner {...banner} />
    </div>
  );
}

export default App;
