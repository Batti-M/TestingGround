import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import App from './App'
import { CategoriesProvider } from './components/contexts/categories.context'

import { CartProvider} from './components/contexts/cart.context'
import { store } from "./store/store"

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
       
          <CategoriesProvider>
            <CartProvider>

            <App />   
            </CartProvider>
          </CategoriesProvider>
       
      </Router>

    </Provider>
  </React.StrictMode>
)
  


