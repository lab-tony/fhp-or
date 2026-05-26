import React from 'react';
import ReactDOM from 'react-dom/client';
import News from './News.jsx';

const root = document.getElementById('react-root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <News />
    </React.StrictMode>
  );
}
