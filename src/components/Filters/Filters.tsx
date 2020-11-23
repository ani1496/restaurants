import React, { FunctionComponent, useState } from 'react'

import Filter from './Filter'
import { FilterType, FiltersState } from '../../type'

import '../../styles/Filter.css'

type Props = {
  genres: string[]
  states: string[]
  updateRestaurants: (filters:FiltersState) => void
}

const Filters:FunctionComponent<Props> = ({ genres, states, updateRestaurants }) => {
  const [filters, setFilters] = useState({
    genre: [],
    state: [],
  })

  const onFilterChange = (type:FilterType, filterVals:string[]) => {
    const newFilters = { ...filters, [type]: filterVals }
    setFilters(newFilters)
    updateRestaurants(newFilters)
  }

  return (
    <div className="margin-3">
      <div className="row space-between pad-1-b">
        <p className="orange">Filters:</p>
        <button className="clear-button orange">Clear</button>
      </div>
      <div className="row">
        <Filter type="genre" tagOptions={genres} onFilterChange={onFilterChange} className="margin-1-r" />
        <Filter type="state" tagOptions={states} onFilterChange={onFilterChange} className=""/>
      </div>
    </div>
  )
}

export default Filters