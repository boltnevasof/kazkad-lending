import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './design-system/styles.css';
import './styles/site.css';
import './styles/motion.css';
// Последним: медиазапросы не добавляют специфичности и должны идти
// в каскаде после базовых правил, иначе не перебьют их.
import './styles/responsive.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
