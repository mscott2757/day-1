import React from 'react';
import { render } from 'react-snapshot';
import './styles/scss/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
