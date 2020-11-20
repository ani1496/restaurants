import React, { FunctionComponent, useEffect, useState } from 'react'
import { AnyAction } from 'redux';
import { connect } from 'react-redux'
import { ThunkDispatch } from "redux-thunk";
import * as Actions from '../../store/actions'

import '../../styles/Table.css'

const Table:FunctionComponent = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect( () => {

  })

  return (
    <div className="margin-3">
      <table className="table">
        <thead className="table-header">
          <th className="pad-1" style={{ minWidth: '25%' }}>Restaurant</th>
          <th className="pad-1">Genre</th>
          <th className="pad-1">Hours</th>
          <th className="pad-1">Location</th>
          <th className="pad-1">Address</th>
          <th className="pad-1">Phone</th>
        </thead>
        <tbody>
          <tr className="table-tr">
            <td className="pad-2">Old Hickory Steakhouse</td>
            <td className="pad-2">Steak, American, Contemporary, Seafood, Cafe</td>
            <td className="pad-2">Open Daily 5:30 PM - 10:00 PM</td>
            <td className="pad-2">Oxon Hill, MD</td>
            <td className="pad-2">201 Waterfront St</td>
            <td className="pad-2">(301) 965-4000</td>
          </tr>
          <tr className="table-tr">
            <td className="pad-2">Old Hickory Steakhouse</td>
            <td className="pad-2">Steak, American, Contemporary, Seafood, Cafe</td>
            <td className="pad-2">Open Daily 5:30 PM - 10:00 PM</td>
            <td className="pad-2">Oxon Hill, MD</td>
            <td className="pad-2">201 Waterfront St</td>
            <td className="pad-2">(301) 965-4000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  getRestaurantsList: () => dispatch(Actions.getRestaurantsList())
})

export default connect(()=>{}, mapDispatchToProps)(Table)