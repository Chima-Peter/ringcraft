import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css'
import { ColorProvider } from './colorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>
);