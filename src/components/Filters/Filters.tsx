import React, { FunctionComponent } from 'react'

import Filter from './Filter'

import '../../styles/Filter.css'

type Props = {
  genres: string[]
}

const Filters:FunctionComponent<Props> = ({ genres }) => {
  return (
    <div className="margin-3">
      <div className="row space-between pad-1-b">
        <p className="orange">Filters:</p>
        <button className="clear-button orange">Clear</button>
      </div>
      <Filter type="Genre" tagOptions={genres}/>
    </div>
  )
}

export default Filters