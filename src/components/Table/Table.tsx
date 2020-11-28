import React, { FunctionComponent } from 'react'

import Head from './Head';

import '../../styles/Table.css'
import { Order, Restaurant, SortType } from '../../type';

interface Props {
  sortRestaurants: (sortType:SortType, order:Order) => void;
  restaurants: Restaurant[]
}

const Table:FunctionComponent<Props>= (props) => {
  const { sortRestaurants, restaurants } = props

  if (restaurants.length === 0) return (
    <div className="container">
      <p className="text-align margin-4">Error: We apologize there were no restaurants found.</p>
    </div>
  )
 
  return (
    <div className="margin-3">
      <table className="table">
        <Head sortRestaurants={sortRestaurants} />
        <tbody>
          {props.children}
        </tbody>
      </table>
    </div>
  )
}

export default Table