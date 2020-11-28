import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import '../styles/Modal.css'

type Props = {
  id: string ,
  name: string,
  address1: string,
  city: string,
  state: string,
  zip: string,
  telephone: string,
  genre: string,
  hours: string,
  show: boolean,
  attire: string,
  website: string,
  tags: string,
  onClose: () => void,
}

const RestaurantModal:FunctionComponent<Props> = (props) => {
  const {
    show, onClose,
    name, address1,
    city, state, zip,
    hours, attire,
    telephone, website,
    tags,
  } = props

  if(!show) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <div className="row space-between pad-2 modal-header">
          <p>More Details:</p>
          <button 
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      <div>
        <p className="text-align pad-2-t" style={{ fontWeight: 'bold' }}>{name}</p>
        <div className="margin-3 pad-2-b pad-2-lr">
          <p className="pad-1-b">
            <b>Address: </b>
            {`${address1}, ${city}, ${state}, ${zip}`}
          </p>
          <p className="pad-1-b">
            <b>Hours: </b>
            {hours.split("; ").join("\n")}
          </p>
          <p className="pad-1-b capitalize">
            <b>Attire: </b>
            {attire}
          </p>
          <p className="pad-1-b">
            <b>Phone: </b>
            {telephone}
          </p>
          <p className="pad-1-b">
            <b>Website: </b>
            <a href={website}>{website}</a>
          </p>
          <p>
            <b>Tags: </b>
            {tags.split(",").join(", ")}
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default RestaurantModal