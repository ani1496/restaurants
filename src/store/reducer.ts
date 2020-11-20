import { GET_RESTAURANTS } from './actionTypes'
import { GlobalState, Actions } from "../type";
// import { Reducer } from 'react';

const initialState: GlobalState = {
  restaurants: [],
  filters: [],
}

const reducer = ( state:GlobalState = initialState, action: Actions ) => {
  switch (action.type) {
    case GET_RESTAURANTS: 
      return { ...state, restaurants: action.restaurants};
    default: return state;
  }
}

export default reducer;