import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './component/context/AuthContext';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
);
