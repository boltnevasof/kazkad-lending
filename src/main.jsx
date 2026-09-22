import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './design-system/styles.css';
import './styles/site.css';
import './styles/motion.css';
import './styles/shots.css';
// Последним: медиазапросы не добавляют специфичности и должны идти
// в каскаде после базовых правил, иначе не перебьют их.
import './styles/responsive.css';
import App from './App.jsx';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Пререндер кладёт в корень готовую разметку и помечает, для какого адреса она
// снята. Адрес совпал, значит React подхватывает дерево, не перерисовывая его.
// Не совпал (страница 404 под чужим адресом) или разметки нет, как в dev,
// значит рисуем с нуля.
if (container.dataset.prerendered === window.location.pathname) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
