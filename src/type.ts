import { Action } from "redux";
import "webrtc";

/// Example:


// export interface IArticle {
// 		id: number
// 		title: string
// 		body: string
// }

// export type ArticleState = {
// 	ariticles: IArticle[]
// }

// export type ArticleAction = {
// 	type: string
// 	article: IArticle
// }

// export type DispatchType = (arg: ArticleAction) => ArticleAction


//////

export interface Restaurant {
	id: string ,
	name: string,
	address1: string,
	city: string,
	state: string,
	zip: string,
	lat: string,
	long: string,
	telephone: string,
	tags: string,
	website: string,
	genre: string,
	hours: string,
	attire: string,
}

export interface GlobalState {
	restaurants: Restaurant[],
	filters: string[],
}

export interface RestaurantsAction extends Action<"GET_RESTAURANTS"> {
	restaurants: Restaurant[]
}

export type Actions = RestaurantsAction


export type SortType = 'name' | 'state'

export type Order = 'ZA' | 'AZ'

export type FilterType = 'genre' | 'state'

export type FiltersState = {
	genre: string[],
	state: string[],
}