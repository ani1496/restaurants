import * as actionTypes from "./actionTypes"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { ActionCreator, AnyAction } from "redux"
import fetch from 'node-fetch'

import { RestaurantsAction, Restaurant } from "../type"

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
		}, 
		{
			id: "00b35e1a-82b1-4988-b8b9-6df826db2818",
			name: "Matsuhisa",
			address1: "303 E Main St",
			city: "Aspen",
			state: "CO",
			zip: "81611",
			lat: "39.190723",
			long: "-106.82031",
			telephone: "(970) 544-6628",
			tags: "Social,Food and Dining,Restaurants,Japanese,Social,Food and Dining,Restaurants,Sushi",
			website: "http://www.matsuhisaaspen.com",
			genre: "Japanese,Sushi,Asian,Contemporary,Seafood",
			hours: "Open Daily 5:30 PM-9:00 PM",
			attire: "business casual"
	},
	{
			id: "0f41a3d0-0641-4eef-b7fd-706f083cf0d5",
			name: "Fleurie Restaurant",
			address1: "108 3rd St NE",
			city: "Charlottesville",
			state: "VA",
			zip: "22902",
			lat: "38.030526",
			long: "-78.479785",
			telephone: "(434) 971-7800",
			tags: "Social,Food and Dining,Restaurants,French",
			website: "http://www.fleurierestaurant.com",
			genre: "French,European,Cafe,Continental,American",
			hours: "Mon-Thu 5:30 PM-9:00 PM; Fri-Sat 5:30 PM-10:00 PM",
			attire: "business casual"
		},]

		// fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
		// 	method: 'GET',
		// 	headers: {'Authorization': 'Api-Key q3MNxtfep8Gt', 'Content-Type':'application/json'}
		// } ).then(res => console.log(res.body)).catch(e => console.log(e))

		// // console.log(data)

		return dispatch({ type: actionTypes.GET_RESTAURANTS, restaurants })
	}
}