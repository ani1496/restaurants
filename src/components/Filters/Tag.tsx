import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

type Props = {
  name: string
  onClick: (name:string) => void
}

const Tag:FunctionComponent<Props> = ({name, onClick}) => {
  return (
    <div className="orange-light-background margin-1-tb margin-1-r pad-1-l pad-1-r row white">
      <p className="pad-1-r">{name}</p>
      <button type="button" onClick={() => onClick(name)}>
        <FontAwesomeIcon icon={faTimes}/>
      </button>
    </div>
  )
}

export default Tag