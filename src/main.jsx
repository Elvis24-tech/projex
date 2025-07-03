// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ ONE Router only, at the top level */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
