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

export const getGenres = (restaurants:Restaurant[]) => {
  const genres:string[] = []
  
  restaurants.forEach(({genre}) => {
    const genreArray = genre.split(',')

    genreArray.forEach(item => {if(!genres.includes(item)) genres.push(item)})
  })

  return genres
}

export const filterTags = (filterVal:string, tagOptions:string[], existingTags:string[]) => {
  if(filterVal.length === 0 ) return []

  const filterTags = tagOptions.filter(tag => {
    return tag.toLowerCase().includes(filterVal.toLowerCase()) && !existingTags.includes(tag)
  })

  return filterTags
}