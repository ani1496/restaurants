import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, Store, AnyAction} from "redux"
import thunk, { ThunkDispatch } from "redux-thunk"
import { Provider } from "react-redux"

import Header from './components/Header'
import Home from './components/Home'
import reducer from "./store/reducer"
import { Actions, GlobalState } from './type'

import './styles/index.css'

const store: Store <GlobalState, Actions> & { dispatch: ThunkDispatch<{}, {}, AnyAction> } = 
  createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <Header />
    <Home />
  </Provider>,
  document.getElementById('root')
)
