import ReactDom from 'react-dom/client'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/evbuddy-homepage-jz">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

