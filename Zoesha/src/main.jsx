import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import App from './App'
import { UserProvider } from './components/contexts/user.context'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App /> 
      </UserProvider>
    </Router>
  </React.StrictMode>
)
  

