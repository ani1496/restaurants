import React, { FunctionComponent, useEffect, useState } from 'react'

import mockData from './mock'
import { Order, Restaurant, SortBy } from "../type"
import Header from './Header'

import '../styles/index.css'
import Table from './Table/Table'
import TableRow from './Table/TableRow'
import { getGenres, sortAZRestaurants, sortZARestaurants } from '../methods'
import Filters from './Filters/Filters'

const Main:FunctionComponent= () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [genres, setGenres] = useState<string[]>([])
  const [states, setStates] = useState<string[]>([])


  const getData = async () => { 
    const res = await fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
			method: 'GET',
			headers: {'Authorization': 'Api-Key q3MNxtfep8Gt', 'Content-Type':'application/json'}
    } )
    
    return await res.json()
  }
  
  useEffect(()=>{
    getData().then((data) => {

      setRestaurants(data)
      const newGenres = getGenres(data)
      // const newStates = getAddessStates(mockData)
      setGenres([...newGenres])
    })

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
      <Filters genres={genres}/>
      <Table sortRestaurants={sortRestaurants}>
        {restaurants.map(rest => <TableRow key={rest.id} {...rest}/>)}
      </Table>
    </div>
  )
}


export default Main;