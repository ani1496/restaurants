import React, {FunctionComponent} from 'react'

import SearchBar from './SearchBar'

import '../../styles/Header.css'

interface Props {
  onSearch: (searchVal:string) => void;
}

const Header:FunctionComponent<Props> = ({ onSearch }) => (
  <div className="Header pad-2">
    <p className="align-center">DINE ME</p>
    <SearchBar onSearch={onSearch}/>
  </div>
)

export default Header