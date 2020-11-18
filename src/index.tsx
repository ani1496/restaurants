import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import App from './components/App'
import reducer from "./store/reducer"
import { ArticleState, ArticleAction, DispatchType } from './type'

import './styles/index.css'

const store: Store <ArticleState, ArticleAction> & { dispatch: DispatchType } = 
  createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
