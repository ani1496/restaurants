import React, {FunctionComponent} from 'react'

import SearchBar from './SearchBar'

import '../../styles/Header.css'

const Header:FunctionComponent = () => (
  <div className="Header pad-2">
    <p className="align-center">DINE ME</p>
    <SearchBar/>
  </div>
)

export default Header