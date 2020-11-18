import { ADD_ARTICLE, REMOVE_ARTICLE } from './actionTypes'
import {ArticleState, ArticleAction } from "../type";

const initialState: ArticleState = {
  ariticles: [
    {
        id: 1,
        title: "post 1",
        body:
          "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
      },
      {
        id: 2,
        title: "post 2",
        body:
          "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
      },
  ]
}

const reducer = ( state: ArticleState = initialState, action: ArticleAction ): ArticleState => {
  switch (action.type) {
    case ADD_ARTICLE: 
      return state;
    case REMOVE_ARTICLE: 
      return state;
    default: return state;
  }
}

export default reducer;