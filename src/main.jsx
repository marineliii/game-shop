import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DigitalClock from './components/DigitalClock'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DigitalClock />
    <App />
  </React.StrictMode>,
)
