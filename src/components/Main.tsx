import React, { FunctionComponent, useEffect, useState } from 'react'

import { FiltersState, Order, Restaurant, SortType } from "../type"
import Header from './Header'

import '../styles/index.css'
import Table from './Table/Table'
import TableRow from './Table/TableRow'
import { getRestaurantsFiltered, getGenres, getStates, sortAZRestaurants, sortZARestaurants } from '../methods'
import Filters from './Filters/Filters'
import Pagination from './Pagination'

const Main:FunctionComponent= () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([])
  const [showRestaurants, setShowRestaurants] = useState<Restaurant[]>([])
  const [genres, setGenres] = useState<string[]>([])
  const [states, setStates] = useState<string[]>([])
  const [page, setPage] = useState(0)

  const getData = async () => { 
    const res = await fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
			method: 'GET',
			headers: {'Authorization': 'Api-Key q3MNxtfep8Gt', 'Content-Type':'application/json'}
    } )
    
    return await res.json()
  }

  const updateRestaurants = (filters:FiltersState) => {
    const updatedRestaurants = getRestaurantsFiltered(filters, restaurants)
    setFilteredRestaurants(updatedRestaurants)
    setShowRestaurants([...updatedRestaurants].splice(0,10))
    setPage(0)
  }

  const onPageChange = (newPage:number) => {
    const showNewRestaurants = [...filteredRestaurants].splice(newPage*10,10)

    setPage(newPage)
    setShowRestaurants(showNewRestaurants)
  }
  
  const sortRestaurants = (sortType:SortType, order:Order) => {
    let sortedRests = [];

    if (order === 'AZ') sortedRests = sortAZRestaurants(sortType, filteredRestaurants)
    else sortedRests = sortZARestaurants(sortType, filteredRestaurants)

    setFilteredRestaurants([...sortedRests])
    setShowRestaurants([...sortedRests].splice(0,10))
    setPage(0)
  }

  useEffect(()=>{
    getData().then((data) => {

      setRestaurants(data)
      setFilteredRestaurants(data)
      setShowRestaurants(data.splice(0, 10))

      const newGenres = getGenres(data)
      setGenres([...newGenres])
      
      const newState = getStates(data)
      setStates([...newState])
    })

  }, [])

  return (
    <div>
      <Header />
      <Filters genres={genres} states={states} updateRestaurants={updateRestaurants} />
      <Table sortRestaurants={sortRestaurants}>
        {showRestaurants.map(rest => <TableRow key={rest.id} {...rest}/>)}
      </Table>
      <Pagination 
        page={page}
        filteredRestaurants={filteredRestaurants}
        onPageChange={onPageChange}
      />
    </div>
  )
}


export default Main;