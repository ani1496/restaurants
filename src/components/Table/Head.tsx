import React, { FunctionComponent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

import { Order, SortType } from "../../type"


import '../../styles/Table.css'

interface Props {
  sortRestaurants: (sortType:SortType, order:Order) => void;
}

const Head:FunctionComponent<Props>= ({ sortRestaurants }) => {
  const [sortName, setSortName] = useState<Order>('ZA')
  const [sortState, setSortState] = useState<Order>('ZA')

  return (
    <thead className="table-header">
      <tr>
      <th className="pad-1 space-between" style={{ minWidth: '25%' }}>
        Restaurant
        <button 
          className="sort-icon"
          onClick={() => {
            const order = sortName === 'AZ' ? 'ZA' : 'AZ'
            sortRestaurants('name', order)
            setSortName(order)
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
            const order = sortState === 'AZ' ? 'ZA' : 'AZ'
            sortRestaurants('state', order)
            setSortState(order)
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