import * as actionTypes from "./actionTypes"
import { RestaurantsAction, Restaurant } from "../type"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { ActionCreator, AnyAction } from "redux"

// export const addArticle = ( article: IArticle ) =>  {
//     const action: ArticleAction = {
//         type: actionTypes.ADD_ARTICLE,
//         article,
//     }

//     return simulateHttpRequest(action)
// }

// export const simulateHttpRequest = (action: ArticleAction) => {
// 	return (dispatch: DispatchType) => {
// 		setTimeout(() => {
// 			dispatch(action)
// 		}, 500)
// 	}
// }

export const getRestaurantsList: ActionCreator<
	ThunkAction<
		RestaurantsAction, 
		Restaurant[], 
		null, 
		RestaurantsAction
	>
> = () => {
	// add async when calling api
	// add promise to first argument of ThunkAction Promise<RestaurantsAction>

	return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
		const restaurants:Restaurant[] = [{
				id: "f223fdd0-4adc-423e-9747-980a66c256ca",
				name: "Old Hickory Steakhouse",
				address1: "201 Waterfront St",
				city: "Oxon Hill",
				state: "MD",
				zip: "20745",
				lat: "38.782098",
				long: "-77.017492",
				telephone: "(301) 965-4000",
				tags: "Social,Food and Dining,Restaurants,Steakhouses",
				website: "http://www.gaylordnational.com",
				genre: "Steak,American,Contemporary,Seafood,Cafe",
				hours: "Open Daily 5:30 PM-10:00 PM",
				attire: "business casual"
		}]
		return dispatch({ type: actionTypes.GET_RESTAURANTS, restaurants })
	}
}