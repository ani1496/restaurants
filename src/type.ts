import "webrtc";

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

export type SortType = 'name' | 'state'

export type Order = 'ZA' | 'AZ'

export type FilterType = 'genre' | 'state'

export type FiltersState = {
	genre: string[],
	state: string[],
}