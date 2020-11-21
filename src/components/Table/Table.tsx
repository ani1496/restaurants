import React, { FunctionComponent } from 'react'

import Head from './Head';

import '../../styles/Table.css'
import { Order, SortBy } from '../../type';

interface Props {
  sortRestaurants: (sortBy:SortBy, order:Order) => void;
}

const Table:FunctionComponent<Props>= (props) => {
  const { sortRestaurants } = props

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