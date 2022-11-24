import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import App from './App'
import { ProductProvider } from './components/contexts/products.context'
import { UserProvider } from './components/contexts/user.context'
import { CartContextProvider} from './components/contexts/cart.context'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ProductProvider>
          <CartContextProvider>

          <App />   
          </CartContextProvider>
        </ProductProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
)
  


