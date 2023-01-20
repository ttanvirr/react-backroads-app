import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// StrictMode is a tool for highlighting potential problems in application.
// It activates additional checks and warnings for its descendants.
// It only runs in development. So, it doesn't impact on production build.
// In development, it renders twice.
// It's optional.
