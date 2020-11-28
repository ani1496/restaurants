import React, { FunctionComponent } from 'react'

import '../../styles/Table.css'
import { Restaurant } from '../../type'

interface Props {
  id: string ,
	name: string,
	address1: string,
	city: string,
	state: string,
	zip: string,
	telephone: string,
	genre: string,
  hours: string,
  onClick: () => void
}

const TableRow:FunctionComponent<Props>= ({ 
  id, name, address1, city, state, zip, telephone, genre, hours, onClick
} ) => (
  <tr className="table-tr" key={id} onClick={onClick}>
    <td className="pad-2">{name}</td>
    <td className="pad-2">{genre.split(",").join(", ")}</td>
    <td className="pad-2" style={{ whiteSpace: 'break-spaces' }}>
      {hours.split("; ").join("\n")}
    </td>
    <td className="pad-2">
      {`${address1}, `}
      <p>{`${city}, ${state}, ${zip}`}</p>
    </td>
    <td className="pad-2" style={{ whiteSpace: 'nowrap' }}>{telephone}</td>
  </tr>
)

export default TableRow