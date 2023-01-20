import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


// In order to create virtual DOM we have used 'createRoot()' element/function below
const root = ReactDOM.createRoot(document.getElementById('root'));

// 'StrictMode' basically signify that we can't use more than one component (i.e. 'App' component only) below
root.render(
  <React.StrictMode>

    {/* All the components child to "index.js" need to be enclosed within <BrowserRouter> container like below */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

