import {
  sortAZRestaurants, sortZARestaurants,
  getGenres, getStates,
  filterTags, getRestaurantsFiltered,
  searchRestaurants
} from '../../methods';
import { Restaurant, FiltersState } from '../../type';


const restaurant:Restaurant = {
  id: "1234",
  name: "Restaurant A",
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
}

describe('sort Restaurants', () => {
  test('call sortAZRestaurants', () => {
    const restaurants:Restaurant[] = [
      { ...restaurant, name: 'Z'},
      { ...restaurant, name: 'D'},
      { ...restaurant, name: 'D'},
      { ...restaurant, name: 'A'},
      { ...restaurant, name: 'C'}
    ]
    expect(sortAZRestaurants('name', restaurants)).toEqual([
      { ...restaurant, name: 'A'},
      { ...restaurant, name: 'C'},
      { ...restaurant, name: 'D'},
      { ...restaurant, name: 'D'},
      { ...restaurant, name: 'Z'}
    ]);
  });

  test('call sortAZRestaurants with empty array', () => {
    const restaurants:Restaurant[] = []

    expect(sortAZRestaurants('name', restaurants)).toEqual([]);
  });

  test('call sortZARestaurants', () => {
    const restaurants:Restaurant[] = [
      { ...restaurant, name: 'Z'},
      { ...restaurant, name: 'D'},
      { ...restaurant, name: 'A'},
      { ...restaurant, name: 'A'},
      { ...restaurant, name: 'C'}
    ]
    expect(sortZARestaurants('name', restaurants)).toEqual([
      { ...restaurant, name: 'Z'},
      { ...restaurant, name: 'D'},
      { ...restaurant, name: 'C'},
      { ...restaurant, name: 'A'},
      { ...restaurant, name: 'A'}
    ]);
  });

  test('call sortZARestaurants with empty array', () => {
    const restaurants:Restaurant[] = []

    expect(sortZARestaurants('name', restaurants)).toEqual([]);
  });
})

describe('genres and states', () => {
  test('call getGenres', () => {
    const restaurants:Restaurant[] = [
      {...restaurant, genre: 'Steak,American,Contemporary,Seafood,Cafe', state: 'FL' },
      {...restaurant, genre: 'Italian,Pasta', state: 'CO' },
      {...restaurant, genre: 'Sushi,Japanese', state: 'AZ' }
    ]

    expect(getGenres(restaurants)).toEqual(
      ['Steak', 'American', 'Contemporary', 'Seafood' , 'Cafe', 'Italian', 'Pasta', 'Sushi', 'Japanese']
    );

    expect(getStates(restaurants)).toEqual(
      ['FL', 'CO', 'AZ']
    );
  });

  test('call getGenres with repeated genres', () => {
    const restaurants:Restaurant[] = [
      {...restaurant, genre: 'Steak,Cafe,Sushi' },
      {...restaurant, genre: 'Italian,Pasta,Cafe' },
      {...restaurant, genre: 'Sushi,Japanese,Steak' }
    ]

    expect(getGenres(restaurants)).toEqual(
      ['Steak', 'Cafe', 'Sushi', 'Italian', 'Pasta', 'Japanese']
    );
  });

  test('call getStates with repeated states', () => {
    const restaurants:Restaurant[] = [
      {...restaurant, state: 'FL' },
      {...restaurant, state: 'FL' },
      {...restaurant, state: 'CO'  }
    ]

    expect(getStates(restaurants)).toEqual(['FL', 'CO']);
  });
})

describe('Filters', () => {
  test('filterTags', () => {
    const tagOptions:string[] = ['FL', 'CO', 'AZ']
    const existingTags:string[] = ['FL']

    expect(filterTags('A', tagOptions, existingTags)).toEqual(['AZ']);
  })

  test('filterTags with no value', () => {
    const tagOptions:string[] = ['FL', 'CO', 'AZ']
    const existingTags:string[] = ['FL']

    expect(filterTags('', tagOptions, existingTags)).toEqual([]);
  })


  test('getRestaurantsFiltered', () => {
    const filters:FiltersState = {
      state: ['FL'],
      genre: ['Steak']
    }
    const restaurants:Restaurant[] = [
      {...restaurant, genre: 'Steak,Cafe,Sushi', state: 'FL' },
      {...restaurant, genre: 'Sushi,Japanese,Steak', state: 'CO' },
      {...restaurant, genre: 'Italian,Pasta,Cafe', state: 'FL'  }
    ]

    expect(getRestaurantsFiltered(filters,restaurants)).toEqual([
      {...restaurant, genre: 'Steak,Cafe,Sushi', state: 'FL' },
    ]);
  })


  test('searchRestaurants', () => {
    const restaurants:Restaurant[] = [
      {...restaurant, name: 'BJs', genre: 'Steak,Cafe,Sushi', city: 'Stuart' },
      {...restaurant, name: 'Cheesecake Factory', genre: 'American', city: 'Oviedo' },
      {...restaurant, name: 'Stanley Restaurants', genre: 'Italian,Pasta,Cafe', city: 'Phoenix'  }
    ]

    expect(searchRestaurants('St',restaurants)).toEqual([
      {...restaurant, name: 'BJs', genre: 'Steak,Cafe,Sushi', city: 'Stuart' },
      {...restaurant, name: 'Stanley Restaurants', genre: 'Italian,Pasta,Cafe', city: 'Phoenix'  }
    ]);
  })
})


