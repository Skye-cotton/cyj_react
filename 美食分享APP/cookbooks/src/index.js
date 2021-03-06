import reactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import store from './store/index'

import App from './App'
import './assets/styles/reset.css'

reactDOM.render(
    <Provider store={store}><App /></Provider>,  
    document.getElementById('root')
)