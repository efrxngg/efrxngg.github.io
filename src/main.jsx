import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Urls from './Urls'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Urls />
  </BrowserRouter>
)
