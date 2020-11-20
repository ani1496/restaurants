import React, { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from 'react'

import Head from './Head';
import { Restaurant } from "../../type"

import '../../styles/Table.css'

interface Props {
  restaurants: Restaurant[];
  setRestaurants: Dispatch<SetStateAction<Restaurant[]>>
}

const Table:FunctionComponent<Props>= ({ restaurants, setRestaurants } ) => {
  console.log('Table', restaurants)
  
  if (restaurants.length === 0) return <p>No Restaurants found at the moment</p>

  return (
    <div className="margin-3">
      <table className="table" key={restaurants[0].id}>
        <Head restaurants={restaurants} setRestaurants={setRestaurants} />
        <tbody>
          {restaurants.map((restaurant:Restaurant) => {
            const {id, name, genre, hours, city, state, address1, telephone } = restaurant

            return (
              <tr className="table-tr" key={id}>
                <td className="pad-2">{name}</td>
                <td className="pad-2">{genre}</td>
                <td className="pad-2">{hours}</td>
                <td className="pad-2">{`${address1}, ${city}, ${state}`}</td>
                <td className="pad-2">{telephone}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table