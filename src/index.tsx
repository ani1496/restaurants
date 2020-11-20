import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, Store, AnyAction} from "redux"
import thunk, { ThunkDispatch } from "redux-thunk"
import { Provider } from "react-redux"

import Main from './components/Main'
import reducer from "./store/reducer"
import { Actions, GlobalState } from './type'

const store: Store <GlobalState, Actions> & { dispatch: ThunkDispatch<{}, {}, AnyAction> } = 
  createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
