import * as actionTypes from "./actionTypes"
import { IArticle, ArticleAction, DispatchType } from "../type"

export const addArticle = ( article: IArticle ) =>  {
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article,
    }

    return simulateHttpRequest(action)
}

export const simulateHttpRequest = (action: ArticleAction) => {
	return (dispatch: DispatchType) => {
		setTimeout(() => {
			dispatch(action)
		}, 500)
	}
}