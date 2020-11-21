import React, { FunctionComponent, useEffect, useState } from 'react'

import mockData from './mock'
import { Order, Restaurant, SortBy } from "../type"
import Header from './Header'

import '../styles/index.css'
import Table from './Table'
import TableRow from './Table/TableRow'
import { sortAZRestaurants, sortZARestaurants } from '../methods'

const Main:FunctionComponent= () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  
  useEffect(()=>{
    setRestaurants(mockData)
  }, [])

  const sortRestaurants = (sortBy:SortBy, order:Order) => {
    let sortedRests = [];

    if (order === 'AZ') sortedRests = sortAZRestaurants(sortBy, restaurants)
    else sortedRests = sortZARestaurants(sortBy, restaurants)

    setRestaurants([...sortedRests])
  }

  return (
    <div>
      <Header />
      <p>filters</p>
      <Table sortRestaurants={sortRestaurants}>
        {restaurants.map(rest => <TableRow key={rest.id} {...rest}/>)}
      </Table>
    </div>
  )
}


export default Main;