import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Scroll effect JavaScript
const handleScroll = () => {
  document.body.classList.toggle('scrolled', window.scrollY > 0);
};

window.addEventListener('scroll', handleScroll);

// Clean up the event listener on component unmount
// This will run when the component is removed from the DOM
const cleanupScrollListener = () => {
  window.removeEventListener('scroll', handleScroll);
};

// Render the React App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Report web vitals
reportWebVitals();

// Cleanup on component unmount (if applicable)
cleanupScrollListener();
