import { Restaurant } from "./type";


type sortType = 'name' | 'state'

export const sortAZRestaurants = (sortBy: sortType, restaurants: Restaurant[]) => {
  return restaurants.sort((first:Restaurant, second:Restaurant) => {
    const firstRestaurant = first[sortBy]
    const secondRestaurant = second[sortBy]

    if(firstRestaurant > secondRestaurant) return 1;
    if(firstRestaurant < secondRestaurant) return -1;

    return 0;
  }) 
}

export const sortZARestaurants = (sortBy: sortType, restaurants: Restaurant[]) => {
  return restaurants.sort((first:Restaurant, second:Restaurant) => {
    const firstRestaurant = first[sortBy]
    const secondRestaurant = second[sortBy]

    if(firstRestaurant < secondRestaurant) return 1;
    if(firstRestaurant > secondRestaurant) return -1;

    return 0;
  }) 
}