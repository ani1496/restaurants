import React, { FunctionComponent } from 'react'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Restaurant } from '../type'

import '../styles/Pagination.css'

interface Props {
  page: number,
  onPageChange: (page:number) => void
  filteredRestaurants: Restaurant[]
}

const Pagination:FunctionComponent<Props> = ({page, onPageChange, filteredRestaurants }) => {
  const maxPage = ~~(filteredRestaurants.length / 10)

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
        onClick={() => onPageChange(page - 1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
      </button>
      <button
        className="pad-1-r show-more-less-button"
        disabled={page === maxPage}
        onClick={() => onPageChange(page + 1)}
      >
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </button>
    </div>
  )
}

export default Pagination