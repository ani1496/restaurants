import React, { FunctionComponent, Dispatch, useState, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

import { Restaurant } from "../../type"
import { sortAZRestaurants, sortZARestaurants } from '../../methods';

import '../../styles/Table.css'

interface Props {
  restaurants: Restaurant[];
  setRestaurants: Dispatch<SetStateAction<Restaurant[]>>
}

const Head:FunctionComponent<Props>= ({ restaurants, setRestaurants }) => {
  const [sortName, setSortName] = useState(true)
  const [sortState, setSortState] = useState(true)

  return (
    <thead className="table-header">
      <tr>
      <th className="pad-1 space-between" style={{ minWidth: '25%' }}>
        Restaurant
        <button 
          className="sort-icon"
          onClick={() => {
            console.log('Clicking')
          const rest = sortName ? 
            sortAZRestaurants('name', restaurants) : 
            sortZARestaurants('name', restaurants)

          setRestaurants(rest)
          setSortName(!sortName)
        }}>
          <FontAwesomeIcon icon={faSort} />
        </button>
      </th>
      <th className="pad-1">Genre</th>
      <th className="pad-1">Hours</th>
      <th className="pad-1 space-between" >
        Address
        <button 
          className="sort-icon"
          onClick={() => {
            const rest = sortState ? 
              sortAZRestaurants('state', restaurants) : 
              sortZARestaurants('state', restaurants)

            setRestaurants(rest)
            setSortState(!sortState)
          }}
        >
          <FontAwesomeIcon icon={faSort} />
        </button>
      </th>
      <th className="pad-1">Phone</th>
      </tr>
    </thead>
  )
}

export default Head