import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { ModeProvider } from './contexts/ModeContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>,
);