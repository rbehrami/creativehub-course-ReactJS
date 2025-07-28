import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CountriesProvider } from './context/CountriesContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </BrowserRouter>
  </React.StrictMode>
)