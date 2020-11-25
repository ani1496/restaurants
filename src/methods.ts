import { FiltersState, FilterType, Restaurant } from "./type";


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

export const getStates = (restaurants:Restaurant[]) => {
  const states:string[] = []
  
  restaurants.forEach(({state}) => {
    if(!states.includes(state)) states.push(state)
  })

  return states
}

export const filterTags = (filterVal:string, tagOptions:string[], existingTags:string[]) => {
  if(filterVal.length === 0 ) return []

  const filterTags = tagOptions.filter(tag => {
    return tag.toLowerCase().includes(filterVal.toLowerCase()) && !existingTags.includes(tag)
  })

  return filterTags
}

export const getRestaurantsFiltered = (filters:FiltersState, restaurants:Restaurant[]) => {
  let restaurantsFiltered:Restaurant[] = [...restaurants]
  
  Object.entries(filters).forEach((filter) => {
    const [type, tags] = filter
    restaurantsFiltered = filterRestaurants(type as FilterType, tags, restaurantsFiltered)
  })

  return restaurantsFiltered
}

const filterRestaurants = (filterBy:FilterType, filterVals:string[], restaurants:Restaurant[]) => {
  
  const restaurantsFiltered = restaurants.filter((restaurant:Restaurant) => {
    const restFilterByArray = restaurant[filterBy].split(',')

    return !filterVals.map(filterVal => restFilterByArray.includes(filterVal)).includes(false)
  })

  return restaurantsFiltered
}

export const searchRestaurants = (searchVal:string, restaurants:Restaurant[]) => {
  const restaurantsFound = restaurants.filter((restaurant:Restaurant) => {
    const hasName:boolean = restaurant.name.toLowerCase().includes(searchVal.toLowerCase())
    const hasCity:boolean = restaurant.city.toLowerCase().includes(searchVal.toLowerCase())
    const hasGenre:boolean = restaurant.genre.toLowerCase().includes(searchVal.toLowerCase())

    return hasName || hasCity || hasGenre
  })

  console.log('searchRestaurants', [...restaurantsFound])
  
  return [...restaurantsFound]
}