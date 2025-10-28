import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'; 
import './index.css';
import { BasketProvider } from './components/Basket/BasketContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
      <div className="font-sans">
        <App />
      </div>
    </BasketProvider>
  </React.StrictMode>
);