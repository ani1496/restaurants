import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Restaurant } from '../../type'

import Table from './Table'

interface Props {
  restaurants: Restaurant[];
  setRestaurants: Dispatch<SetStateAction<Restaurant[]>>
}

const Home:FunctionComponent<Props>= ({ restaurants, setRestaurants } ) => {
  return (
    <div>
      <p>Filters</p>
      <Table restaurants={restaurants} setRestaurants={setRestaurants} />
    </div>
  )
}

export default Home