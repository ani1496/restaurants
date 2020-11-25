import React, { FunctionComponent, useEffect, useState } from 'react'

import { FiltersState, Order, Restaurant, SortType } from "../type"
import Header from './Header'

import '../styles/index.css'
import Table from './Table/Table'
import TableRow from './Table/TableRow'
import { getRestaurantsFiltered, getGenres, getStates, sortAZRestaurants, sortZARestaurants, searchRestaurants } from '../methods'
import Filters from './Filters/Filters'
import Pagination from './Pagination'

const Main:FunctionComponent= () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([])
  const [showRestaurants, setShowRestaurants] = useState<Restaurant[]>([])
  const [genres, setGenres] = useState<string[]>([])
  const [states, setStates] = useState<string[]>([])
  const [page, setPage] = useState(0)


  console.log(restaurants)

  const getData = async () => { 
    const res = await fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
			method: 'GET',
			headers: {'Authorization': 'Api-Key q3MNxtfep8Gt', 'Content-Type':'application/json'}
    } )
    
    return await res.json()
  }

  const resetData = (newRestaurants:Restaurant[]) => {
    const newGenres = getGenres(newRestaurants)
    setGenres([...newGenres])
    
    const newState = getStates(newRestaurants)
    setStates([...newState])

    setFilteredRestaurants(newRestaurants)
    setShowRestaurants(newRestaurants.splice(0, 10))

    setPage(0)
  }

  const updateRestaurants = (filters:FiltersState) => {
    const updatedRestaurants = getRestaurantsFiltered(filters, restaurants)

    resetData(updatedRestaurants)
  }

  const onSearch = (searchVal:string) => {
    const newRestaurants = searchRestaurants(searchVal, restaurants)
    resetData([...newRestaurants])
  }

  const sortRestaurants = (sortType:SortType, order:Order) => {
    let sortedRests = [];
    
    if (order === 'AZ') sortedRests = sortAZRestaurants(sortType, filteredRestaurants)
    else sortedRests = sortZARestaurants(sortType, filteredRestaurants)
    
    setFilteredRestaurants([...sortedRests])
    setShowRestaurants([...sortedRests].splice(0,10))
    setPage(0)
  }
  
  const onPageChange = (newPage:number) => {
    const showNewRestaurants = [...filteredRestaurants].splice(newPage*10,10)

    setPage(newPage)
    setShowRestaurants(showNewRestaurants)
  }

  useEffect(()=>{
    
    setLoading(true)
    getData().then((data) => {

      setRestaurants(data)
      setFilteredRestaurants(data)
      setShowRestaurants(data.splice(0, 10))

      const newGenres = getGenres(data)
      setGenres([...newGenres])
      
      const newState = getStates(data)
      setStates([...newState])

      setLoading(false)
    }).catch(() => {
      setLoading(false)
      setError(true)
    })
  }, [])


  if (loading) {
    return (
      <div>
      <Header onSearch={onSearch}/>
      <div className="container">
        <p className="text-align margin-4">Getting Restaurant...</p>
      </div>
    </div>
    )
  }

  if (error || showRestaurants.length === 0 ) {
    return (
      <div>
      <Header onSearch={onSearch}/>
      <div className="container">
        <Filters genres={genres} states={states} updateRestaurants={updateRestaurants} />
        <p className="text-align margin-4">Error: We apologize there were no restaurants found.</p>
      </div>
    </div>
    )
  }
  
  return (
    <div>
      <Header onSearch={onSearch} />
      <div className="container">
        <Filters genres={genres} states={states} updateRestaurants={updateRestaurants} />
        <div>
          <Table sortRestaurants={sortRestaurants}>
          {showRestaurants.map(rest => <TableRow key={rest.id} {...rest}/>)}
          </Table>
          <Pagination 
            page={page}
            filteredRestaurants={filteredRestaurants}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  )
}


export default Main;