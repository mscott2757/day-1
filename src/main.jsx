import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/scss/index.scss';
import App from './App';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
// import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
// registerServiceWorker();
