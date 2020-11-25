import React, { FunctionComponent, useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface Props {
  onSearch: (searchVal:string) => void;
}

const SearchBar:FunctionComponent<Props> = ({onSearch}) => {
  const [searchVal, setSearchVal] = useState('')

  useEffect(() => {
    setSearchVal('')
  }, [])

  return (
    <form 
      className="orange-light-background pad-1 row"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchVal)
      }} 
    >
      <input
        className="SearchBar-input"
        type="text"
        placeholder="Search"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  )
}

export default SearchBar