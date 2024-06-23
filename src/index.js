import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/scss/index.scss';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
// registerServiceWorker();
