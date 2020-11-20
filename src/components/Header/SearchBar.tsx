import React, { FunctionComponent, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar:FunctionComponent = () => {
  const [seachVal, setSearchVal] = useState("")

  return (
    <div className="orange-light-background pad-1 row">
      <input
        className="SearchBar-input"
        type="text"
        placeholder="Search"
        value={seachVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  )
}

export default SearchBar