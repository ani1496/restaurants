import React, { FunctionComponent, useState } from 'react'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Restaurant } from '../type'

import '../styles/Pagination.css'

interface Props {
  filteredRestaurants: Restaurant[]
  onPageChange: (fromPage:number) => void
}

const Pagination:FunctionComponent<Props> = ({filteredRestaurants, onPageChange }) => {
  const [page, setPage] = useState(0)
  const maxPage = ~~(filteredRestaurants.length / 10)

  const showMoreRestaurants = () => {
    const newPage = page + 1
    
    onPageChange(newPage*10)
    setPage(newPage)
  }

  const showLessRestaurants = () => {
    const newPage = page - 1
    
    onPageChange(newPage*10)
    setPage(newPage)
  }

  return (
    <div className="row margin-2" style={{ justifyContent: 'flex-end' }}>
      <p className="pad-2-r align-center">
        {`${((page*10)+1)} - 
          ${page === maxPage ? filteredRestaurants.length : ((page*10)+10) } 
          of ${filteredRestaurants.length}
        `}
      </p>
      <button
        className="pad-1-r show-more-less-button"
        disabled={page === 0}
        onClick={showLessRestaurants}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
      </button>
      <button
        className="pad-1-r show-more-less-button"
        disabled={page === maxPage}
        onClick={showMoreRestaurants}
      >
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </button>
    </div>
  )
}

export default Pagination