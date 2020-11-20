import React, { FunctionComponent, useEffect } from 'react'
import { AnyAction } from 'redux';
import { connect } from 'react-redux'
import { ThunkDispatch } from "redux-thunk";

import { GlobalState, Restaurant, RestaurantsAction } from "../../type"
import * as Actions from '../../store/actions'

import '../../styles/Table.css'

interface Props {
  restaurants: Restaurant[];
  getRestaurantsList: () => RestaurantsAction
}

const Table:FunctionComponent<Props>= ({ restaurants, getRestaurantsList } ) => {

  console.log(restaurants)

  useEffect( () => {
    getRestaurantsList();
  }, [])

  if (restaurants.length === 0) return <p>No Restaurants found at the moment</p>

  return (
    <div className="margin-3">
      <table className="table">
        <thead className="table-header">
          <th className="pad-1" style={{ minWidth: '25%' }}>Restaurant</th>
          <th className="pad-1">Genre</th>
          <th className="pad-1">Hours</th>
          <th className="pad-1">Address</th>
          <th className="pad-1">Phone</th>
        </thead>
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

const mapStateToProps = (store: GlobalState) => { 
  const { restaurants } = store

  return { restaurants}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  getRestaurantsList: () => dispatch(Actions.getRestaurantsList())
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)