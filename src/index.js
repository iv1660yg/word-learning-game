import React from 'react';
// Import ReactDOM to render React components to the DOM
import ReactDOM from 'react-dom';
// Import the App component which is the root of the application
import App from './App';

// Render the App component wrapped in React.StrictMode for additional checks and warnings
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Find the DOM element with the id 'root' to mount the React application
  document.getElementById('root')
);