import React from 'react'
import ReactDOM from 'react-dom/client'
// Ceci importe tous vos styles SASS compilés.
import './styles/main.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

reportWebVitals()
