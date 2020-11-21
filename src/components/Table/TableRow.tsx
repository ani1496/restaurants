import React, { FunctionComponent } from 'react'

import '../../styles/Table.css'

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
}

const TableRow:FunctionComponent<Props>= ({ 
  id, name, address1, city, state, zip, telephone, genre, hours,
} ) => (
  <tr className="table-tr" key={id}>
    <td className="pad-2">{name}</td>
    <td className="pad-2">{genre}</td>
    <td className="pad-2">{hours}</td>
    <td className="pad-2">{`${address1}, ${city}, ${state}, ${zip}`}</td>
    <td className="pad-2">{telephone}</td>
  </tr>
)

export default TableRow